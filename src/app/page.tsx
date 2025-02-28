"use client";

import { useCounterStore } from "@/store/store";


export default function Home() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);
  
  return (
    <div className="p-3 border flex flex-col">
      <div>{count}</div>
      <div>{count}</div>
      <button onClick={incrementAsync}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
