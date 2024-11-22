import { RecommendedToursStoryblok, TourStoryblok } from "@/app/types/component-types-sb";
import RecommendedTourCard from "@/app/_components/recommended-tour-card";
import { ISbStoryData, storyblokEditable } from "@storyblok/react/rsc";

interface RecommendedToursProps {
  blok: RecommendedToursStoryblok
}

export default function RecommendedTours({ blok }: RecommendedToursProps) {
  return (
    <section {...storyblokEditable(blok)} className="container py-16 mx-auto w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">{blok.headline}</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {blok.tours.map((tour: ISbStoryData<TourStoryblok>) => (
          <RecommendedTourCard tour={tour} key={tour.uuid} />
        ))}
      </div>
    </section>
  )
}