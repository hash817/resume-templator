import React, { useContext, useEffect, useState } from "react"
import { EditContext } from "@/features/edit-element/edit-context"
import { Input } from "@/components/ui/input"

export const EditElement = () => {
  const editContext = useContext(EditContext)
  const { element, setElement } = editContext
  
  const [color, setColor] = useState("#000000")

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setColor(e.target.value)
    if (element)
      element.style.color = e.target.value;
  }

  return (
    <>
      <p>{color}</p>
      <Input onChange={OnChange} type="color" value={color} className="" />
      <p>{element ? element.innerText : "No element"}</p>
    </>
  )
}