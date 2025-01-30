import { createContext, useState, ReactNode } from 'react';
interface PageContextType {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PageContext = createContext<PageContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}


export const PageContextProvider = ({ children }: AppProviderProps) => {
   const [page, setPage] = useState<number>(1)
    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    )
}