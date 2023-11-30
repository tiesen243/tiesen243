'use client'

import { Button } from '@/components/ui'
import { SendHorizonalIcon } from 'lucide-react'
import { useFormStatus } from 'react-dom'

const SendBtn = () => {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Sending...' : ' Send'}
      <SendHorizonalIcon className={`ml-2 ${pending ? 'hidden' : ''}`} />
    </Button>
  )
}

export default SendBtn
