import Image from "next/image";

export default function Logo() {

    return (
        <div className={`flex items-center`}>
            <Image src="/images/logo.png" alt="logo" width={105}
                height={105} />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-medium">ABC</h1>
                <h5 className="text-lg font-medium">Technologies</h5>
            </div>
        </div>
    )
}