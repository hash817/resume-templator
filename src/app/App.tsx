import { AppProvider } from '@/app/context'
import { EditContextProvider } from '@/features/edit-element/edit-context'
import { Information } from '@/features/information/information-form'
import { PreviewResume } from '@/features/preview-resume/preview-resume'
import { EditElement } from '@/features/edit-element/edit-element'
import { ScrollArea } from "@/components/ui/scroll-area"
import { SettingContextProvider } from '@/features/information/setting-context'
import { Button } from '@/components/ui/button'
import { PageContextProvider } from '@/features/preview-resume/page-context'

function App() {
  return (
    <AppProvider>
      <EditContextProvider>
        <SettingContextProvider>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-20 p-4">
            <div className='md:col-span-1 lg:col-span-2 space-y-4'>
              <EditElement classNames='shadow-lg rounded-md p-4' />
              <ScrollArea className="shadow-lg rounded-md p-4 h-[600px] md:h-[800px] lg:h-[1000px]">
                <Information />
              </ScrollArea>
              <Button type="submit" form="informationForm" className='w-full md:w-auto'>Submit</Button>
            </div>
            <div className="bg-gray-500 shadow-lg rounded-md p-4 md:col-span-2 lg:col-span-4 w-custom-width origin-top-left h-custom-height  scale-[0.4] sm:scale-[1] ">
              <PageContextProvider>
                <PreviewResume />
              </PageContextProvider>
            </div>
          </div>
        </SettingContextProvider>
      </EditContextProvider>
    </AppProvider>
  )
}

export default App