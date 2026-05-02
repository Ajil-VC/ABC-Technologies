import { nunito } from "@/lib/fonts";
import Container from "../ui/container";
import SectorCard from "../ui/carousel/sectorCard";
import Carousel from "../ui/carousel/carouselContainer";
import { ServiceCard } from "../ui/carousel/serviceCard";
import style from './section.module.css';
import OverLine from "../ui/overline";


export default function MainSection() {


    const serviceData: Array<{ title: string, description: string }> = [
        {
            title: "Engineering Solutions",
            description: "We deliver scalable engineering systems."
        },
        {
            title: "Global Sourcing",
            description: "Reliable procurement across industries."
        },
        {
            title: "Technology Deployment",
            description: "End-to-end implementation support."
        },
        {
            title: "Engineering Solutions",
            description: "We deliver scalable engineering systems."
        },
        {
            title: "Global Sourcing",
            description: "Reliable procurement across industries."
        },
        {
            title: "Technology Deployment",
            description: "End-to-end implementation support."
        }
    ];
    const sectoreData: Array<{ title: string, description: string }> = [

        {
            title: "Power & Energy",
            description: "Advanced solutions for power generation, distribution, and energy optimization"
        },
        {
            title: "Real Estate & Infrastructure",
            description: "Smart building systems and intelligent infrastructure management"
        },
        {
            title: "Industrial & Manufacturing",
            description: "Automation, control systems, and predictive maintenance solutions"
        },
        {
            title: "Agriculture & Water",
            description: "Smart irrigation intelligence and sustainable water management"
        },
        {
            title: "Institutional & Government",
            description: "Scalable solutions for public sector and institutional projects"
        }
    ];


    return (
        <section className="relative w-full">

            <div className="absolute inset-0 z-10 -top-100">
                <img
                    src="/images/litroad.png"
                    className="w-full h-full object-cover object-center"
                    alt="background"
                />
            </div>

            <div className="absolute inset-0 z-20"
                style={{
                    background: `
       radial-gradient(
circle at 35% 50%,
  rgba(4, 9, 13, 0.5) 20%,
  rgba(4, 9, 13, 0.9) 40%,
  rgba(4, 9, 13, 1) 100%
)
    `,
                }} />


            <div className={`relative z-30 ${style.sectionMargin}`}>

                <div className="col-start-1 row-start-1 z-20 max-w-7xl mx-auto px-4 flex items-start">
                    <Container>
                        <div>
                            <OverLine props={{ name: "WHAT WE DO" }} />
                            <h1 style={{ fontFamily: 'Eloran', fontWeight: '200', fontSize: '40px', opacity: '80%' }}>YOUR SINGLE-WINDOW PARTNER FOR</h1>
                            <h1 style={{ fontFamily: 'Eloran', fontWeight: '200', fontSize: '40px', color: 'var(--text-green)' }}>GLOBAL SOLUTIONS</h1>
                            <p style={{ color: 'var(--elegant-green)', opacity: '70%' }} className={`letterSpacing max-w-4xl text-gray-300 mt-5 ${nunito.className}`}>
                                ABC Technologies LLC operates as a single-window partner for global
                                clients seeking reliable sourcing, technical expertise, and deployment
                                of advanced engineering and technology solutions.
                            </p>
                        </div>
                    </Container>
                </div>

                <section className="py-10 text-center">
                    <h1 className={`letterSpacing ${nunito.className} mb-7`} style={{ fontWeight: '500', fontSize: '35px' }}><span style={{ color: 'var(--text-green)' }}>OUR</span> SERVICES</h1>
                    <Carousel >
                        {serviceData.map((item, i) => (
                            <ServiceCard key={`service-${i}`} item={item} />
                        ))}
                    </Carousel>
                </section>


                <section className="py-20 text-center mt-7">
                    <div className={`flex flex-col items-center`}>
                        <h1
                            className="mb-4"
                            style={{
                                fontWeight: '500',
                                fontSize: '35px',
                                fontFamily: 'Eloran'
                            }}
                        >
                            <span style={{ color: 'var(--text-green)' }}>SECTORS</span> WE SERVE
                        </h1>

                        <p
                            className={`letterSpacing max-w-4xl  ${nunito.className}`}
                            style={{
                                color: 'var(--elegant-green)',
                                opacity: 0.7
                            }}
                        >
                            Our expertise spans across critical sectors, delivering tailored solutions that drive efficiency and sustainability.
                        </p>
                    </div>
                    <div className={style.sectionMargin}>
                        <Carousel align="center">
                            {sectoreData.map((item, i) => (
                                <SectorCard key={`sector-${i}`} item={{ ...item, number: i + 1 }} />
                            ))}
                        </Carousel>
                    </div>

                </section>

            </div>

        </section>
    )
}