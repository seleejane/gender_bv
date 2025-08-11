import { Button } from '@/components/ui/button'
import React from 'react'
import AgentTemplate from './_components/agentTemplate'
import MedicalAgent from './_components/medicalAgent'
import LegalAgent from './_components/legalAgent'
import { AlarmClock, Ambulance, Book, HomeIcon, Microchip, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard(){
    return(
      <div className='flex flex-col'> 
        
            <div className='flex flex-col md:flex-row items-center justify-between mt-5'>
                <h1 className='text-bold text-2xl'>My Dashboard</h1>
                <Button variant={'destructive'}>Report - Emergency</Button>  
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between border-2 mt-5 p-5 border-b-blue-950 bg-gray-100 text-white'>
                <MedicalAgent />
                <div className="flex flex-col gap-2 items-center min-w-{500px} min-h-{400px} bg-red-500 border-gray-100 p-10 rounded-md">
                    <Ambulance />
                    <p>Emergency</p>

                </div>
                <div className="flex flex-col gap-2 items-center min-w-{500px} min-h-{400px} bg-blue-500 border-gray-100 p-10 rounded-md text-white">
                    <HomeIcon />
                    <p>Sexual Violence</p>

                </div>
                <Link href="">
                <div className="flex flex-col gap-2 items-center min-w-{500px} min-h-{400px} bg-green-500 border-gray-100 p-10 rounded-md text-white">
                    <Book />
                    <p>Learn</p>

                </div>
                </Link>
            </div>
       </div>
    )
}
