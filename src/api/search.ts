const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "feb980f5aa2969dd2e01b0c3a916e200";

/**
 * Retrieve movies via api
 * 
 * @param query searchword  
 * @param page pagination
 * 
 * @returns movies
 */
export const searchMovies = async (query: string, page: number) => {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}&query=${query}&page=${page}`);
    
    if (!response.ok) throw new Error("Failed to fetch movies");
    
    return await response.json();
};