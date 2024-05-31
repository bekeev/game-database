import { fetchUrlWithToken, RawgResponse } from './api';

export type Publisher = {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
};

export const fetchPublishers = async (): Promise<RawgResponse<Publisher>> => {
    return fetchUrlWithToken('publishers');
};
