import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 2,
  increment: () => {  
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync : async ()=>{
    await new Promise((resolve)=>setTimeout(resolve,2000));
    set((state) => ({ count: state.count + 2 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
