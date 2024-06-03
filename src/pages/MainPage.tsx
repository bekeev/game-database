import React from 'react';
import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin: 24px;
`;

type TCard = {
    title: string;
    description: string;
    imageSrc: string;
    link: string;
};
const cards: TCard[] = [
    {
        title: 'Список игр',
        description:
            'Здесь вы можете найти любую из когда-либо выпущенных игр на любой игровой платформе',
        imageSrc:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        link: 'games',
    },
    {
        title: 'Список жанров',
        description: 'Здесь вы можете найти список жанров',
        imageSrc:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        link: 'genres',
    },
    {
        title: 'Список платформ',
        description: 'Здесь вы можете список платформ',
        imageSrc:
            'https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg',
        link: 'platforms',
    },
    {
        title: 'Список издателей',
        description: 'Здесь вы можете список издателей',
        imageSrc:
            'https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg',
        link: 'publishers',
    },
];
export const MainPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            {cards.map(({ title, description, imageSrc, link }) => (
                <Card style={{ width: '18rem' }} key={link}>
                    <Card.Img variant="top" src={imageSrc} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => navigate(link)}
                        >
                            Перейти
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};
