import { createContext, useState, ReactNode } from 'react';

interface AppContextType {
    values: Record<string, string> | null;
    setValues: (values: Record<string, string> | null) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}

const DefaultContext: Record<string, string> = {
    "name":"Name",
    "number": "1234 5678",
    "email": "name@ichat.sp.edu.sg",
    "address": "Bukit Batok West Ave 6",
    "technicalSkillOne": "Integrated Figma and other graphic design tools to produce visually appealing website layouts andcomponents",
    "technicalSkillTwo": "Developed and maintained responsive and user-friendly web applications using HTML5, CSS3, and JavaScript.",
    "technicalSkillThree": "Implemented VueJS to enhance user interactions and deliver seamless, intuitive interfaces",
    "softSkillOne": "Experience in creating visually appealing and cohesive design concepts.",
    "softSkillTwo": "Excellent communication skills inspoken and written English.",
    "softSkillThree": "Excellent communication skills inspoken and written English.",
    "profile": "Highly motivated and results-driven professional with a proven ability to excel in fast-paced environments. A passionate lifelong learner, I thrive on continuous growth and eagerly embrace the challenge of pioneering new concepts. Possessing strong analytical and problem-solving skills, I approach challenges with a strategic mindset, identifying innovative solutions to drive successful outcomes. A selfstarter with a demonstrated ability to take initiative and lead projects to completion, I am committed to contributing dynamic energy and expertise to a team-focused organization",
    "workExperienceTitleOne": "F & B Server",
    "workExperienceCompanyOne": "ONE15 Marina Hotel",
    "workExperienceDetailsOne": "Greeted guests warmly, offering detailed explanations of buffet offerings andproviding recommendations based on their preferences.",
    "workExperienceStartPeriodOne": "2022 September",
    "workExperienceEndPeriodOne": " 2022 October",
    "workExperienceTitleTwo": "Bubble Tea Barista",
    "workExperienceCompanyTwo": "KOI",
    "workExperienceDetailsTwo": "Proactively engaged customers by suggesting add-ons or complementary items,contributing to increased sales and customer satisfaction.",
    "workExperienceStartPeriodTwo": "2023 May",
    "workExperienceEndPeriodTwo": "2023 September",
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [values, setValues] = useState<Record<string, string> | null>(DefaultContext)
    return (
        <AppContext.Provider value={{ values, setValues }}>
            {children}
        </AppContext.Provider>
    )
}