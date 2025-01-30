import { useContext, useRef, useState } from "react"
import { UnorderedList } from "@/features/preview-resume/components/unordered-list"
import { AppContext } from "@/app/context"
import { EditContext } from "@/features/edit-element/edit-context"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import { SettingContext } from "@/features/information/setting-context"
import { PageHandler } from "@/features/preview-resume/components/page-handler"
import { PageContext } from "@/features/preview-resume/page-context"

export const PreviewResume = () => {
  const [isExporting, setIsExporting] = useState(false);

  const editContext = useContext(EditContext)
  const { color } = editContext!

  const settingContext = useContext(SettingContext)
  const { formSettings } = settingContext!

  const pageContext = useContext(PageContext)
  const { page, setPage } = pageContext!

  const Context = useContext(AppContext)
  const { values } = Context!

  const resumeRef = useRef<HTMLDivElement>(null)

  // Function to render a specific page content
  const renderPage = (pageNumber: number) => (
    pageNumber === 1 ? (
      <>
        <h1 className="text-center scroll-m-20 text-3xl font-extrabold tracking-tight col-span-6 tracking-widest uppercase" style={{ color }}>{values.name}</h1>
        <Separator className="mt-5 mb-5 col-span-6 border-t-2 border-black" />
        <div className="col-span-2">
          <h2 className="text-xl font-semibold tracking-widest uppercase" >CONTACT</h2>
          <ul className="pl-5 pt-3 list-disc space-y-2">
            <li className="break-words whitespace-normal overflow-wrap-break-word">{values.number}</li>
            <li className="break-words whitespace-normal overflow-wrap-break-word">{values.email}</li>
            <li className="break-words whitespace-normal overflow-wrap-break-word">{values.address}</li>
          </ul>

          <h2 className="text-xl font-semibold tracking-widest uppercase pt-5">TECHNICAL SKILLS</h2>
          <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.technicalSkills} />

          <h2 className="text-xl font-semibold tracking-widest uppercase pt-5">SOFT SKILLS</h2>
          <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.softSkills} />

        </div>
        <div className="col-span-4">
          <h2 className="text-xl font-semibold tracking-widest uppercase">PROFILE</h2>
          <p className="pt-3 break-words whitespace-normal overflow-wrap-break-word">{values.profile}</p>
          <h2 className="text-xl font-semibold tracking-widest uppercase pt-5">WORK EXPERIENCE</h2>

          {formSettings.isWorkExperienceOne && (
            <div className="pt-3">
              <div className="flex items-center justify-between">
                <p className="font-medium">{values.workExperienceTitleOne}</p>
                <p>{values.workExperiencePeriodOne}</p>
              </div>
              <p className="pt-3 pb-3">{values.workExperienceCompanyOne}</p>
              <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.workExperienceDetailsOne} />
            </div>
          )}

          {formSettings.isWorkExperienceTwo && (
            <div className="pt-5">
              <div className="flex items-center justify-between">
                <p className="font-medium">{values.workExperienceTitleTwo}</p>
                <p>{values.workExperiencePeriodTwo}</p>
              </div>
              <p className="pt-3 pb-3">{values.workExperienceCompanyTwo}</p>
              <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.workExperienceDetailsTwo} />
            </div>
          )}
        </div>
      </>
    ) : (
      <>
        <h1 className="text-center scroll-m-20 text-3xl font-extrabold tracking-tight col-span-6 tracking-widest uppercase" style={{ color }}>{values.name}</h1>
        <Separator className="mt-5 mb-5 col-span-6 border-t-2 border-black" />
        <div className="col-span-2">
          <h2 className="text-xl font-semibold tracking-widest uppercase" >CONTACT</h2>
          <ul className="pl-5 pt-3 list-disc space-y-2">
            <li className="break-words whitespace-normal overflow-wrap-break-word">{values.number}</li>
            <li className="break-words whitespace-normal overflow-wrap-break-word">{values.email}</li>
            <li className="break-words whitespace-normal overflow-wrap-break-word">{values.address}</li>
          </ul>

          <h2 className="text-xl font-semibold tracking-widest uppercase pt-10 mt-10">ACHIEVEMENTS</h2>
          <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.achievements} />

          <h2 className="text-xl font-semibold tracking-widest uppercase  pt-10 mt-10">EDUCATION</h2>
          <div className="pt-3">
            <p className="font-medium">{values.schoolOneName}</p>
            <p className="pt-1">{values.schoolOnePeriod}</p>
          </div>
          <div className="pt-3">
            <p className="font-medium">{values.schoolTwoName}</p>
            <p className="pt-1">{values.schoolTwoPeriod}</p>
          </div>

          <h2 className="text-xl font-semibold tracking-widest uppercase  pt-10 mt-9">LANGUAGES</h2>
          <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.languages} />
        </div>
        <div className="col-span-4">

          <h2 className="text-xl font-semibold tracking-widest uppercase">ACADEMIC - PROJECTS</h2>
          <div className="pt-3">
            <p className="font-medium">{values.moduleTitleOne}</p>
            <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.moduleDetailsOne} />
          </div>

          {formSettings.isModuleTwo && (
            <div className="pt-3">
              <p className="font-medium">{values.moduleTitleTwo}</p>
              <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.moduleDetailsTwo} />
            </div>
          )}

          {formSettings.isModuleThree && (
            <div className="pt-3">
              <p className="font-medium">{values.moduleTitleThree}</p>
              <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.moduleDetailsThree} />
            </div>
          )}
          <h2 className="text-xl font-semibold tracking-widest uppercase pt-10 mt-10">CO - CURRICULAR ACTIVITES</h2>

          <div className="pt-3">
            <div className="flex items-center justify-between">
              <p className="font-medium">{values.ccaTitleOne}</p>
              <p>{values.ccaPeriodOne}</p>
            </div>
            <p className="pt-3 pb-3">{values.ccaSchoolOne}</p>
            <UnorderedList classNames="pl-5 pt-3 space-y-2" values={values.ccaDetailOne} />
          </div>

        </div>
      </>
    )
  )

  const exportToPDF = async () => {
    if (!resumeRef.current || isExporting) return;

    setIsExporting(true);

    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();

      // Store the current page
      const currentPage = page;

      // Export Page 1
      setPage(1);
      // Wait for the render to complete
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas1 = await html2canvas(resumeRef.current, {
        scale: 5,
        useCORS: true,
        logging: false,
      });

      const imgData1 = canvas1.toDataURL("image/jpeg");
      const pdfHeight1 = (canvas1.height * pdfWidth) / canvas1.width;
      pdf.addImage(imgData1, "JPEG", 0, 0, pdfWidth, pdfHeight1);

      // Export Page 2
      setPage(2);
      // Wait for the render to complete
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas2 = await html2canvas(resumeRef.current, {
        scale: 5,
        useCORS: true,
        logging: false
      });

      const imgData2 = canvas2.toDataURL("image/jpeg");
      const pdfHeight2 = (canvas2.height * pdfWidth) / canvas2.width;

      pdf.addPage();
      pdf.addImage(imgData2, "JPEG", 0, 0, pdfWidth, pdfHeight2);

      // Save the PDF
      pdf.save("resume.pdf");

      // Restore the original page
      setPage(currentPage);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>

      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-center">Resume Preview</h1>
      <div
        // style={
        //   window.innerWidth < 576 // Adjust this breakpoint as needed for small screens
        //     ? {
        //         transform: `scale(${Math.min(Math.max((window.innerWidth * 0.4) / 793.7, 0.4), 1)})`,
        //           transformOrigin: 'center'
        //       }
        //     : {}
        // }
        // style={{
        //   width: "var(--calculated-width)",
        //   height: "var(--calculated-height)"
        // }}
        // w-[210mm] h-[297mm]
        className="bg-white shadow-lg rounded-md m-3 p-10 grid grid-cols-6 gap-y-6 gap-x-12 content-start mx-auto w-[210mm] h-[297mm] "
        ref={resumeRef}
      >
        {renderPage(page)}
      </div>
      <PageHandler />
      <Button
        onClick={exportToPDF}
        disabled={isExporting}
        className="mt-4"
      >
        {isExporting ? "Generating PDF..." : "Export as PDF"}
      </Button>
    </>
  )
}