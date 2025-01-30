import { createContext, useState, ReactNode } from 'react';

export interface FormSettingsType {
  isWorkExperienceOne: boolean;
  isWorkExperienceTwo: boolean;
}

interface SettingContextType {
  formSettings: FormSettingsType;
  setFormSettings: React.Dispatch<React.SetStateAction<FormSettingsType>>;
}

export const SettingContext = createContext<SettingContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}


export const SettingContextProvider = ({ children }: AppProviderProps) => {
  const [formSettings, setFormSettings] = useState({
    isWorkExperienceOne: true,
    isWorkExperienceTwo: false,
  })

  return (
    <SettingContext.Provider value={{ formSettings, setFormSettings }}>
      {children}
    </SettingContext.Provider>
  )
}