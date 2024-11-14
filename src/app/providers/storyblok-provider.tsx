'use client'

import { getStoryblokApi } from "@/app/lib/storyblok"

import { ReactNode } from "react"

interface StoryblokProvider {
  children: ReactNode
}

export default function StoryblokProvider({ children }: StoryblokProvider) {
  getStoryblokApi();
  return children;
}