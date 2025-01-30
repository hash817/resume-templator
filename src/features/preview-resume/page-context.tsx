import { createContext, useState, ReactNode } from 'react';
interface PageContextType {
    page: number | null;
    setPage: (values: number) => void;
}

export const PageContext = createContext<PageContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}


export const PageContextProvider = ({ children }: AppProviderProps) => {
   const [page, setPage] = useState<number | null>(1)
    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    )
}