import React, { useContext, useRef } from "react"
import { AppContext } from "@/app/context"
import { EditContext } from "@/features/edit-element/edit-context"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const PreviewResume = () => {

  const Context = useContext(AppContext)
  const { values } = Context
 
  const resumeRef = useRef()
   // Export to PDF
  const exportToPDF = async () => {
    const element = resumeRef.current; // Get the target element
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    // const imageWindow = window.open("", "_blank");
    // imageWindow.document.write(`<img src="${imgData}" alt="Preview" style="width:100%;"/>`);
    const pdf = new jsPDF("p", "mm", "a4"); // A4 PDF in portrait mode
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf"); // Save the PDF
  };

  const elementRef = useRef<HTMLElement | null>()
  const editContext = useContext(EditContext)
  const { element, setElement } = editContext

  const OnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    elementRef.current = target;
    setElement(elementRef.current)
    //console.log(element.innerText)
  }

  return (
    <>
      <div className="">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-center">Resume Preview</h1>
        <div className="bg-white shadow-lg max-w-5xl rounded-md m-4 p-10 grid grid-cols-6 gap-y-6 gap-x-12 w-[210mm] h-[297mm] mx-auto" ref={resumeRef}>
          <h1 className="text-center scroll-m-20 text-3xl font-extrabold tracking-tight col-span-6 tracking-widest uppercase" onClick={OnClick}>{values.name}</h1>
          <p className="col-span-6 text-center text-xl font-semibold tracking-widest uppercase" onClick={OnClick}>SOFTWARE DEVELOPER</p>
          <Separator className="col-span-6 border-t-2 border-black" />
          <div className="col-span-2">
            <h2 className="text-xl font-semibold tracking-widest uppercase" onClick={OnClick}>CONTACT</h2>
            <ul className="pl-5 pt-3 list-disc space-y-2">
              <li onClick={OnClick}>{values.number}</li>
              <li onClick={OnClick}>{values.email}</li>
              <li onClick={OnClick}>{values.address}</li>
            </ul>
            <h2 className="text-xl font-semibold tracking-widest uppercase pt-5" onClick={OnClick}>TECHNICAL SKILLS</h2>
            <ul className="pl-5 pt-3  space-y-2">
              <li onClick={OnClick}>{values.technicalSkillOne}</li>
              <li onClick={OnClick}>{values.technicalSkillTwo}</li>
              <li onClick={OnClick}>{values.technicalSkillThree}</li>
            </ul>
            <h2 className="text-xl font-semibold tracking-widest uppercase pt-5" onClick={OnClick}>SOFT SKILLS</h2>
            <ul className="pl-5 pt-3 list-disc space-y-2">
              <li onClick={OnClick}>{values.softSkillOne}</li>
              <li onClick={OnClick}>{values.softSkillTwo}</li>
              <li onClick={OnClick}>{values.softSkillThree}</li>
            </ul>
          </div>
          <div className="col-span-4">
            <h2 className="text-xl font-semibold tracking-widest uppercase" onClick={OnClick}>PROFILE</h2>
            <p className="pt-3" onClick={OnClick}>{values.profile}</p>
            <h2 className="text-xl font-semibold tracking-widest uppercase pt-5" onClick={OnClick}>WORK EXPERIENCE</h2>

            <div className="pt-3">
              <div className="flex items-center justify-between">
                <p className="font-medium" onClick={OnClick}>{values.workExperienceTitleOne}</p>
                <p>{values.workExperienceStartPeriodOne} - {values.workExperienceEndPeriodOne}</p>
              </div>
              <p className="pt-3 pb-3">{values.workExperienceCompanyOne}</p>
              <p onClick={OnClick}>{values.workExperienceDetailsOne}</p>
            </div>

            <div className="pt-5">
              <div className="flex items-center justify-between">
                <p className="font-medium" onClick={OnClick}>{values.workExperienceTitleTwo}</p>
                <p>{values.workExperienceStartPeriodTwo} - {values.workExperienceEndPeriodTwo}</p>
              </div>
              <p className="pt-3 pb-3">{values.workExperienceCompanyTwo}</p>
              <p onClick={OnClick}>{values.workExperienceDetailsTwo}</p>
            </div>
          </div>
        </div>
        <Button onClick={exportToPDF}>Export as PDF</Button>
      </div>
    </>
  )
}