import { fetchUrlWithToken, RawgResponse } from './api';
import { Platform } from './fetchPlatforms';
import { Genre } from './fetchGenres';
import { Publisher } from './fetchPublishers';
import { TSelectState } from '../pages/GamesPage';

export type Game = {
    id: number;
    name: string;
    released: string;
    background_image: string;
    rating: number;
    ratings_count: number;
    platforms: Platform[];
    genres: Genre[];
    publishers: Publisher[];
    metacritic: number;
};

export const fetchGames =
    (selectData: TSelectState) => async (): Promise<RawgResponse<Game>> => {
        const queryParams = new URLSearchParams();

        if (selectData) {
            if (selectData?.genreID !== 0) {
                queryParams.append('genres', selectData.genreID.toString());
            }

            if (selectData?.platformId !== 0) {
                queryParams.append(
                    'platforms',
                    selectData.platformId.toString()
                );
            }

            if (selectData.publisherId !== 0) {
                queryParams.append(
                    'publishers',
                    selectData.publisherId.toString()
                );
            }
        }

        return fetchUrlWithToken('games', queryParams);
    };
