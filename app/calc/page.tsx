'use client'
import { useEffect, useState } from "react";

export default function SimpleBeautifulCalculator() {
  const [input, setInput] = useState("");


  useEffect(() => {
    if(input=='1313'){
        window.location.href='/chat?person=Jaskarandeep'
    }else if(input=='2010'){
        window.location.href='/chat?person=Harsimrat'
    }
  }, [input])
  
  const handleClick = (value:any) => {
    if (value === "C") {
      setInput("");
    } else if (value === "←") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        // Evaluate safely
        const result = Function(`"use strict"; return (${input})`)();
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ["C", "←", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "=",],
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500 p-4">
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl w-[340px]">
        <div className="text-right text-white text-3xl font-semibold mb-4 px-3 py-4 rounded-2xl bg-black/30 border border-white/10">
          {input || "0"}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.flat().map((btn, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(btn)}
              className={`rounded-2xl text-lg font-semibold py-4 shadow-md transition-all duration-150 
              ${btn === "=" ? "bg-green-500/90 text-white hover:bg-green-600" :
                btn === "C" ? "bg-red-500/80 text-white hover:bg-red-600" :
                btn === "←" ? "bg-yellow-400/80 text-white hover:bg-yellow-500" :
                "bg-white/10 text-white hover:bg-white/20"}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}