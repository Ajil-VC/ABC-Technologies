import Logo from "../ui/logo";
import { nunito } from "@/lib/fonts";

import { FaPhone } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

export default function Footer() {
    return (
        <footer className="relative w-full text-white overflow-hidden h-[350px] md:h-[450px] lg:h-[550px] flex flex-col justify-end">

            <div className="absolute  inset-0 overflow-hidden bg-blue">

                <img
                    src="/images/globe.jpg"
                    alt="globe"
                    className="
    absolute inset-0
    w-full h-full
    object-cover
    object-[center_45%]   
    opacity-60
  "
                />

                {/* overlay */}
                <div className="absolute inset-0"
                    style={{
                        background: `
       radial-gradient(
  ellipse at center,
  rgba(4, 9, 13, 0.7) 0%,
  rgba(4, 9, 13, 0.8) 30%,
  rgba(4, 9, 13, 0.9) 50%,
  rgba(4, 9, 13, 1) 70%
)
    `,
                    }} />

            </div>


            <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Logo + Info */}

                    <div className="flex flex-col items-center">

                        <Logo />

                        <p className={` mb-2 ${nunito.className} text-center`} style={{ color: 'var(--text-green)', fontWeight: 'bold', fontSize: '16px' }}>Energy Redefined</p>
                        <p className={`text-sm mb-2 ${nunito.className} text-center`} style={{ fontWeight: 'bold', fontSize: '16px' }}>ABC Technologies <br /> UAE</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className={`mb-4 font-medium ${nunito.className}`}>QUICK LINKS</h3>
                        <ul className={`list-disc list-inside space-y-2 text-sm opacity-80 ${nunito.className}`}>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Sectors</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className={`mb-4 font-medium ${nunito.className}`}>SERVICES</h3>
                        <ul className={`space-y-2 text-sm opacity-80 ${nunito.className}`}>
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Global Trading & Export</span>
                            </li>

                            <li className="flex gap-2">
                                <span>•</span>
                                <span>
                                    Technical Consultation & Engineering Advisory
                                </span>
                            </li>

                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Technology & Solution Delivery</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className={`mb-4 font-medium ${nunito.className}`}>CONTACT</h3>
                        <ul className="space-y-3 text-sm opacity-80">
                            <li className="flex items-center gap-2"><FaPhone style={{ color: 'var(--text-green)' }} /> +971 00 223 0000</li>
                            <li className="flex items-center gap-2"><BsWhatsapp style={{ color: 'var(--text-green)' }} /> +971 00223 0000</li>
                            <li className="flex items-center gap-2"><LuMail style={{ color: 'var(--text-green)' }} /> abc@gmail.com</li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm opacity-60">
                    © 2026 Tapclone | All Rights Reserved
                </div>

            </div>
        </footer>
    );
}