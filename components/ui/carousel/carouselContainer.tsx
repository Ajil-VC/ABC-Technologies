"use client";
import { useRef } from "react";
import { ServiceCard } from "./serviceCard";
import { CardType } from "@/types/type";
import style from '../ui.module.css';
import SectorCard from "./sectorCard";

export default function Carousel({ children, align = 'start' }: {
    children: React.ReactNode;
    align?: "center" | "start";
}) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) return;

        const amount = 300; // scroll distance
        scrollRef.current.scrollBy({
            left: dir === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full">

            {/* Buttons */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            >
                ◀
            </button>

            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            >
                ▶
            </button>
        
            {/* Scroll container */}
            <div
                ref={scrollRef}
                className={`flex ${align === "center" ? "justify-center" : "justify-start"
                    } gap-6 overflow-x-auto scroll-smooth px-10 ${style.noScrollbar}`}>
                {children}
            </div>
        </div>
    );
}