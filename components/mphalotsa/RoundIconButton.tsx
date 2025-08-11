import React from "react";

interface RoundIconButtonProps {
  label: string;
  icon: React.ReactNode;
}

export default function RoundIconButton({ label, icon }: RoundIconButtonProps) {
  return (
    <button className="w-14 h-14 rounded-full bg-white/90 shadow-md flex items-center justify-center">
      <div title={label} className="w-7 h-7">
        {icon}
      </div>
    </button>
  );
}
