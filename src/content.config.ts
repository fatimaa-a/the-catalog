import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const topics = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/content/topics",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    publishedAt: z.coerce.date(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  topics,
};