import { useEffect, useState } from 'react';
import { api } from '../../api';
import { AlbumItem } from '../../components/AlbumItem';
import { AlbumTypes } from '../../types/AlbumType';
import * as C from './styles';

export const NotFound = () => {
    return (
        <C.Container>
            <h1>Erro 404 - Página Não Encontrada</h1>
        </C.Container>
    )
}