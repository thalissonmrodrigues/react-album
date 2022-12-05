import { Link } from 'react-router-dom';
import { AlbumTypes } from '../../types/AlbumType';
import * as C from './styles';

type Props = {
    album: AlbumTypes;
}

export const AlbumItem = ({ album }: Props) => {
    return (
        <C.AlbumItem>
            <Link to={`/album/${album.id}`}>{album.title}</Link>
        </C.AlbumItem>
    );
}