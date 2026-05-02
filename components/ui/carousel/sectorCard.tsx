
import { CardType } from "@/types/type";
import style from '../ui.module.css';

export default function SectorCard({ item }: { item: CardType }) {

    return (
        <div className={`${style.cardStyle} ${style.sectorCard}`}>

            <div className={style.sectorNumber}>
                {item.number}
            </div>


            <h3
                style={{
                    margin: 0,
                    color: "#f0f4ff",
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "1.3",
                    letterSpacing: "-0.01em",
                }} 
            >
                {item.title}
            </h3>


            <p
                style={{
                    margin: 0,
                    color: "rgba(180,190,210,0.75)",
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "1.65",
                    textAlign: "center",
                }}
            >
                {item.description}
            </p>
        </div>
    );
};


