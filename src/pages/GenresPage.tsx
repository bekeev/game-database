import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { CustomImage } from '../components/commons/CustomImage';

import { Table } from '../components/Table/Table';
import { fetchGenres } from '../api-service/fetchGenres';

const Container = styled.div`
    margin: 24px;
`;

export const GenresPage: React.FC = () => {
    const { data, isFetching, isError } = useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenres,
    });

    return (
        <Container>
            <Table
                headRow={
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Количество игр</th>
                        <th>Картинка на превью</th>
                    </tr>
                }
                tableData={
                    <>
                        {data?.results.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.games_count}</td>
                                <td>
                                    <CustomImage
                                        imageSrc={item.image_background}
                                    />
                                </td>
                            </tr>
                        ))}
                    </>
                }
                isLoading={isFetching || isError}
            />
        </Container>
    );
};
