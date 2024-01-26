import { create } from "zustand";

interface Favorite{
    model: string;
}

interface FavoriteStore{
    favoriteCars: Favorite[],
    addFavorite: (model:string) => void;
    removeFavorite: (model:string) => void;
}

const useFavoriteCarStore = create<FavoriteStore>(set => ({
    favoriteCars: [],
    addFavorite: (model) => set((state) => ({favoriteCars: [...state.favoriteCars, {model}]})),
    removeFavorite: (model) => set((state) => ({favoriteCars: state.favoriteCars.filter(c => c.model !== model)}))
}))

export default useFavoriteCarStore;

