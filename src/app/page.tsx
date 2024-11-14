import { getStoryblokApi } from "@/app/lib/storyblok";
import { ISbStory, StoryblokStory } from "@storyblok/react/rsc";

async function fetchHomePageData(): Promise<ISbStory> {
  const client = getStoryblokApi()

  const data = await client.getStory('home', {
    version: "draft",
    resolve_relations: "recommended_tours.tours"
  })

  return data
}

export default async function Home() {
  const { data } = await fetchHomePageData()

  return (
    <StoryblokStory story={data.story} />
  );
}
