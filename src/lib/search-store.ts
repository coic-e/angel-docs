import { SearchResult } from "@/types"

let searchIndex: SearchResult[] = []

export function setSearchIndex(index: SearchResult[]) {
  searchIndex = index
}

export function search(query: string, { limit = 5 } = {}): SearchResult[] {
  const terms = query.toLowerCase().split(" ")

  return searchIndex
    .filter((result) => {
      const searchText = [
        result.title,
        result.category,
        result.content,
        result.pageTitle
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return terms.every((term) => searchText.includes(term))
    })
    .slice(0, limit)
}
