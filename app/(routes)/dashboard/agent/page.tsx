"use client"

import { Button } from '@/components/ui/button'
import { Circle, PhoneCall, PhoneOff } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import VapiCall from '../_components/vapiCall'
import { useState } from 'react'
import Vapi from '@vapi-ai/web';
import { div } from 'motion/react-client'


export default function ConnectAgent() {
    

    
    const [vapiInstance, setVapiInstance] = useState<any>();
    const [callStarted, setCallStarted] = useState(false);

    const startCall = () => {
        const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
        setVapiInstance(vapi);
        vapi.start(process.env.NEXT_PUBLIC_VAPI_AGENT_ID!);
        vapi.on('call-start', () => {
            setCallStarted(true);
            console.log('Call started');
        });
    }
    const endCall = () => {
        if (vapiInstance){
            vapiInstance.stop()
            setCallStarted(false);
            console.log(vapiInstance);
            vapiInstance.off('call-start');
            vapiInstance.off('call-end');
            vapiInstance.off('message');
            setVapiInstance(null);
        };
    }
    

    return (
       <div className='border-1 border-gray-300 rounded-md bg-blue-50'>
        <div className='flex items-center justify-between px-4 my-4'>
            <div className='flex gap-2 items-center border rounded-md p-1'>
                {callStarted ? 
                <div className="flex gap-2">
                    <Circle height={20} width={20} color='green' fill='green'/>
                    <h2 className="">Connected</h2>
                </div>
                :
                <div className="flex gap-2">
                    <Circle height={20} width={20} color='red' fill='red'/>
                    <h2 className="">Disconnected</h2>
                </div>
                }
                
            </div>
            <p className='text-lg text-gray-500'>0.00</p>       
        </div > 
        <div className="flex flex-col gap-10 items-center py-4">
            <h2 className='text-bold text-3xl text-cyan-950'>Talk to Mphalotsa</h2>
            <Image src={'/medicalAI.jfif'} alt='' height={100} width={100} className='rounded-full' />

            <h2>AI Agent Messages:</h2>
            <h2>Your Messages:</h2>

            {!callStarted ? <Button variant={'outline'} onClick={startCall}><PhoneCall /> Start Call</Button>:
                            <Button variant={'destructive'} onClick={endCall}><PhoneOff /> End Call</Button>}
            
        </div>        
       </div>
       
    )
}
