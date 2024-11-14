import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import { GridStoryblok } from "@/app/types/component-types-sb";

interface GridProps {
  blok: GridStoryblok
}

export default function Grid({ blok }: GridProps) {
  return (
    <section {...storyblokEditable(blok)} className="bg-blue-100 py-16">
      <div className="container mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          {blok.headline}
        </h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {blok.columns.map((nestedBlok) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  )
}