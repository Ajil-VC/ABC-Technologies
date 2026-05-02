import { nunito } from "@/lib/fonts";


export default function OverLine({ props }: { props: { name: string } }) {
    return <h3 className={`letterSpacing ${nunito.className}`} style={{ color: 'var(--text-green)', fontSize: '18px', fontWeight: "normal" }}>{props.name}</h3>
}