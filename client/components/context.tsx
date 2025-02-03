/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import { ReactNode } from "react";
import { residencies } from "./constants";

export const residContext = createContext<any[]>([]);

function Context({ children }: { children: ReactNode }) {
  return (
    <residContext.Provider value={residencies}>
      {children}
    </residContext.Provider>
  );
}

export default Context;
