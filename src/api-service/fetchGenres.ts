import { fetchUrlWithToken, RawgResponse } from './api';
import { Game } from './fetchGames';

export type Genre = {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: Game[];
};

export const fetchGenres = async (): Promise<RawgResponse<Genre>> => {
    return fetchUrlWithToken('genres');
};
