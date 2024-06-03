import React from 'react';
import styled from 'styled-components';
import { TableSelect } from '../TableSelect/TableSelect';
import { useQuery } from '@tanstack/react-query';
import { fetchGenres } from '../../../api-service/fetchGenres';
import { fetchPlatforms } from '../../../api-service/fetchPlatforms';
import { fetchPublishers } from '../../../api-service/fetchPublishers';
import { SelectKeys, useSelectStore } from '../../../pages/GamesPage';

const Container = styled.div`
    display: flex;
    gap: 12px;
    width: 60vw;
`;

export const GamesTableFilter: React.FC = () => {
    const { genreID, platformId, publisherId, setSelectValue } =
        useSelectStore();

    const handleChangeState = (selectKey: SelectKeys, id: number) => {
        setSelectValue(selectKey, id);
    };

    const {
        data: genresData,
        isFetching: isGenresFetching,
        isError: isGenresError,
    } = useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenres,
    });

    const {
        data: platformsData,
        isFetching: isPlatformsFetching,
        isError: isPlatformsError,
    } = useQuery({
        queryKey: ['platforms'],
        queryFn: fetchPlatforms,
    });

    const {
        data: publishersData,
        isFetching: isPublishersFetching,
        isError: isPublishersError,
    } = useQuery({
        queryKey: ['publishers'],
        queryFn: fetchPublishers,
    });

    return (
        <Container>
            <TableSelect
                selectId={genreID}
                selectData={genresData?.results.map(({ id, name }) => ({
                    value: id,
                    label: name,
                }))}
                isLoading={isGenresFetching}
                isError={isGenresError}
                onChange={(id) => handleChangeState(SelectKeys.GENRE_ID, id)}
            />
            <TableSelect
                selectId={platformId}
                selectData={platformsData?.results.map(({ id, name }) => ({
                    value: id,
                    label: name,
                }))}
                isLoading={isPlatformsFetching}
                isError={isPlatformsError}
                onChange={(id) => handleChangeState(SelectKeys.PLATFORM_ID, id)}
            />
            <TableSelect
                selectId={publisherId}
                selectData={publishersData?.results.map(({ id, name }) => ({
                    value: id,
                    label: name,
                }))}
                isLoading={isPublishersFetching}
                isError={isPublishersError}
                onChange={(id) =>
                    handleChangeState(SelectKeys.PUBLISHER_ID, id)
                }
            />
        </Container>
    );
};
