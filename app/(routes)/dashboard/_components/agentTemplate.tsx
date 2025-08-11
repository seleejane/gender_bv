import { Button } from '@/components/ui/button'
import { PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AgentTemplate() {
    return (
        <div className='flex flex-col gap-4 p-4 mt-5 border-1 border-gray-300'>
            <h1 className='text-bold'>Spritual Father</h1>
            <Image src={'/christ.webp'} alt='AI' width={200} height={300} className='h-[300px] rounded-md object-cover bg-teal-100 border-2 border-amber-500' />
            <Button variant={'default'}><PhoneCall /><Link href="dashboard/agent">Connect</Link></Button>
        </div>

    )
}
