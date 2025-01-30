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
            <Input placeholder={placeholder} {...field} />
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
              placeholder={placeholder}
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export { CustomInput, CustomTextarea }