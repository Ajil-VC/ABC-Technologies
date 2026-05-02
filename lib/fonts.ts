

import { Nunito_Sans } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";

export const nunito = Nunito_Sans({
    subsets: ["latin"],
});

export const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});


export const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});