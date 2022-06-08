import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "../Loading";

interface FeedbackTypeStepProps {
  onScreenshotTaken: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({ onScreenshotTaken, screenshot }: FeedbackTypeStepProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    
    const canvas = await html2canvas(document.body, {x:window.scrollX, y:window.scrollY, width:window.innerWidth, height:window.innerHeight})
   // const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png' || 'image/jpeg')

    onScreenshotTaken(base64image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="tw-p-1 tw-w-10 tw-h-10 tw-rounded-md tw-border-transparent tw-flex tw-justify-end tw-items-end tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,        
          backgroundSize: 180 
        }}
        onClick={() => onScreenshotTaken(null)}
        >
        <Trash weight="fill" />
      </button>
    )
  }
  
  {console.log(screenshot)}
  return (
    <button 
      type="button"
      onClick={handleTakeScreenshot}
      className="tw-p-2 tw-bg-zinc-800 tw-rounded-md tw-border-transparent hover:tw-bg-zinc-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-zinc-900 focus:tw-ring-brand-500 tw-transition-colors"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="tw-w-6 tw-h-6 tw-text-zinc-100" />}
    </button>
  )
}