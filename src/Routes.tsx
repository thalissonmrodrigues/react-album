import { useRoutes } from 'react-router-dom'
import { Album } from './pages/Album';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Photo } from './pages/Photo';

export const Routes = () => {
    const routes = useRoutes([
        {path: '/', element: <Home />},
        {path: '/album/:album', element: <Album />},
        {path: '/album/:album/photo/:photo', element: <Photo />},
        {path: '/*', element: <NotFound />},
    ]);

    return routes;
}