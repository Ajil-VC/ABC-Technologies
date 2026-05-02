import { nunito } from "@/lib/fonts";
import EngineeringCard from "../ui/engineering/card";
import { CardType } from "@/types/type";
import OverLine from "../ui/overline";

export default function EngineeringSection() {

    const cardData: Array<CardType> = [
        {
            title: 'Independent & Engineering-Led',
            description: 'Our decisions are driven by technical merit, not vendor agreements.',
            icon: ''
        }, {
            title: 'Unified Expertise',
            description: 'Global trading + technical consulting under one entity.',
            icon: ''
        }, {
            title: 'Retrofit-Focused',
            description: 'Vendor-agnostic approach integrating with existing infrastructure.',
            icon: ''
        }, {
            title: 'Cross-Border Execution',
            description: 'Proven capabilities across international markets.',
            icon: ''
        }
    ]
    return (
        <section className="relative w-full text-white overflow-hidden">

            <div className="absolute inset-0 z-10"
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
            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/engineering.jpg"
                    className="w-full h-full object-contain rotate-90 scale-300"
                    alt="background"
                />
            </div>

            <div className="z-30 relative px-6 py-30 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">


                {/* LEFT SIDE */}
                <div className="flex-1">
                    <OverLine props={{ name: "WHY COMACON" }} />

                    <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'Eloran', fontWeight: '200', fontSize: '40px', opacity: '80%' }}>
                        ENGINEERING-FIRST <br /><span style={{ color: 'var(--text-green)' }}>PHILOSOPHY</span>
                    </h2>

                    <p className="text-gray-300 mb-10 max-w-xl" style={{ color: 'var(--elegant-green)', opacity: '70%' }}>
                        Operating at the intersection of engineering, commerce, and technology,
                        enabling clients to source, design, and deploy reliable systems across
                        energy, infrastructure, automation, and sustainability domains.
                    </p>

                    {/* GRID ITEMS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {
                            cardData.map((item) => <EngineeringCard key={item.title} props={item} />)
                        }
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1">
                    <div className="border border-green-900 rounded-xl p-6 bg-black/40">

                        <h3 className="text-xl mb-4" style={{ fontFamily: 'Eloran', fontWeight: '200', fontSize: '30px', opacity: '80%' }}>
                            OUR <span style={{ color: 'var(--text-green)' }}>COMMITMENT</span>
                        </h3>

                        <p className={`text-gray-300 mb-6 ${nunito.className} letterSpacing`}>
                            We are committed to delivering measurable value through every engagement.
                        </p>

                        <ul className={`space-y-3 text-sm text-gray-300 ${nunito.className} letterSpacing`}>
                            <li>• Technical integrity</li>
                            <li>• Transparent commercial practices</li>
                            <li>• Long-term client partnerships</li>
                            <li>• Measurable operational value</li>
                        </ul>

                        <div className="mt-8 text-sm border-t border-green-900 pt-4" style={{ color: 'var(--text-green)', fontFamily: 'Eloran', fontWeight: '200', opacity: '80%' }}>
                            Strong backing from Udot’s R&D and technology ecosystem
                        </div>

                    </div>
                </div>

            </div>
        </section >
    );
}