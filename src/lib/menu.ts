import { MenuData, NavigationSection, Post } from "@/types"

export async function getMenuData(): Promise<MenuData> {
  try {
    // Using require for server-side only
    const menuData = require("../../public/content/menu.json")
    return menuData as MenuData
  } catch (error) {
    console.error("Error reading menu data:", error)
    return { items: [] }
  }
}

export function generateNavigation(posts: Post[]): NavigationSection[] {
  // Group posts by category
  const postsByCategory = posts.reduce<Record<string, Post[]>>((acc, post) => {
    const category = post.category || "uncategorized"
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(post)
    return acc
  }, {})

  // Transform into navigation format
  return Object.entries(postsByCategory).map(([category, categoryPosts]) => ({
    title:
      category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " "),
    links: categoryPosts
      .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
      .map((post) => ({
        title: post.frontmatter.title,
        href: `/${post.slug.split("/").pop() || post.slug}`
      }))
  }))
}
