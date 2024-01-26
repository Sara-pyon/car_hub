import { create } from "zustand";

interface CarQuery{
    year?: number;
    fuel?: string;
    make?:string;
}

interface CarQueryStore {
    carQuery: CarQuery;
    setYear: (year: number) => void;
    setFuel: (fuel:string) => void;
    setMake: (make:string) => void;
}

const useCarQueryStore = create<CarQueryStore>(set => ({
    carQuery: {},
    setYear: (year) => set((store) => ({carQuery:{...store.carQuery, year} })),
    setFuel: (fuel) => set((store) => ({carQuery:{...store.carQuery, fuel}})),
    setMake: (make) => set((store) => ({carQuery:{...store.carQuery, make}}))
}))

export default useCarQueryStore;