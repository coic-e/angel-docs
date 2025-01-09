import { Post } from "@/types"

import { getAllPosts } from "./api"

interface SearchResult {
  url: string
  title: string
  pageTitle?: string
  content?: string
  category?: string
  date?: string
}

export async function generateSearchIndex(): Promise<SearchResult[]> {
  const posts = getAllPosts()

  return posts.map((post: Post) => ({
    url: `/docs/${post.slug}`,
    title: post.frontmatter.title,
    pageTitle: post.frontmatter.title,
    category: post.frontmatter.category,
    content: post.content,
    date: post.date
  }))
}
