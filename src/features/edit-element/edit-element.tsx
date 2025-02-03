import React, { useContext } from "react"
import { EditContext } from "@/features/edit-element/edit-context"
import { Input } from "@/components/ui/input"
export const EditElement = ({ classNames }: {classNames: string}) => {
  const editContext = useContext(EditContext)
  const { color, setColor }  = editContext!
  

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setColor(e.target.value)
  }

  return (
    <>
      <div className={classNames}>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-center pb-3">Name color</h1>
        <Input onChange={OnChange} type="color" value={color} className="" />
      </div>
    </>
  )
}