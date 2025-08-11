import { Button } from "@/components/ui/button";
import { HeroSectionOne } from "@/components/ui/HeroSection";
import Image from "next/image";
 import {
        ClerkProvider,
        SignInButton,
        SignUpButton,
        SignedIn,
        SignedOut,
        UserButton,
      } from '@clerk/nextjs'
      import { Geist, Geist_Mono } from 'next/font/google'
      import './globals.css'
import MphalotsaHome from "@/components/mphalotsa/MphalotsaHome";
      
      const geistSans = Geist({
        variable: '--font-geist-sans',
        subsets: ['latin'],
      })
      
      const geistMono = Geist_Mono({
        variable: '--font-geist-mono',
        subsets: ['latin'],
      })

export default function Home() {
  return (
    <div className="flex flex-col gap-2 mt-5 md:px-40">
     
        <div className="flex items-end justify-end gap-4">
          <SignedOut>
          <SignInButton />
          <SignUpButton />
              
          </SignedOut>
          <SignedIn>
          <UserButton />
          </SignedIn>
        </div>
        <MphalotsaHome />
        {/* <HeroSectionOne /> */}
    </div>
  );
}


