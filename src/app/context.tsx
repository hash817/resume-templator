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
    "technicalSkills": "Integrated Figma and other graphic design tools to produce visually appealing website layouts and components\nDeveloped and maintained responsive and user-friendly web applications using HTML5, CSS3, and JavaScript.\nImplemented VueJS to enhance user interactions and deliver seamless, intuitive interfaces",
    "softSkills": "Experience in creating visually appealing and cohesive design concepts.\nExcellent communication skills inspoken and written English.\nExcellent communication skills inspoken and written English.",
    "profile": "Highly motivated and results-driven professional with a proven ability to excel in fast-paced environments. A passionate lifelong learner, I thrive on continuous growth and eagerly embrace the challenge of pioneering new concepts. Possessing strong analytical and problem-solving skills, I approach challenges with a strategic mindset, identifying innovative solutions to drive successful outcomes. A selfstarter with a demonstrated ability to take initiative and lead projects to completion, I am committed to contributing dynamic energy and expertise to a team-focused organization",
    "workExperienceTitleOne": "F & B Server",
    "workExperienceCompanyOne": "ONE15 Marina Hotel",
    "workExperienceDetailsOne": "Greeted guests warmly, offering detailed explanations of buffet offerings andproviding recommendations based on their preferences.\nImplemented creative displays and thematic arrangements during special events, contributing to the hotel's reputation for exquisite dining experiences.",
    "workExperiencePeriodOne": "2022 September - 2022 October",
    "workExperienceTitleTwo": "Bubble Tea Barista",
    "workExperienceCompanyTwo": "KOI",
    "workExperienceDetailsTwo": "Proactively engaged customers by suggesting add-ons or complementary items,contributing to increased sales and customer satisfaction.\nManaged cash transactions accurately, preventing discrepancies and ensuring the integrity of financial transactions.",
    "workExperiencePeriodTwo": "2023 May - 2023 September",
    "moduleTitleOne": "Enterprise Systems Development",
    "moduleDetailsOne": "Used a good software design patterns such as the model-view-controller architecture when designing an application to optimize and host it on the cloud.\nEnforced web usability principles, adhering to W3C web standards and accessibility guidelines.",
    "moduleTitleTwo": "Enterprise Systems Development",
    "moduleDetailsTwo": "Used a good software design patterns such as the model-view-controller architecture when designing an application to optimize and host it on the cloud.\nEnforced web usability principles, adhering to W3C web standards and accessibility guidelines.",
    "moduleTitleThree": "Enterprise Systems Development",
    "moduleDetailsThree": "Used a good software design patterns such as the model-view-controller architecture when designing an application to optimize and host it on the cloud.\nEnforced web usability principles, adhering to W3C web standards and accessibility guidelines.",
    "ccaTitleOne":"Track and Field (Short distance)",
    "ccaSchoolOne":"Singapore Polytechnic",
    "ccaPeriodOne":"2022 - 2025",
    "ccaDetailOne": "Competed in various track and field events like Poly 50, consistently striving to improve personal records and contribute to the team's overall succes\nActively participated in club recruitment events, helping to attract new members to join the Track and Field Club.",
    "achievements": "2021 Edusave Award\n2022 Edusave Award",
    "schoolOneName": "Singapore Polytechnic",
    "schoolOnePeriod": "2022 - 2025",
    "schoolTwoName": "Bukit Batok Secondary School",
    "schoolTwoPeriod": "2018 - 2022",
    "languages": "English\nChinese\nMalay"
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [values, setValues] = useState<Record<string, string> | null>(DefaultContext)
    return (
        <AppContext.Provider value={{ values, setValues }}>
            {children}
        </AppContext.Provider>
    )
}