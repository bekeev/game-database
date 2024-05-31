import { fetchUrlWithToken, RawgResponse } from './api';

export type Platform = {
    id: number;
    name: string;
    slug: string;
    image?: string;
    year_end?: number;
    year_start?: number;
    games_count: number;
    image_background: string;
};

export const fetchPlatforms = async (): Promise<RawgResponse<Platform>> => {
    return fetchUrlWithToken('platforms');
};
