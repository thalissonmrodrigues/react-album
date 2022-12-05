import { Link } from 'react-router-dom';
import { AlbumTypes } from '../../types/AlbumType';
import { PhotoType } from '../../types/PhotoType';
import * as C from './styles';

type Props = {
    photo: PhotoType;
    album: AlbumTypes;
    bigPhoto?: boolean
}

export const PhotoItem = ({ photo, album, bigPhoto }: Props) => {
    return (
        <>
            {!bigPhoto && 
                <C.PhotoItem>
                    <Link to={`/album/${album.id}/photo/${photo.id}`}>
                        <img src={photo.thumbnailUrl} alt="thumbnail" width="150"/>
                    </Link>
                </C.PhotoItem>
            }

            {bigPhoto && 
                <C.PhotoItem>
                    <img src={photo.url} alt="thumbnail" width="600"/>
                </C.PhotoItem>
            }
        </>
    );
}