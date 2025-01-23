import { createContext, useState, ReactNode } from 'react';
interface EditContextType {
    element: string | null;
    setElement: (values: string) => void;
}

export const EditContext = createContext<EditContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}


export const EditContextProvider = ({ children }: AppProviderProps) => {
   const [element, setElement] = useState<string | null>(null)
    return (
        <EditContext.Provider value={{ element, setElement }}>
            {children}
        </EditContext.Provider>
    )
}