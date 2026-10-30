"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export default function YearLabel() {
  const year = useSyncExternalStore(
    subscribe,
    () => String(new Date().getFullYear()),
    () => "—",
  );

  return <span>© {year}</span>;
}
