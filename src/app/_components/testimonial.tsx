import { TestimonialStoryblok } from "@/app/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";

interface TestimonialProps {
  blok: TestimonialStoryblok
}

export default function Testimonial({ blok }: TestimonialProps) {
  return (
    <div {...storyblokEditable(blok)} className="bg-white p-8 rounded-md shadow">
      <p className="text-xl leading-relaxed text-gray-700">{blok.comment}</p>
      <p className="text-lg font-semibold mt-6">{blok.name}</p>
    </div>
  )
}