import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problemas",
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um Inseto'
    }
  },
  IDEA: {
    title: "Ideias",
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma Lampada'
    }
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, SetFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    SetFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="tw-font-sans tw-bg-brand-500 tw-p-4 tw-relative tw-rounded-2xl tw-mb-4 tw-flex tw-flex-col tw-items-center tw-shadow-lg tw-w-[calc(100vw-2rem)] md:tw-w-auto sm:tw-w-auto">

      {feedbackSent ? (
        <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => SetFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="tw-font-sans tw-text-xs tw-text-neutral-400">
        Desenvolvido por <a className="tw-font-sans tw-underline tw-underline-offset-2 tw-text-inherit" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/agnaldocordeiro/" >AgnaldoCordeiro</a>
      </footer>
    </div>
  )
}