import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AppContext } from "@/app/context";
import { Form } from "@/components/ui/form";
import { FormSetting } from "@/features/information/components/work-setting";
import { SettingContext } from "@/features/information/setting-context";
import { CustomInput, CustomTextarea } from "@/features/information/components/custom-field";
import { ModuleSetting } from "@/features/information/components/module-setting";

const formSchema = z.object({
  name: z.string().min(1, {message: "Please fill in name"}),
  number: z.string().min(1, { message: "Please fill in number" }),
  email: z.string().min(1, { message: "Please fill in email" }).email({ message: "Please enter a valid email address" }),
  address: z.string().min(1, { message: "Please fill in address" }),
  technicalSkills: z.string().min(1, { message: "Please fill in technical skills" }),
  softSkills: z.string().min(1, { message: "Please fill in soft skills" }),
  profile: z.string().min(1, { message: "Please fill in profile" }),
  workExperienceTitleOne: z.string().optional(),
  workExperienceCompanyOne: z.string().optional(),
  workExperienceDetailsOne: z.string().optional(),
  workExperiencePeriodOne: z.string().optional(),
  workExperienceTitleTwo: z.string().optional(),
  workExperienceCompanyTwo: z.string().optional(),
  workExperienceDetailsTwo: z.string().optional(),
  workExperiencePeriodTwo: z.string().optional(),
  moduleTitleOne: z.string().min(1, { message: "Please fill in module title (1)" }),
  moduleDetailsOne: z.string().min(1, { message: "Please fill in module details (1)" }),
  moduleTitleTwo: z.string().optional(),
  moduleDetailsTwo: z.string().optional(),
  moduleTitleThree: z.string().optional(),
  moduleDetailsThree: z.string().optional(),
  ccaTitleOne: z.string().min(1, { message: "Please fill in CCA title" }),
  ccaSchoolOne: z.string().min(1, { message: "Please fill in CCA school" }),
  ccaPeriodOne: z.string().min(1, { message: "Please fill in CCA period" }),
  ccaDetailOne: z.string().min(1, { message: "Please fill in CCA details" }),
  achievements: z.string().min(1, { message: "Please fill in achievements" }),
  schoolOneName: z.string().min(1, { message: "Please fill in first school name" }),
  schoolOnePeriod: z.string().min(1, { message: "Please fill in first school period" }),
  schoolTwoName: z.string().min(1, { message: "Please fill in second school name" }),
  schoolTwoPeriod: z.string().min(1, { message: "Please fill in second school period" }),
  languages: z.string().min(1, { message: "Please fill in languages" })

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
    moduleTitleTwo: "",
    moduleDetailsTwo: "",
    moduleTitleThree: "",
    moduleDetailsThree: "",
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
    resolver: zodResolver(formSchema),
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
    console.log(form.formState.errors); 
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
              <CustomTextarea form={form} name="workExperienceDetailsOne" label="Work Experience Details 1" placeholder={"Work Experience Detail One\nWork Experience Detail Two"} />
              <CustomInput form={form} name="workExperiencePeriodOne" label="Work Experience Period 1" placeholder="2022 September - 2022 October" />
            </>
          )}

          {formSettings.isWorkExperienceTwo && (
            <>
              <CustomInput form={form} name="workExperienceTitleTwo" label="Work Experience Title 2" placeholder="Work Experience Title 2" />
              <CustomInput form={form} name="workExperienceCompanyTwo" label="Work Experience Company 2" placeholder="Work Experience Company 2" />
              <CustomTextarea form={form} name="workExperienceDetailsTwo" label="Work Experience Details 2" placeholder={"Work Experience Detail One\nWork Experience Detail Two"} />
              <CustomInput form={form} name="workExperiencePeriodTwo" label="Work Experience Period 2" placeholder="2023 May - 2023 September" />
            </>
          )}

          <CustomInput form={form} name="moduleTitleOne" label="Module Title 1" placeholder="Module Title 1" />
          <CustomTextarea form={form} name="moduleDetailsOne" label="Module Details 1" placeholder={"Detail one\nDetail two"} />
          <ModuleSetting />

          {formSettings.isModuleTwo && (
            <>
              <CustomInput form={form} name="moduleTitleTwo" label="Module Title 2" placeholder="Module Title 2" />
              <CustomTextarea form={form} name="moduleDetailsTwo" label="Module Details 2" placeholder={"Module detail one\nModule detail two"} />
            </>
          )}

          {formSettings.isModuleThree && (
            <>
              <CustomInput form={form} name="moduleTitleThree" label="Module Title 3" placeholder="Module Title 3" />
              <CustomTextarea form={form} name="moduleDetailsThree" label="Module Details 3" placeholder={"Module detail one\nModule detail two"} />
            </>
          )}
          <CustomInput form={form} name="ccaTitleOne" label="First CCA title" placeholder="First CCA title" />
          <CustomInput form={form} name="ccaSchoolOne" label="First CCA school" placeholder="First CCA school" />
          <CustomInput form={form} name="ccaDetailOne" label="First CCA details" placeholder="First CCA details" />
          <CustomInput form={form} name="ccaPeriodOne" label="First CCA period" placeholder="2022 - 2025" />
          <CustomTextarea form={form} name="achievements" label="Achievements" placeholder={"Achievement one\nAchievement two"} />
          <CustomInput form={form} name="schoolOneName" label="First school name" placeholder="Singapore Polytechnic" />
          <CustomInput form={form} name="schoolOnePeriod" label="First school period" placeholder="2022 - 2025" />
          <CustomInput form={form} name="schoolTwoName" label="Second school name" placeholder="Singapore Polytechnic" />
          <CustomInput form={form} name="schoolTwoPeriod" label="Second school period" placeholder="2022 - 2025" />
          <CustomTextarea form={form} name="languages" label="Languages" placeholder={"Language one\nLanguage two"} />
        </form>
      </Form>
    </div>
  );
}
