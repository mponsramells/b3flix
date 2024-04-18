export const useTmdb = () => {
    const config = useRuntimeConfig();
    const apiKey = config.public.tmdbApiKey;
    const query = '?language=en-US&page=1';
    const baseUrl = 'https://api.themoviedb.org/3';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };
    const getMovies = async (path: string) => {
        const url = `${baseUrl}/movie/${path}${query}`;
        const response = await $fetch(url, options);
        return response.results;
    };
    const getMovieById = async (id: string) => {
        const url = `${baseUrl}/movie/${id}`;
        const response = await $fetch(url, options);
        return response;
    };
    const getMovieAndVideosById = async (id: string) => {
        const url = `${baseUrl}/movie/${id}?append_to_response=videos&language=en-US`;
        const response = await $fetch(url, options);
        return response;
    };
    return { getMovies, getMovieById, getMovieAndVideosById };

}