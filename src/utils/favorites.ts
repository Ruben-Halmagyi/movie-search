export const addFavorite = (movieId: number) => {
    const favorites = getFavorites();
    if (!favorites.includes(movieId)) {
        favorites.push(movieId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};

export const removeFavorite = (movieId: number) => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(id => id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

export const getFavorites = (): number[] => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
};

export const isFavorite = (movieId: number): boolean => {
    const favorites = getFavorites();
    return favorites.includes(movieId);
};