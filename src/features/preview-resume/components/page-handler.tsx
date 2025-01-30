import { useContext } from "react"
import { PageContext } from "@/features/preview-resume/page-context"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"


export const PageHandler = ({ classNames } : {classNames?: string}) => {
  const pageContext = useContext(PageContext)
  const { page, setPage } = pageContext
 
  const PreviousPage = () => {
    if (page > 1){
      setPage((prevPage: number) => prevPage - 1)
    }
  }

  const NextPage = () => {
    if (page < 2){
      setPage((prevPage: number) => prevPage + 1)
    }
  }

  return (
    <div className={`${classNames} flex items-center justify-center space-x-4`}>
      <ChevronLeftIcon className="w-8 h-8 cursor-pointer" onClick={PreviousPage} />
      <span>Page {page}</span>
      <ChevronRightIcon className="w-8 h-8 cursor-pointer" onClick={NextPage} />
    </div>
  )
}