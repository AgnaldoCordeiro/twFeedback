import {Popover} from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton() {
  return (
    <Popover.Button className="tw-border-transparent tw-bg-transparent tw-top-5 tw-right-5 tw-absolute tw-text-zinc-400 hover:tw-text-zinc-100" title="Fechar Formulario de Feedback">
      <X weight='bold' className="tw-w-4 tw-h-4"/>
</Popover.Button>
  )
}