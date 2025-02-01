import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormSchemaType } from "@/features/information/information-form"
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea"
import { useContext } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { SettingContext, FormSettingsType } from "@/features/information/setting-context"



type CustomFieldProps = {
  form: UseFormReturn<FormSchemaType>
  name: keyof FormSchemaType
  label: string
  placeholder: string
}

const CustomInput = ({ form, name, label, placeholder }: CustomFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              value={field.value as string}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const CustomTextarea = ({ form, name, label, placeholder }: CustomFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              value={field.value as string}
              placeholder={placeholder}
              className="resize-none"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const CustomCheckbox = ({ form, name, label }: { form: UseFormReturn<FormSchemaType>, name: keyof FormSettingsType, label: string }) => {
  const settingContext = useContext(SettingContext)
  const { setFormSettings } = settingContext!

  function onChangeHandler(field: keyof FormSettingsType, value: boolean) {
    setFormSettings((prevSettings: FormSettingsType) => ({
      ...prevSettings,
      [field]: value,
    }))
  }

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={(checked: boolean) => {
                  field.onChange(checked)
                  onChangeHandler(name, checked)
                }}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                {label}
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </>
  )
}

export { CustomInput, CustomTextarea, CustomCheckbox }