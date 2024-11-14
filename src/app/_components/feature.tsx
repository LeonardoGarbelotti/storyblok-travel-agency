import { FeatureStoryblok } from "@/app/types/component-types-sb";

interface FeatureProps {
  blok: FeatureStoryblok
}

export default function Feature({ blok }: FeatureProps) {
  return (
    <div className="bg-white p-8 rounded-md shadow">
      <h3 className="font-bold text-3xl">
        {blok.headline}
      </h3>
      <p className="mt-6 text-lg">
        {blok.content}
      </p>
    </div>
  )
}