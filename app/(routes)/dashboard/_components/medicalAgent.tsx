import { Button } from '@/components/ui/button'
import { PhoneCall } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function MedicalAgent() {
    return (
        <div className='flex flex-col gap-4 p-4 mt-5 border-1 border-gray-200'>
            <h1 className='text-bold'>AI Assistant</h1>
            <Image src={'/medicalAI.jfif'} alt='AI' width={200} height={350} className='h-[300px] rounded-md object-cover bg-teal-100 border-2 border-amber-500' />
            <Button><PhoneCall /><Link href="dashboard/agent">Connect</Link></Button>
        </div>

    )
}
