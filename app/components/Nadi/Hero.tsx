import Link from "next/link";
import Header from "../Header";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero.png"
          width={1920}
          height={1080}
          alt="GC CITY NADI Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="absolute inset-0 w-full h-full text-primary">
        <Header />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-primary">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          GC CITY NADI: Where Rivers and Luxury Converge
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover an iconic 34-hectare high-end residential community in Phnom
          Penh, where contemporary design meets the serenity of flowing rivers
          and lush greenery.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://gcc-gp.com/en/gc-orussey-market/"
            target="_blank"
            className="inline-flex h-12 items-center justify-center text-gray-50 rounded-md bg-primary hover:cursor-pointer hover:bg-primary/80 px-6 font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Visit GC Orussey
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="/contactus"
            className="inline-flex h-12 items-center justify-center text-primary rounded-md bg-[#f5f6f6] hover:cursor-pointer hover:bg-[#F3F4F6] px-6 font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
