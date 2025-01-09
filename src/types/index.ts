import { RefObject } from "react"

export interface Post {
  frontmatter: PostFrontmatter
  content: string
  slug: string
  date: string
  category: string | null
}

interface PostFrontmatter {
  title: string
  tags: string
  description: string
  date: string
  category: string
}

export interface MenuItem {
  title: string
  slug: string
  order: number
  submenu?: MenuItem[]
  tag?: string
}

export interface MenuData {
  items: MenuItem[]
}

export interface Section {
  id: string
  title: string
  offsetRem?: number
  tag?: string
  headingRef?: RefObject<HTMLHeadingElement>
  category?: string
  slug?: string
}

export interface NavLink {
  title: string
  href: string
  tag?: string
}

export interface NavGroup {
  title: string
  links: NavLink[]
}

export interface SearchResult {
  url: string
  title: string
  pageTitle?: string
  content?: string
  category?: string
  date?: string
}

export interface NavigationLink {
  title: string
  href: string
}

export interface NavigationSection {
  title: string
  links: NavigationLink[]
}
