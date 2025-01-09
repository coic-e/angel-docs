import React from "react"

import Comments from "@/components/Comments"
import { Feedback } from "@/components/Feedback"
import { Prose } from "@/components/Prose"
import { NavigationSection, Post } from "@/types"
import styles from "@styles/post-body.module.css"

import Base from "../Base"

interface HomeProps {
  posts: Post[]
  navigation: NavigationSection[]
  currentPost: Post | null
}

export default function Home({ navigation, currentPost }: HomeProps) {
  const renderContent = () => {
    if (currentPost) {
      return (
        <article className="flex h-full flex-col pb-10 pt-16">
          <Prose className="flex-auto">
            <h1>{currentPost.frontmatter.title}</h1>
            <div className="mb-8 text-sm text-gray-500">
              {new Date(currentPost.date).toLocaleDateString("en-US")}
            </div>
            <div className="mt-8">
              <div
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
                className={styles.content}
              />
            </div>
          </Prose>
          <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
            <Feedback />
            <div>
              <Comments title={currentPost.frontmatter.title} />
            </div>
          </footer>
        </article>
      )
    }
  }

  return <Base navigation={navigation}>{renderContent()}</Base>
}
