import { Marker } from "@/types/type";
import { IoLocationOutline } from "react-icons/io5";


export default function WorldMap() {

    const markers: Marker[] = [
        { id: 1, label: "United Kingdom", top: "38%", left: "46%" },
        { id: 2, label: "UAE", top: "52%", left: "60%" },
        { id: 3, label: "India", top: "54%", left: "68%" },
        { id: 4, label: "Kenya", top: "59%", left: "57%" },
        { id: 5, label: "Tanzania", top: "62%", left: "56%" },
        { id: 6, label: "South Africa", top: "68%", left: "53%" },
    ];

    return (
        <div className="w-full" style={{ background: 'var(--background)' }}>
            <div className="relative w-full aspect-[2/1] overflow-hidden rounded-t-[60%]">

                {/* GRADIENT */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: `
          linear-gradient(
            to top,
            rgba(4, 9, 13, 0.7) 0%,
            rgba(4, 9, 13, 0.8) 40%,
            rgba(4, 9, 13, 1) 100%
          )
        `,
                    }}
                />

                {/* MAP IMAGE */}
                <img
                    src="/images/worldmap.jpg"
                    alt="world map"
                    className="w-full h-full object-cover object-center"
                />

                {/* MARKERS */}
                {markers.map((marker) => (
                    <div
                        key={marker.id}
                        className="absolute z-20"
                        style={{
                            top: marker.top,
                            left: marker.left,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <IoLocationOutline
                            className="w-3 h-3 scale-180"
                            style={{ color: "var(--gradient-bright-green)" }}
                        />

                        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 text-xs text-white whitespace-nowrap">
                            {marker.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}