import { useContext } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { SettingContext, FormSettingsType } from "@/features/information/setting-context"

const FormSchema = z.object({
  isWorkExperienceOne: z.boolean().default(true),
  isWorkExperienceTwo: z.boolean().default(false),
})

export function FormSetting() {

  const settingContext = useContext(SettingContext)
  const { setFormSettings } = settingContext

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      isWorkExperienceOne: true,
      isWorkExperienceTwo: false,
    },
  })

  function onChangeHandler(field: keyof FormSettingsType, value: boolean) {
    setFormSettings((prevSettings: FormSettingsType) => ({
      ...prevSettings,
      [field]: value,
    }))
  }

  return (
    <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow">
      <Form {...form}>
        <FormField
          control={form.control}
          name="isWorkExperienceOne"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked)
                    onChangeHandler("isWorkExperienceOne", checked)
                  }}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  One work experience
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isWorkExperienceTwo"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked)
                    onChangeHandler("isWorkExperienceTwo", checked)
                  }}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Additional work experience
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </Form>
    </div>
  )
}
