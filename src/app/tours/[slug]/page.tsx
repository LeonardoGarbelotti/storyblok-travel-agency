import { getStoryblokApi } from "@/app/lib/storyblok"
import { ISbStory, StoryblokStory } from "@storyblok/react/rsc"

interface TourPageProps {
  params: Promise<{ slug: string }>
}

async function fetchData(slug: string): Promise<ISbStory> {
  const client = getStoryblokApi()

  const data = await client.getStory(`tours/${slug}`, { version: "draft" })

  return data
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params
  const { data } = await fetchData(slug)

  return <StoryblokStory story={data.story} />
}