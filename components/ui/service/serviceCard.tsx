import { ServiceType } from "@/types/type";
import style from '../ui.module.css';


export function ServiceCard({ item }: { item: ServiceType }) {
    return (
        <div className={`${style.cardStyle} min-w-[320px] max-w-[380px] min-h-[360px] bg-[#0f1a16] border border-green-900 rounded-xl p-6 text-white backdrop-blur-md flex flex-col`}>

            <div className="mb-4 flex justify-end">
                <img
                    src="/images/serviceIcon.png"
                    alt=""
                    className="w-35  object-contain"
                />
            </div>

            <h3 className="text-lg mb-5">{item.title}</h3>

            <p className="text-sm opacity-70 mb-6">
                {item.description}
            </p>

            <div className="mt-auto">
                <button className="w-full border border-green-600 rounded-lg py-2 text-sm hover:bg-green-700 transition">
                    Learn More ↗
                </button>
            </div>

        </div>
    );
}