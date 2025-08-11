"use client";

import React from "react";
import ActionButton from "./ActionButton";
import RoundIconButton from "./RoundIconButton";

import SirenIcon from "../icons/SirenIcon";
import MicrophoneIcon from "../icons/MicrophoneIcon";
import BookStarIcon from "../icons/BookStarIcon";
import PhoneIcon from "../icons/PhoneIcon";
import CogIcon from "../icons/CogIcon";
import ProfileIcon from "../icons/ProfileIcon";
import QuestionIcon from "../icons/QuestionIcon";
import Link from "next/link";
import Dashboard from "@/app/(routes)/dashboard/page";

export default function MphalotsaHome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-200 to-yellow-50 p-4">
      <div className="w-full max-w-md bg-transparent">
        {/* Header */}
        <header className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 flex-shrink-0 relative">
            {/* Sun SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="sunGrad" cx="50%" cy="40%">
                  <stop offset="0%" stopColor="#fff59a" />
                  <stop offset="100%" stopColor="#ffd54f" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="40" r="22" fill="url(#sunGrad)" />
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const x1 = 50 + Math.cos(angle) * 34;
                const y1 = 40 + Math.sin(angle) * 34;
                const x2 = 50 + Math.cos(angle) * 44;
                const y2 = 40 + Math.sin(angle) * 44;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#ffd54f"
                    strokeWidth={4}
                    strokeLinecap="round"
                    opacity={0.95}
                  />
                );
              })}
              <path
                d="M40 40 Q50 52 60 40"
                stroke="#6d4c41"
                strokeWidth={3}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="43" cy="36" r="2.5" fill="#6d4c41" />
              <circle cx="57" cy="36" r="2.5" fill="#6d4c41" />
            </svg>
          </div>

          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg select-none">
            Mphalotsa
          </h1>
        </header>

        {/* Buttons */}
        <main>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link href={"../dashboard/agent"} className="flex-1 w-full">
            <ActionButton
              color="bg-red-500"
              label={"Emergency\nHelp"}
              ariaLabel="Emergency Help"
              icon={<SirenIcon />}
              pulse
            />
            </Link>

            <Link href={"../dashboard/agent"} className="flex-1 w-full">
            <ActionButton
              color="bg-blue-500"
              label={"Talk to\nMphalotsa"}
              ariaLabel="Talk to Mphalotsa"
              icon={<MicrophoneIcon />}
            />
            </Link>
              
            <Link href={"../dashboard/learn"} className="flex-1 w-full">
            <ActionButton
              color="bg-green-500"
              label={"Learn &\nPlay"}
              ariaLabel="Learn and Play"
              icon={<BookStarIcon />}
            />
            </Link>

            <Link href={"../dashboard/agent"} className="flex-1 w-full">
            <ActionButton
              color="bg-orange-400"
              label={"Call for\nHelp"}
              ariaLabel="Call for Help"
              icon={<PhoneIcon />}
            />
            </Link>
          </div>

          {/* Footer */}
          <nav className="flex items-center justify-around">
            <RoundIconButton label="Settings" icon={<CogIcon />} />
            <RoundIconButton label="Profile" icon={<ProfileIcon />} />
            <RoundIconButton label="Help" icon={<QuestionIcon />} />
          </nav>
        </main>
      </div>
    </div>
  );
}
