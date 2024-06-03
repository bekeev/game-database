import React from 'react';
import styled from 'styled-components';

import { Navbar } from '../components/Navbar/Navbar';
import { Games } from './Games';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const Container = styled.div``;

export const App: React.FC = () => {
    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path="/games" element={<Games />} />
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
                <Route
                    path="*"
                    element={<Navigate to="/not-found-404" replace />}
                />
            </Routes>
        </Container>
    );
};
