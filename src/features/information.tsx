import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useContext } from "react"
import { AppContext } from "@/app/context"
import { Textarea } from "@/components/ui/textarea"


const formSchema = z.object({
  name: z.string().min(1),
  number: z.string().min(1),
  email: z.string().min(1).email(),
  address: z.string().min(1),
  technicalSkillOne: z.string().min(1),
  technicalSkillTwo: z.string().min(1),
  technicalSkillThree: z.string().min(1),
  softSkillOne: z.string().min(1),
  softSkillTwo: z.string().min(1),
  softSkillThree: z.string().min(1),
  profile: z.string().min(1),
  workExperienceTitleOne: z.string().min(1),
  workExperienceCompanyOne: z.string().min(1),
  workExperienceDetailsOne: z.string().min(1),
  workExperienceStartPeriodOne: z.string().min(1),
  workExperienceEndPeriodOne: z.string().min(1),
  workExperienceTitleTwo: z.string().min(1),
  workExperienceCompanyTwo: z.string().min(1),
  workExperienceDetailsTwo: z.string().min(1),
  workExperienceStartPeriodTwo: z.string().min(1),
  workExperienceEndPeriodTwo: z.string().min(1)
})

export function Information() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
   // resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      technicalSkillOne: "",
      technicalSkillTwo: "",
      technicalSkillThree: "",
      softSkillOne: "",
      softSkillTwo: "",
      softSkillThree: "",
      profile: "",
      workExperienceTitleOne: "",
      workExperienceCompanyOne: "",
      workExperienceDetailsOne: "",
      workExperienceStartPeriodOne: "",
      workExperienceEndPeriodOne: "",
      workExperienceTitleTwo: "",
      workExperienceCompanyTwo: "",
      workExperienceDetailsTwo: "",
      workExperienceStartPeriodTwo: "",
      workExperienceEndPeriodTwo: "",
    },
  })

  const Context = useContext(AppContext);
  if (!Context) {
    return <div>Context is not available</div>;
  }
  const { setValues } = Context;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setValues(values)
    console.log(values)
  }


  return (
    <>
    {/* <ScrollArea className="shadow-lg max-w-xs rounded-md m-4 p-4 h-[500px]"> */}
      <div className="p-1">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">Fill in your details</h1>
        <p className="pb-5">Information entered here will be displayed in the resume template</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your full name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technicalSkillOne"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technical Skill 1</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Technical Skill 1"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technicalSkillTwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technical Skill 2</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Technical Skill 2"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technicalSkillThree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technical Skill 3</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Technical Skill 3"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="softSkillOne"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soft Skill 1</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Soft Skill 1"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="softSkillTwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soft Skill 2</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Soft Skill 2"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="softSkillThree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soft Skill 3</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Soft Skill 3"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Profile"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceTitleOne"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience Title 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Work Experience Title 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceCompanyOne"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience Company 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Work Experience Company 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceDetailsOne"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience Details 1</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Work Experience Details 1"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceStartPeriodOne"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience Start Period 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Work Experience Start Period 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceEndPeriodOne"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience End Period 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Work Experience End Period 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceTitleTwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience Title 2</FormLabel>
                  <FormControl>
                    <Input placeholder="Work Experience Title 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceCompanyTwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience Company 2</FormLabel>
                  <FormControl>
                    <Input placeholder="Work Experience Company 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceDetailsTwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience Details 2</FormLabel>
                  <FormControl>
                  <Textarea
                      placeholder="Work Experience Details 2"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceStartPeriodTwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience Start Period 2</FormLabel>
                  <FormControl>
                    <Input placeholder="Work Experience Start Period 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workExperienceEndPeriodTwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Experience End Period 2</FormLabel>
                  <FormControl>
                    <Input placeholder="Work Experience End Period 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      {/* </ScrollArea> */}
    </>
  )
}