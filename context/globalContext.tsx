"use client";

import { FormSchema, FormSchemaWithExtras } from "@/lib/schemas";
import React, {
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { z } from "zod";

type ContextType = {
  next: boolean;
  setNext: Dispatch<SetStateAction<boolean>>;
  registerState: z.infer<typeof FormSchema> | undefined;
  setRegisterState: Dispatch<
    SetStateAction<z.infer<typeof FormSchema> | undefined>
  >;
  finalState: z.infer<typeof FormSchemaWithExtras> | undefined;
  setFinalState: Dispatch<
    SetStateAction<z.infer<typeof FormSchemaWithExtras> | undefined>
  >;
  successState: boolean;
  setSuccessState: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = React.createContext<ContextType | null>(null);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [next, setNext] = useState(false);
  const [successState, setSuccessState] = useState(false);

  const [registerState, setRegisterState] =
    useState<z.infer<typeof FormSchema>>();

  const [finalState, setFinalState] =
    useState<z.infer<typeof FormSchemaWithExtras>>();

  return (
    <GlobalContext.Provider
      value={{
        next,
        setNext,
        registerState,
        setRegisterState,
        finalState,
        setFinalState,
        successState,
        setSuccessState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalstate() {
  const State = React.useContext(GlobalContext);
  if (State === null) {
    throw new Error("useMessage must be used within a CounterProvider");
  }

  return State;
}
