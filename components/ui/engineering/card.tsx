import { CardType } from "@/types/type"

export default function EngineeringCard({ props }: { props: CardType }) {

    return (
        <div className="p-4 ">
            <h3 className="font-medium mb-2">{props.title}</h3>
            <p className="text-sm text-gray-400">
                {props.description}
            </p>
        </div>
    )
}