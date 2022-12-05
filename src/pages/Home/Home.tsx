import { useEffect, useState } from 'react';
import { api } from '../../api';
import { AlbumItem } from '../../components/AlbumItem';
import { AlbumTypes } from '../../types/AlbumType';
import * as C from './styles';

export const Home = () => {
    const [albumList, setAlbumList] = useState<AlbumTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        setLoading(true);
        const albums = await api.getAlbums();
        setLoading(false);
        setAlbumList(albums);
    }

    return (
        <C.Container>
            {loading && <p>Loading...</p> }

            {!loading &&
                <C.AlbumGrid>
                    {albumList.map((album, key) => (
                        <AlbumItem key={key} album={album} />
                    ))}
                </C.AlbumGrid>
            }
        </C.Container>
    )
}