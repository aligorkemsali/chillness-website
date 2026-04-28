"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-21T00:00:00+03:00").getTime();

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(): TimeLeft {
    const diff = Math.max(0, TARGET - Date.now());
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

export default function Countdown() {
    const [time, setTime] = useState<TimeLeft | null>(null);

    useEffect(() => {
        setTime(getTimeLeft());
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    const display = time ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return (
        <div
            className="absolute left-[40%] top-[29%] -translate-y-1/2 z-10 hidden md:flex flex-row items-center gap-4 select-none pointer-events-none"
            style={{ opacity: 0.2 }}
        >
            {(["days", "hours", "minutes", "seconds"] as const).map((unit, i) => (
                <div key={i} className="flex flex-row items-start gap-4">
                    <div className="flex flex-col items-center">
                        <div
                            className="font-display italic font-black text-sand numeral"
                            style={{ fontSize: "8vw", lineHeight: 1 }}
                        >
                            {String(display[unit]).padStart(2, "0")}
                        </div>
                        <span
                            className="font-mono uppercase tracking-[0.2em] text-sand"
                            style={{ fontSize: "1vw" }}
                        >
                            {unit}
                        </span>
                    </div>
                    {i < 3 && (
                        <span
                            className="font-display font-black text-sand"
                            style={{ fontSize: "8vw", lineHeight: 1 }}
                        >
                            :
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
