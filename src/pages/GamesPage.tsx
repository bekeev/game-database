import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { create } from 'zustand';
import { toast } from 'react-toastify';

import { GamesTableFilter } from '../components/Table/GamesTableFilter/GamesTableFilter';
import { Table } from '../components/Table/Table';
import { fetchGames } from '../api-service/fetchGames';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 24px;
`;

export enum SelectKeys {
    GENRE_ID = 'genreID',
    PLATFORM_ID = 'platformId',
    PUBLISHER_ID = 'publisherId',
}

export type TSelectState = {
    [key in SelectKeys]: number;
};

export const useSelectStore = create<
    TSelectState & {
        setSelectValue: (selectName: SelectKeys, id: number) => void;
    }
>((set) => ({
    [SelectKeys.GENRE_ID]: 0,
    [SelectKeys.PLATFORM_ID]: 0,
    [SelectKeys.PUBLISHER_ID]: 0,
    setSelectValue: (selectName: SelectKeys, id: number) =>
        set((state) => ({
            ...state,
            [selectName]: id,
        })),
}));

export const GamesPage: React.FC = () => {
    const { genreID, platformId, publisherId } = useSelectStore();
    const { data, isFetching, isError, isSuccess } = useQuery({
        queryKey: ['games', genreID, platformId, publisherId],
        queryFn: fetchGames({
            [SelectKeys.GENRE_ID]: genreID,
            [SelectKeys.PLATFORM_ID]: platformId,
            [SelectKeys.PUBLISHER_ID]: publisherId,
        }),
    });

    useEffect(() => {
        if (isSuccess) {
            toast.success('Запрос выполнен успешно', {
                autoClose: 2000,
            });
        }
    }, [isSuccess]);

    return (
        <Container>
            <GamesTableFilter />
            <Table
                headRow={
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Дата релиза</th>
                        <th>Рейтинг Metacritic</th>
                    </tr>
                }
                tableData={
                    <>
                        {data?.results.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    {moment(item.released).format(
                                        'Do MMMM YYYY'
                                    )}
                                </td>
                                <td>{item.metacritic}</td>
                            </tr>
                        ))}
                    </>
                }
                isLoading={isFetching || isError}
            />
        </Container>
    );
};
