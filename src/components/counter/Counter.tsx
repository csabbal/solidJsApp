"use client";
import { createEffect, createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  createEffect(()=>{
    console.log('effect test',count())
  })

  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
