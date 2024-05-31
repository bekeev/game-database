import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '../api-service/fetchGames';
import { Table } from '../components/Table/Table';
import moment from 'moment';
import { create } from 'zustand';

const Container = styled.div``;

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

export const Games: React.FC = () => {
    const { genreID, platformId, publisherId } = useSelectStore();
    const { data, isFetching, isError } = useQuery({
        queryKey: ['games', genreID, platformId, publisherId],
        queryFn: fetchGames({
            [SelectKeys.GENRE_ID]: genreID,
            [SelectKeys.PLATFORM_ID]: platformId,
            [SelectKeys.PUBLISHER_ID]: publisherId,
        }),
    });

    return (
        <Container>
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
                                <td>{moment(item.released).format('dddd')}</td>
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
