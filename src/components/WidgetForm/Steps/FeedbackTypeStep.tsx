import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}


export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="tw-font-sans tw-text-white tw-text-xl tw-leading-6">Deixe seu feedback</span>

      </header>
      <div className="tw-font-sans tw-flex tw-py-8 tw-gap-2 tw-w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="tw-font-sans tw-text-white tw-bg-brand-600 tw-rounded-lg tw-py-5 tw-w-24 tw-flex-1 tw-flex tw-flex-col tw-items-center tw-gap-2 tw-border-2 tw-border-transparent hover:tw-border-brand-700 focus:tw-border-brand-700 focus:tw-outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
              key={key}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}