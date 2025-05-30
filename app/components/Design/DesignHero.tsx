import Link from "next/link";
import Header from "../Header";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/design/gcdesignbg.avif"
          width={1920}
          height={1080}
          alt="GC CITY NADI Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="absolute inset-0 w-full h-full text-primary">
        <Header />
      </div>
      <div className="relative -z-10 container mx-auto px-4 text-center text-primary">
        <Image
          src="/home/designlogo.png"
          width={1920}
          height={1080}
          alt="GC Design Logo"
          className="w-[500px] h-[150px] mx-auto mb-4"
        />
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          We sculpture design into our clients&apos; dreams, creating ideal
          environments for both commercial and residential spaces.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center text-gray-50 rounded-md bg-primary px-6 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
