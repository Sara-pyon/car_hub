import { create } from "zustand";

interface CarQuery{
    year: string;
    fuel?: string;
    make?: string;
    drive?:string;
    transmission?:string;
}

interface CarQueryStore {
    carQuery: CarQuery;
    setYear: (year: string) => void;
    setFuel: (fuel:string) => void;
    setMake: (make:string) => void;
    setDrive: (drive:string) => void;
    setTransmission: (transmission:string) => void;
    reset: () => void;
}

const useCarQueryStore = create<CarQueryStore>(set => ({
    carQuery: {year: '2018'},
    setYear: (year) => set((store) => ({carQuery:{...store.carQuery, year} })),
    setFuel: (fuel) => set((store) => ({carQuery:{...store.carQuery, fuel}})),
    setMake: (make) => set((store) => ({carQuery:{...store.carQuery, make}})),
    setDrive: (drive) => set((store) => ({carQuery:{...store.carQuery, drive}})),
    setTransmission: (transmission) => set((store) => ({carQuery:{...store.carQuery, transmission}})),
    reset:() => set(() => ({carQuery:{year:'2018'}}))
}))

export default useCarQueryStore;