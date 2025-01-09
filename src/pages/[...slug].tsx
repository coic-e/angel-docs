import { GetStaticPaths, GetStaticProps } from "next"

import { getAllPosts, getPostBySlug } from "@/lib/api"
import markdownToHtml from "@/lib/markdownToHtml"
import { generateNavigation } from "@/lib/menu"
import Home from "@/templates/Home"
import { NavigationSection, Post } from "@/types"

interface PageProps {
  posts: Post[]
  navigation: NavigationSection[]
  currentPost: Post | null
}

export default function Page({ posts, navigation, currentPost }: PageProps) {
  // if (navigation) return <p>{JSON.stringify(navigation, null, 2)}</p>
  return (
    <Home posts={posts} navigation={navigation} currentPost={currentPost} />
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const posts = getAllPosts()
  const navigation = generateNavigation(posts) || []

  // Handle the slug parameter
  const slugParam = params?.slug as string[]
  const slugPath = Array.isArray(slugParam) ? slugParam.join("/") : slugParam

  // If no slug or empty slug, set to "getting-started-with-rust"
  let currentPost: Post | null = null
  if (!slugPath || slugPath === "") {
    currentPost = getPostBySlug("getting-started-with-rust")
  } else {
    currentPost = getPostBySlug(slugPath)
  }

  if (currentPost) {
    currentPost.content = await markdownToHtml(currentPost.content || "")
  }

  return {
    props: {
      posts,
      navigation,
      currentPost
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.split("/")
    }
  }))

  // Add home page path that will load "getting-started-with-rust"
  paths.push({ params: { slug: [] } })

  return {
    paths,
    fallback: false
  }
}
