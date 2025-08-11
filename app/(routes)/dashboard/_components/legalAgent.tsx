import { Button } from '@/components/ui/button'
import { PhoneCall } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function LegalAgent() {
    return (
        <div className='flex flex-col gap-4 p-4 mt-5 border-1 border-gray-200'>
            <h1 className='text-bold'>Legal Advisor</h1>
            <Image src={'/judge.jfif'} alt='AI' width={200} height={350} className='h-[300px] rounded-md object-cover bg-teal-100 border-2 border-amber-500' />
            <Button><PhoneCall />Connect</Button>
        </div>

    )
}
