const API_KEY = "fdfdf0195814faf6e1b4cdd711f215a8";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    const respone = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await respone.json()
    return data.results
};


export const searchMovies = async (query) => {
    const respone = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await respone.json()
    return data.results
};