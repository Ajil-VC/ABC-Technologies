"use client";
import { useRef } from "react";
import { ServiceCard } from "./serviceCard";
import { ServiceType } from "@/types/type";
import style from '../ui.module.css';
import SectorCard from "../sector/sectorCard";

export default function ServiceCarousel({ items }: { items: ServiceType[] }) {
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
                className={`flex gap-6 overflow-x-auto scroll-smooth px-10 ${style.noScrollbar}`}
            >
                {items.map((item, i) => (
                    <ServiceCard key={i} item={item} />
                ))}
            </div>
        </div>
    );
}