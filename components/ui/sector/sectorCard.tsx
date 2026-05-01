"use client";
import { ServiceType } from "@/types/type";
import style from '../ui.module.css';
import { useState } from "react";

export default function SectorCard({
    number = "01",
    title = "Power & Energy",
    description = "Advanced Solutions For Power Generation, Distribution, And Energy Optimization",

}) {

    return (
        <div className={`${style.cardStyle} ${style.sectorCard}`}>

            <div className={style.sectorNumber}>
                {number}
            </div>


            <h3
                style={{
                    margin: 0,
                    color: "#f0f4ff",
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "1.3",
                    letterSpacing: "-0.01em",
                }}
            >
                {title}
            </h3>


            <p
                style={{
                    margin: 0,
                    color: "rgba(180,190,210,0.75)",
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "1.65",
                    textAlign: "center",
                }}
            >
                {description}
            </p>
        </div>
    );
};


