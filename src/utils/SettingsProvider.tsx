import React, { createContext, useContext, useState } from "react";

type SettingsContextType = {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
  time: number;
  setTime: (time: number) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [difficulty, setDifficulty] = useState("medium");
  const [time, setTime] = useState(60);

  return (
    <SettingsContext.Provider
      value={{ difficulty, setDifficulty, time, setTime }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
