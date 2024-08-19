import React, { createContext, useContext, ReactNode, useState } from "react";

interface AppContextType {
  enableLogs: boolean;
  setEnableLogs: (logs: boolean) => void;
}

const Context = createContext<AppContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [enableLogs, setEnableLogs] = useState<boolean>(true);

  return (
    <Context.Provider value={{ enableLogs, setEnableLogs }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppCoentextProvider");
  }

  return context;
};
