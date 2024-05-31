const API_KEY = 'aae2d39c9c204f2ead03fb84bdd40868';
const BASE_URL = 'https://api.rawg.io/api';

export interface RawgResponse<T> {
    count: number;
    next: 'string';
    previous: 'string';
    results: T[];
}

export const fetchUrlWithToken = (
    endpoint: string,
    queryParams?: URLSearchParams
) => {
    return fetch(`${BASE_URL}/${endpoint}?key=${API_KEY}&${queryParams}`).then(
        (response) => response.json()
    );
};
