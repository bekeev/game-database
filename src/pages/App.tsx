import React from 'react';
import styled from 'styled-components';

import { Navbar } from '../components/Navbar/Navbar';
import { GamesPage } from './GamesPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainPage } from './MainPage';
import { GenresPage } from './GenresPage';
import { PlatformsPage } from './PlatformsPage';
import { PublishersPage } from './PublishersPage';

const Container = styled.div``;

export const App: React.FC = () => {
    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/genres" element={<GenresPage />} />
                <Route path="/platforms" element={<PlatformsPage />} />
                <Route path="/publishers" element={<PublishersPage />} />
                <Route
                    path="/contacts"
                    element={
                        <Alert variant="light">
                            Здесь могла быть ваша реклама! (:
                        </Alert>
                    }
                />
                <Route
                    path="/not-found-404"
                    element={
                        <Alert variant="danger">Страница не найдена</Alert>
                    }
                />
                <Route path="/game-database" element={<MainPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/not-found-404" replace />}
                />
            </Routes>
            <ToastContainer />
        </Container>
    );
};
