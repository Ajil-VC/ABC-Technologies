

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};

export default function StrokeButton({ children, onClick }: Props) {

    return (
        <button onClick={onClick} style={{ borderColor: "var(--text-green)", cursor: "pointer" }} className={` border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition `}>
            {children}
        </button>
    )
}