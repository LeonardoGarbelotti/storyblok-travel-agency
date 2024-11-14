import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc"

import type {
  FeatureStoryblok,
  GridStoryblok,
  HeroStoryblok,
  PageStoryblok,
  RecommendedToursStoryblok,
  TestimonialStoryblok
} from "@/app/types/component-types-sb"

export default function Page({ blok }: PageStoryblok) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.blocks.map((nestedBlok: FeatureStoryblok | GridStoryblok | HeroStoryblok | RecommendedToursStoryblok | TestimonialStoryblok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>

  )
}