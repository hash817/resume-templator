import { createContext, useState, ReactNode } from 'react';
export interface EditContextType {
    color: string;
    setColor: (values: string) => void;
}

export const EditContext = createContext<EditContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}


export const EditContextProvider = ({ children }: AppProviderProps) => {
   const [color, setColor] = useState<string>("#000000")
    return (
        <EditContext.Provider value={{ color, setColor }}>
            {children}
        </EditContext.Provider>
    )
}