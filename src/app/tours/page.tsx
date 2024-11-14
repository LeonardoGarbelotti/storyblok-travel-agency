import { getStoryblokApi } from "@/app/lib/storyblok";
import { ISbStory, StoryblokStory, ISbStories, ISbStoryData } from "@storyblok/react/rsc";
import RecommendedTourCard from "@/app/_components/recommended-tour-card";

async function fetchToursData(): Promise<Pick<ISbStory["data"], "story">> {
  const client = getStoryblokApi()

  const response = await client.getStory('tours', {
    version: "draft"
  })

  return { story: response.data.story }
}

async function fetchAllTours(): Promise<Pick<ISbStories["data"], "stories">> {
  const client = getStoryblokApi()

  const response = await client.getStories({
    content_type: 'tour',
    version: 'draft'
  })

  return { stories: response.data.stories }
}

export default async function Tours() {
  const { story } = await fetchToursData()
  const { stories: tours } = await fetchAllTours()

  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map((tour: ISbStoryData) => (
          <RecommendedTourCard tour={tour} key={tour.uuid} />
        ))}
      </div>
    </div>
  );
}
