import { TourStoryblok } from "@/app/types/component-types-sb"
import { ISbStoryData } from "@storyblok/react/rsc"
import Image from "next/image"
import { moneyFormatter } from "../lib/formatter"
import Link from "next/link"

interface RecommendedTourCardProps {
  tour: ISbStoryData<TourStoryblok> | ISbStoryData
}

export default function RecommendedTourCard({ tour }: RecommendedTourCardProps) {
  const tourContent = tour.content
  return (
    <div className="bg-white rounded-md shadow">
      <Image className="aspect-video object-cover w-full origin-center" src={tourContent.main_image.filename!} alt={`${tour.content.main_image.alt}`} width={1920} height={1080} />
      <div className="p-8">
        <div className="flex gap-4 justify-between text-lg font-bold">
          <h3>
            {tourContent.name}
          </h3>
          <p>
            {moneyFormatter.format(tourContent.price)}
          </p>
        </div>
        <p className="text-gray-700 uppercase font-semibold mt-2 text-sm tracking-wide">{tourContent.location}, Taiwan</p>
        <Link className="font-bold text-base mt-8 block underline" href={`/${tour.full_slug}`}>View Tour</Link>
      </div>
    </div>
  )
}