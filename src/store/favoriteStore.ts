import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Favorite{
    model: string;
}

interface FavoriteStore{
    favoriteCars: Favorite[],
    addFavorite: (model:string) => void;
    removeFavorite: (model:string) => void;
}

const useFavoriteCarStore = create<FavoriteStore>()(
    persist(
        (set) => ({
    favoriteCars: [],
    addFavorite: (model) => set((state) => ({favoriteCars: [...state.favoriteCars, {model}]})),
    removeFavorite: (model) => set((state) => ({favoriteCars: state.favoriteCars.filter(c => c.model !== model)}))
}),
{
    name: 'favorite-cars',
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({favoriteCars: state.favoriteCars})
}
),
);


export default useFavoriteCarStore;

