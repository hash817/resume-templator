import { createContext, useState, ReactNode } from 'react';
interface EditContextType {
    color: string | null;
    setColor: (values: string) => void;
}

export const EditContext = createContext<EditContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}


export const EditContextProvider = ({ children }: AppProviderProps) => {
   const [color, setColor] = useState<string | null>("#000000")
    return (
        <EditContext.Provider value={{ color, setColor }}>
            {children}
        </EditContext.Provider>
    )
}