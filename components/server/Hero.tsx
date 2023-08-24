import Image from "next/image"
import splash from "@/public/images/splash.webp"
export default function Hero() {
    return (
        <section className="h-[50dvh] w-full relative">
            <Image src={splash} alt={'splash art'} fill />
            <h1 className="absolute z-10 bottom-5 right-5 text-white font-extrabold">Super Epic Blog</h1>
        </section>
    )
}