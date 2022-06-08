import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {

  return (
    <Popover className="tw-items-center md:tw-center tw-flex tw-flex-col tw-font-sans">
      <WidgetForm />
    </Popover>

  )
}