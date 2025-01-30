import { useContext } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { SettingContext, FormSettingsType } from "@/features/information/setting-context"

const FormSchema = z.object({
  isModuleTwo: z.boolean().default(false),
  isModuleThree: z.boolean().default(false),
})

export function ModuleSetting() {

  const settingContext = useContext(SettingContext)
  const { setFormSettings } = settingContext!

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      isModuleTwo: false,
      isModuleThree: false,
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
          name="isModuleTwo"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked: boolean) => {
                    field.onChange(checked)
                    onChangeHandler("isModuleTwo", checked)
                  }}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Second additional module to fill in
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isModuleThree"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked: boolean) => {
                    field.onChange(checked)
                    onChangeHandler("isModuleThree", checked)
                  }}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Third additional module to fill in
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </Form>
    </div>
  )
}
