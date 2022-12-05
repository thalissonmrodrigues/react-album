import { useNavigate } from 'react-router-dom';
import * as C from './styles';

export const Header = () => {
    const navigate = useNavigate();
    const path = window.location.pathname;
    
    return (
        <> 
            {path !== '/' && <C.BackButton onClick={() => navigate(-1)}>Voltar</C.BackButton> }
            <C.Container>
                <h1>React Álbuns</h1>
            </C.Container>
            <hr />
        </>
    )
}