import Image from "next/image";
import Header from "../Header";

function BakkuttehHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/bakkutteh/hero1.jpg"
          width={1920}
          height={1080}
          alt="GC CITY NADI Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      <div className="absolute inset-0 w-full h-full text-primary">
        <Header />
      </div>
    </section>
  );
}

export default BakkuttehHero;
