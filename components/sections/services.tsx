import Container from "../ui/container";


export default function Services() {

    return (
        <section className="relative w-full min-h-screen bg-[#0b0f14]">

            <div className="relative z-20 max-w-7xl mx-auto px-4 min-h-screen flex ">

                <Container>
                    <div className="z-50">
                        <h3>WHAT WE DO</h3>
                        <h1>YOUR SINGLE-WINDOW PARTNER FOR</h1>
                        <h1>GLOBAL SOLUTIONS</h1>
                        <p>
                            ABC Technologies LLC operates as a single-window partner for global
                            clients seeking reliable sourcing, technical expertise, and deployment
                            of advanced engineering and technology solutions.
                        </p>
                    </div>
                </Container>
            </div>

            <h1>OUR SERVICES</h1>

            <div className="absolute inset-0 z-10">
                <img
                    src="/images/litroad.png"
                    className="w-full h-full object-cover "
                    alt="road"
                />
            </div>

        </section>
    )
}