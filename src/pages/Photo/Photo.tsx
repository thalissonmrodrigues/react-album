import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import { PhotoItem } from '../../components/PhotoItem';
import { AlbumTypes } from '../../types/AlbumType';
import { PhotoType } from '../../types/PhotoType';
import * as C from './styles';

export const Photo = () => {
    const params = useParams();
    const [photo, setPhoto] = useState<PhotoType>();
    const [album, setAlbum] = useState<AlbumTypes>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (params.album && params.photo) {
            loadPhoto(params.photo);
            loadAlbum(params.album);
        }
    }, []);

    const loadAlbum = async (id: string) => {
        const currentAlbum = await api.getAlbum(id);
        setAlbum(currentAlbum);
    }

    const loadPhoto = async (id: string) => {
        setLoading(true);
        const currentPhotos = await api.getPhoto(id);
        setLoading(false);
        setPhoto(currentPhotos);
    }

    return (
        <C.Container>
            {loading && <p>Loading...</p> }

            {!loading && photo && album &&
                <>
                    <h2>{album.title} / {photo.title}</h2>                
                    <PhotoItem bigPhoto={true} photo={photo} album={album} />
                </>
            }
        </C.Container>
    )
}