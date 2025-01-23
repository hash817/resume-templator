import { AppProvider } from '@/app/context'
import { EditContextProvider } from '@/features/edit-element/edit-context'
import { Information } from '@/features/information'
import { PreviewResume } from '@/features/preview-resume'
import { EditElement } from '@/features/edit-element/edit-element'
import { ScrollArea } from "@/components/ui/scroll-area"

function App() {
  return (
    <>
      <AppProvider>
        <div className="grid grid-cols-6">
          <div className='col-span-1'>
            <ScrollArea className="shadow-lg max-w-xs rounded-md m-4 p-4 h-[1000px]">
              <Information></Information>
            </ScrollArea>
          </div>
          <EditContextProvider>
            <div className="bg-gray-500 shadow-lg rounded-md m-4 p-4 col-span-4">
              <PreviewResume></PreviewResume>
            </div>
            <div className="bg-white shadow-lg rounded-md m-4 p-4 col-span-1">
              <EditElement />
            </div>
          </EditContextProvider>
        </div>
      </AppProvider>
    </>
  )
}

export default App
