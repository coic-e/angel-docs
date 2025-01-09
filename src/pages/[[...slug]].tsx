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
  return (
    <Home posts={posts} navigation={navigation} currentPost={currentPost} />
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const posts = getAllPosts()
  const navigation = generateNavigation(posts) || []
  const defaultSlug = "getting-started-with-rust"

  // for the root path or empty slug, render default content
  if (!params?.slug) {
    const defaultPost = getPostBySlug(defaultSlug)
    if (defaultPost) {
      defaultPost.content = await markdownToHtml(defaultPost.content || "")
    }
    return {
      props: {
        posts,
        navigation,
        currentPost: defaultPost
      }
    }
  }

  // handle other paths
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug
  let currentPost = getPostBySlug(slug)

  // if post not found fallback to default post
  if (!currentPost) {
    currentPost = getPostBySlug(defaultSlug)
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

  // Add the root path - for [[...slug]], we use null instead of []
  paths.push({ params: { slug: [] } })

  return {
    paths,
    fallback: false
  }
}
