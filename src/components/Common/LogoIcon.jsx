import React from "react";
import { Sparkles } from "lucide-react";

export default function LogoIcon({ size = "w-4 h-4" }) {
  return (
    <div
      className="w-7 h-7 bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-600 
                 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/25 dark:shadow-cyan-500/25"
    >
      <Sparkles className={`${size} text-white`} />
    </div>
  );
}
