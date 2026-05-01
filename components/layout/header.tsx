'use client';
import { nunito } from "@/app/lib/fonts";
import Link from "next/link";
import Logo from "../ui/logo";
import StrokeButton from "../ui/strokeButton";
import Container from "../ui/container";

export default function Header() {

    const handleEvent = () => {

    };
    return (
        <header className="w-full fixed top-0 left-0 z-50">

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