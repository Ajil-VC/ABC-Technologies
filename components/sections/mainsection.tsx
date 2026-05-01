import { nunito } from "@/app/lib/fonts";
import Container from "../ui/container";
import ServiceCarousel from "../ui/service/serviceCarousel";
import SectorCard from "../ui/sector/sectorCard";

type CarouselItem = {
    title: string;
    description: string;
};

export default function MainSection() {


    const data: Array<{ title: string, description: string }> = [
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

    return (
        <section className="relative w-full">

            <div className="absolute inset-0 z-10">
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
  rgba(4, 9, 13, 1) 60%,
  rgba(4, 9, 13, 1) 100%
)
    `,
                }} />

            {/* Content wrapper */}
            <div className="relative z-30">

                <div className="col-start-1 row-start-1 z-20 max-w-7xl mx-auto px-4 flex items-start">
                    <Container>
                        <div>
                            <h3 className={nunito.className} style={{ color: 'var(--text-green)' }}>WHAT WE DO</h3>
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
                    <ServiceCarousel items={data} />
                </section>


                <section className="py-20 text-center">
                    <div className="flex flex-col items-center">
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

                    <SectorCard></SectorCard>
                </section>

            </div>

        </section>
    )
}