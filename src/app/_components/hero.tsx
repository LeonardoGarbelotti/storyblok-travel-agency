import { HeroStoryblok } from "@/app/types/component-types-sb";

interface HeroProps {
  blok: HeroStoryblok
}

export default function Hero({ blok }: HeroProps) {
  return (
    <section className="container mx-auto px-4 w-full pt-32 pb-16">
      <h1 className="text-center text-5xl md:text-7xl font-bold">{blok.headline}</h1>
      <p className="text-center text-xl mt-8">{blok.content}</p>
    </section>
  )
}