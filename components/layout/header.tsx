'use client';
import { nunito } from "@/lib/fonts";
import Link from "next/link";
import Logo from "../ui/logo";
import StrokeButton from "../ui/strokeButton";
import Container from "../ui/container";
import './header.css';
import { useEffect, useRef } from "react";

export default function Header() {

    const handleEvent = () => {

    };

    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 10) {
                    headerRef.current.classList.add("scrolled");
                } else {
                    headerRef.current.classList.remove("scrolled");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // cleanup
    }, []);

    return (
        <header ref={headerRef} className="w-full fixed top-0 left-0 z-50 scrollAnime">

            <Container>
                <div className={`flex items-center justify-between ${nunito.className}`}>
                    <Logo />
                    <nav className="flex justify-center items-center opacity-80">
                        <Link href="#" className="mr-5">ABOUT</Link>
                        <Link href="#" className="mr-5">SERVICES</Link>
                        <Link href="#" className="mr-5">SECTORS</Link>
                    </nav>
                    <StrokeButton onClick={() => handleEvent()}>CONTACT US</StrokeButton>
                </div>
            </Container>
        </header>
    )
}