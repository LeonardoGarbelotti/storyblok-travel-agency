import Image from "next/image";
import { TourStoryblok } from "@/app/types/component-types-sb";

import { richTextResolver, StoryblokRichTextOptions } from '@storyblok/richtext';
import { createElement } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface TourProps {
  blok: TourStoryblok
}

export default function Tour({ blok }: TourProps) {
  const options: StoryblokRichTextOptions<React.ReactElement> = {
    renderFn: createElement,
    keyedResolvers: true,
  };

  const root = () => richTextResolver<React.ReactElement>(options).render(blok.body);

  return (
    <main {...storyblokEditable(blok)} className="container mx-auto px-4 w-full pt-32 pb-16">
      <h1 className="text-3xl md:text-5xl font-bold">{blok.name}</h1>
      <Image className="mt-12 w-full" src={blok.main_image.filename!} alt={`${blok.main_image.alt}`} width={1920} height={1080} />
      <p className="mt-12 text-lg md:text-2xl leading-relaxed">{blok.introduction}</p>
      <div className="prose md:prose-lg mt-16 max-w-none">
        {root()}
      </div>
    </main>
  )
}