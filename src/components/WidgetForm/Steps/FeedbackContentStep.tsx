import { ArrowLeft } from "phosphor-react"
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton"
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenShotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedbackContentStepProps) {
  const [screenshot, setScreenShot] = useState<string | null>(null)
  const [comment, setComment] = useState('');
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [isSendIngFeedback, setIsSendIngFeedback] = useState(false)

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendIngFeedback(true)
    await api.post('/feedbacks', {
      type: feedbackType,
      screenshot,
      comment,
    });

    setIsSendIngFeedback(false)
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button onClick={onFeedbackRestartRequested} type="button" className="tw-border-transparent tw-bg-transparent tw-top-5 tw-left-5 tw-absolute tw-text-zinc-400 hover:tw-text-zinc-100">
          <ArrowLeft weight="bold" className="tw-w-4 tw-h-4" />
        </button>
        <span className="tw-font-sans tw-text-white tw-text-xl tw-leading-6 tw-flex tw-items-center tw-gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="tw-w-6 tw-h-6" />
          {feedbackTypeInfo.title}
        </span>

      </header>
      <form onSubmit={handleSubmitFeedback} className="tw-my-4 tw-w-full">
        <textarea
          className="tw-font-sans tw-py-0 tw-pt-2 tw-px-2 tw-pl-4 tw-min-w-[304px] tw-w-11/12 tw-min-h-[100px] tw-text-sm tw-placeholder-zinc-100 tw-text-zinc-100 tw-border-zinc-100 tw-bg-transparent tw-rounded-md focus:tw-border-brand-700 focus:tw-ring-brand-700 focus:tw-ring-1 focus:tw-outline-none tw-resize-none scrollbar tw-scrollbar-thumb-brand-700 tw-scrollbar-track-transparent tw-scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
        />


        <footer className="tw-flex tw-gap-2 tw-mt-2">

          <button
            type="submit"
            disabled={comment.length === 0 || isSendIngFeedback}
            className="tw-font-sans tw-text-white tw-p-2 tw-bg-brand-300 tw-rounded-md tw-border-transparent tw-flex-1 tw-flex tw-justify-center tw-items-center tw-text-sm hover:tw-bg-brand-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-brand-700 focus:tw-ring-brand-300 tw-transition-colors disabled:tw-opacity-50 disabled:hover:tw-bg-brand-400 tw-cursor-pointer"
          >
            {isSendIngFeedback ? <Loading /> : 'Enviar Feedback'}


          </button>
        </footer>

      </form>

    </>
  )
}