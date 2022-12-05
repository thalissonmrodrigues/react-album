import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import { PhotoItem } from '../../components/PhotoItem';
import { AlbumTypes } from '../../types/AlbumType';
import { PhotoType } from '../../types/PhotoType';
import * as C from './styles';

export const Album = () => {
    const params = useParams();
    const [photoList, setPhotoList] = useState<PhotoType[]>([]);
    const [album, setAlbum] = useState<AlbumTypes>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (params.album) {
            loadPhotos(params.album);
            loadAlbum(params.album);
        }
    }, []);

    const loadAlbum = async (id: string) => {
        const currentAlbum = await api.getAlbum(id);
        setAlbum(currentAlbum);
    }

    const loadPhotos = async (id: string) => {
        setLoading(true);
        const photos = await api.getPhotos(id);
        setLoading(false);
        setPhotoList(photos);
    }

    return (
        <C.Container>
            {loading && <p>Loading...</p> }

            {!loading && photoList && album &&
                <>
                    <h2>{album.title}</h2>
                    <C.PhotoGrid>
                        {photoList.map((photo, key) => (
                            <PhotoItem key={key} photo={photo} album={album} />
                        ))}
                    </C.PhotoGrid>
                </>
            }
        </C.Container>
    )
}