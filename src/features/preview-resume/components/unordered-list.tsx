import React, { useContext } from "react"
import { AppContext } from "@/app/context"


export const UnorderedList = ({ values, classNames }: { values: string, classNames?: string }) => {
  const valuesArray = values.split("\n").filter((str: string) => str.trim() !== "");

  return (
    <>
      <ul className={classNames}>
        {valuesArray.map((value, index) =>
          <li className="break-normal whitespace-pre-wrap" key={index}>{value}</li>
        )}
      </ul>
    </>
  )

}