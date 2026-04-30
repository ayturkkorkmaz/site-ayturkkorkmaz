"use client";
import React, { createContext, useContext, useState } from "react";
import type { Lang } from "./translations";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({ lang: "tr", toggle: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");
  const toggle = () => setLang((l) => (l === "tr" ? "en" : "tr"));
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
