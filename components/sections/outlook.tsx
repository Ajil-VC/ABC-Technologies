import { nunito } from "@/lib/fonts";
import WorldMap from "../ui/map";
import OverLine from "../ui/overline";
import style from './section.module.css';

export default function OutLook() {

    return (

        <section className="relative py-20 text-center mt-7">

            <div className="absolute inset-0">
                <WorldMap />
            </div>

            <div className="relative flex flex-col items-center z-30 min-h-[500px] justify-between">

                <div>

                    <OverLine props={{ name: "GLOBAL OUTLOOK" }} />
                    <h1
                        className="mb-4"
                        style={{
                            fontWeight: '500',
                            fontSize: '35px',
                            fontFamily: 'Eloran'
                        }}
                    >
                        <span style={{ color: 'var(--text-green)' }}>WORLDWIDE</span> OPERATIONS
                    </h1>

                    <p
                        className={`letterSpacing max-w-4xl  ${nunito.className}`}
                        style={{
                            color: 'var(--elegant-green)',
                            opacity: 0.7
                        }}
                    >
                        Operating from Dubai with strong operational ties across India, Africa, and other international markets supporting projects and exports worldwide.
                    </p>

                </div>



                <div className="flex flex-col md:flex-row gap-6 mt-100">

                    <div className={`flex-1 ${style.outlookCard}`}>
                        <h1>International Trade</h1>
                        <p>Cross-Border Exports and trade execution</p>
                    </div>

                    <div className={`flex-1 ${style.outlookCard}`}>
                        <h1>International Trade</h1>
                        <p>Cross-Border Exports and trade execution</p>
                    </div>

                    <div className={`flex-1 ${style.outlookCard}`}>
                        <h1>International Trade</h1>
                        <p>Cross-Border Exports and trade execution</p>
                    </div>


                </div>

            </div>


        </section>

    )
}