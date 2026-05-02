import StrokeButton from "../ui/strokeButton";
import { FiPhoneCall } from "react-icons/fi";
import { dmSans } from "@/lib/fonts";

export default function GridSection() {
    return (
        <section className="relative w-full  flex items-center justify-center overflow-hidden bg-[#04090a]">

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/grid.png"
                    alt="hero background"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* OVERLAY */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: `
                 radial-gradient(
  ellipse at center,
  rgba(4, 9, 13, 0.3) 0%,
  rgba(4, 9, 13, 0.5) 30%,
  rgba(4, 9, 13, 0.7) 60%,
  rgba(4, 9, 13, 1) 100%
)
            `
                }}
            />


            {/* CONTENT */}
            <div className="relative z-20 w-full max-w-5xl px-6 py-20 text-center flex flex-col items-center">

                <div className="relative">

                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <div className="w-[300px] h-[120px] md:w-[400px] md:h-[200px] 
        bg-[radial-gradient(ellipse,var(--light-blue),transparent_60%)] 
        blur-3xl opacity-60">
                        </div>
                    </div>

                    <h1 className="text-white text-5xl font-bold" style={{ fontFamily: 'Eloran', fontWeight: '200', fontSize: '40px', opacity: '80%' }}>
                        READY TO MOVE YOUR PROJECT <br />FORWARD?
                    </h1>

                    {/* SUBTEXT */}
                    <p className="max-w-xl text-sm sm:text-base text-[rgba(210,230,215,0.7)] leading-relaxed mb-10">
                        Consultative engineering expertise—from strategy and design through
                        implementation to measurable operational performance.
                    </p>

                </div>

                {/* BUTTONS */}
                <div className={`flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto`}>

                    <button style={{ cursor: "pointer" }} className={`${dmSans.className} w-full sm:w-auto px-8 py-3  bg-[#f0f5f1] text-[#04090a] rounded`}>
                        START A PROJECT
                    </button>

                    <StrokeButton>
                        <div className="flex justify-center items-center gap-2">
                            SCHEDULE A CALL <FiPhoneCall />
                        </div>
                    </StrokeButton>

                </div>

                {/* BOTTOM TAGS */}
                <div className="flex flex-wrap justify-center gap-4 text-[11px] uppercase">

                    <span style={{ fontSize: '16px', fontWeight: "bold" }} className={`${dmSans.className} text-[#39e07a] bg-gradient-to-r from-[var(--gradient-bright-green)] to-[var(--gradient-dark-green)] bg-clip-text text-transparent`}>Global Execution</span>
                    <span style={{ fontSize: '16px', fontWeight: "bold" }} className={`${dmSans.className} text-[#39e07a] bg-gradient-to-r from-[var(--gradient-bright-green)] to-[var(--gradient-dark-green)] bg-clip-text text-transparent`}>Engineering-Led Approach</span>
                    <span style={{ fontSize: '16px', fontWeight: "bold" }} className={`${dmSans.className} text-[#39e07a] bg-gradient-to-r from-[var(--gradient-bright-green)] to-[var(--gradient-dark-green)] bg-clip-text text-transparent`}>Vendor-Agnostic Solutions</span>

                </div>

            </div>
        </section>
    );
}