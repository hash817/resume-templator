import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AppContext } from "@/app/context";
import { Form } from "@/components/ui/form";
import { FormSetting } from "@/features/information/components/form-setting";
import { SettingContext } from "@/features/information/setting-context";
import { CustomInput, CustomTextarea } from "@/features/information/components/custom-field";

const formSchema = z.object({
  name: z.string().min(1),
  number: z.string().min(1),
  email: z.string().min(1).email(),
  address: z.string().min(1),
  technicalSkills: z.string().min(1),
  softSkills: z.string().min(1),
  profile: z.string().min(1),
  workExperienceTitleOne: z.string().min(1),
  workExperienceCompanyOne: z.string().min(1),
  workExperienceDetailsOne: z.string().min(1),
  workExperiencePeriodOne: z.string().min(1),
  workExperienceTitleTwo: z.string().min(1),
  workExperienceCompanyTwo: z.string().min(1),
  workExperienceDetailsTwo: z.string().min(1),
  workExperiencePeriodTwo: z.string().min(1),
  moduleTitleOne: z.string().min(1),
  moduleDetailsOne: z.string().min(1),
  ccaTitleOne: z.string().min(1),
  ccaSchoolOne: z.string().min(1),
  ccaPeriodOne: z.string().min(1),
  ccaDetailOne: z.string().min(1),
  achievements: z.string().min(1),
  schoolOneName: z.string().min(1),
  schoolOnePeriod: z.string().min(1),
  schoolTwoName: z.string().min(1),
  schoolTwoPeriod: z.string().min(1),
  languages: z.string().min(1),
});

export type FormSchemaType = z.infer<typeof formSchema>;



export function Information() {
  const settingContext = useContext(SettingContext);
  const { formSettings } = settingContext;

  // Load stored values from localStorage
  const storedValues = localStorage.getItem("formData");
  const initialValues: FormSchemaType = storedValues ? JSON.parse(storedValues) : {
    name: "",
    number: "",
    email: "",
    address: "",
    technicalSkills: "",
    softSkills: "",
    profile: "",
    workExperienceTitleOne: "",
    workExperienceCompanyOne: "",
    workExperienceDetailsOne: "",
    workExperiencePeriodOne: "",
    workExperienceTitleTwo: "",
    workExperienceCompanyTwo: "",
    workExperienceDetailsTwo: "",
    workExperiencePeriodTwo: "",
    moduleTitleOne: "",
    moduleDetailsOne: "",
    ccaTitleOne: "",
    ccaSchoolOne: "",
    ccaPeriodOne: "",
    ccaDetailOne: "",
    achievements: "",
    schoolOneName: "",
    schoolOnePeriod: "",
    schoolTwoName: "",
    schoolTwoPeriod: "",
    languages: "",
  };

  const form = useForm<FormSchemaType>({
    defaultValues: initialValues,
  });

  const Context = useContext(AppContext);

  const { setValues } = Context;

  function onSubmit(values: FormSchemaType) {
    setValues(values);
    localStorage.setItem("formData", JSON.stringify(values)); // Save to localStorage
    console.log("Form Submitted:", values);
  }

  useEffect(() => {
    const subscription = form.watch((values) => {
      localStorage.setItem("formData", JSON.stringify(values)); // Auto-save on change
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <div className="p-1">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">Fill in your details</h1>
      <p className="pb-5">Information entered here will be displayed in the resume template</p>

      <Form {...form}>
        <form id="informationForm" onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <CustomInput form={form} name="name" label="Name" placeholder="Your name" />
          <CustomInput form={form} name="number" label="Phone number" placeholder="Phone number" />
          <CustomInput form={form} name="email" label="Email" placeholder="Email" />
          <CustomInput form={form} name="address" label="Address" placeholder="Address" />
          <CustomTextarea form={form} name="technicalSkills" label="Technical Skills" placeholder={"Technical skill one\nTechnical skill two"} />
          <CustomTextarea form={form} name="softSkills" label="Soft Skills" placeholder={"Soft skill one\nSoft skill two"} />
          <CustomTextarea form={form} name="profile" label="Profile" placeholder="Profile" />

          <FormSetting />

          {formSettings.isWorkExperienceOne && (
            <>
              <CustomInput form={form} name="workExperienceTitleOne" label="Work Experience Title 1" placeholder="Work Experience Title 1" />
              <CustomInput form={form} name="workExperienceCompanyOne" label="Work Experience Company 1" placeholder="Work Experience Company 1" />
              <CustomTextarea form={form} name="workExperienceDetailsOne" label="Work Experience Details 1" placeholder="Details" />
              <CustomInput form={form} name="workExperiencePeriodOne" label="Work Experience Period 1" placeholder="2022 September - 2022 October" />
            </>
          )}

          {formSettings.isWorkExperienceTwo && (
            <>
              <CustomInput form={form} name="workExperienceTitleTwo" label="Work Experience Title 2" placeholder="Work Experience Title 2" />
              <CustomInput form={form} name="workExperienceCompanyTwo" label="Work Experience Company 2" placeholder="Work Experience Company 2" />
              <CustomTextarea form={form} name="workExperienceDetailsTwo" label="Work Experience Details 2" placeholder="Details" />
              <CustomInput form={form} name="workExperiencePeriodTwo" label="Work Experience Period 2" placeholder="2023 May - 2023 September" />
            </>
          )}

          <CustomInput form={form} name="moduleTitleOne" label="First module title" placeholder="Module title" />
          <CustomTextarea form={form} name="moduleDetailsOne" label="First module details" placeholder={"Detail one\nDetail two"} />
          <CustomInput form={form} name="ccaTitleOne" label="First CCA title" placeholder="CCA title" />
          <CustomInput form={form} name="ccaSchoolOne" label="First CCA school" placeholder="CCA school" />
          <CustomTextarea form={form} name="achievements" label="Achievements" placeholder={"Achievement one\nAchievement two"} />
          <CustomInput form={form} name="schoolOneName" label="First school name" placeholder="School name" />
          <CustomTextarea form={form} name="languages" label="Languages" placeholder={"Language one\nLanguage two"} />
        </form>
      </Form>
    </div>
  );
}
