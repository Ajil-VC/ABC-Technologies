"use client";
import Container from "../ui/container";
import StrokeButton from "../ui/strokeButton";
import style from './section.module.css';

export default function Hero() {

    const handleEvent = () => {

    };
    return (
        <section className="relative w-full min-h-screen bg-[#0b0f14] overflow-hidden">

            <div className="relative z-40 max-w-7xl mx-auto px-4 min-h-screen flex items-center">
                <Container>

                    <div className="max-w-3xl">
                        <h1 className="text-white text-5xl font-bold" style={{ fontFamily: 'Eloran', fontWeight: '200', fontSize: '70px', opacity: '80%' }}>
                            GLOBAL TRADING &
                        </h1>
                        <h1 style={{ fontFamily: 'Eloran', fontWeight: '200', fontSize: '50px', color: 'var(--text-green)' }}>
                            INTELLIGENT <br /> INFRASTRUCTURE SOLUTIONS
                        </h1>
                        <p className="text-gray-300 mt-5" style={{ color: 'var(--elegant-green)', opacity: '70%' }} >
                            Delivering engineered commodities, technical consultin, and advanced technology
                            solutions across energy, infrastructure, automation, and sustainability sectors worldwide.
                        </p>
                        <div className={`mt-7 btn-group ${style.btnGroup}`}>
                            <button className={`${style.discussButton} mr-6 px-4 py-2 rounded-md`}>DISCUSS A PROJECT</button>
                            <StrokeButton onClick={() => handleEvent()}>EXPLORE OUR CAPABILITIES <span>↗</span></StrokeButton>
                        </div>

                    </div>
                </Container>

            </div>

            <div className="absolute inset-0 z-30"
                style={{
                    background: `
       radial-gradient(
circle at 85% 50%,
  rgba(4, 9, 13, 0.4) 0%,
  rgba(4, 9, 13, 1) 40%,
  rgba(4, 9, 13, 1) 100%
)
    `,
                }} />


            <div className="absolute right-0 top-0 h-full w-[60%] z-20">
                <img
                    src="/images/hero.png"
                    className="h-full w-full object-cover object-right scale-120 origin-right"
                    alt="hero"
                />
            </div>

        </section>
    )
}