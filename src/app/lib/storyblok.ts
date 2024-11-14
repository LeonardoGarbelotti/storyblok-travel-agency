import { apiPlugin, storyblokInit } from "@storyblok/react/rsc"
import Tour from "@/app/_components/tour"
import Page from "@/app/_components/page"
import Hero from "@/app/_components/hero"
import Grid from "@/app/_components/grid"
import RecommendedTours from "@/app/_components/recommended-tours"
import Feature from "@/app/_components/feature"
import Testimonial from "@/app/_components/testimonial"

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    recommended_tours: RecommendedTours,
    feature: Feature,
    testimonial: Testimonial
  },
  enableFallbackComponent: true,
})