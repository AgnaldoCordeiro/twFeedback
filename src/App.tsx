import { Widget } from "./components/Widget";

export function App() {
  return (

    <div className="md:tw-grid md:tw-grid-cols-2 md:tw-gap-6 md:tw-container tw-flex tw-flex-col">
      <div className="tw-mx-auto tw-my-auto tw-p-2">
        <img className="md:tw-center" src="/enviado.png" alt=" Feedback" width="512" height="384" />
      </div>
      <div className="md:tw-center md:tw-pt-5">
        <Widget />
      </div>
    </div>
  )

}
