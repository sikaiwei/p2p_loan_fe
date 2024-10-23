import { create } from 'zustand';
// import create from 'zustand/next';

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
}));
export default useCounterStore;

