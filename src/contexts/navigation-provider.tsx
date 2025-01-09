// import {
//   createContext,
//   ReactNode,
//   RefObject,
//   useContext,
//   useEffect,
//   useLayoutEffect,
//   useState
// } from "react"
// import { createStore, type StoreApi, useStore } from "zustand"

// import { remToPx } from "@/lib/remToPx"
/*
Maybe use this if we need some more control with effects
*/
// interface NavigationLink {
//   title: string
//   href: string
// }

// interface NavigationSection {
//   title: string
//   links: NavigationLink[]
// }

// interface NavigationState {
//   navigation: NavigationSection[]
//   visibleSections: Array<string>
//   setVisibleSections: (visibleSections: Array<string>) => void
//   registerHeading: ({
//     href,
//     ref,
//     offsetRem
//   }: {
//     href: string
//     ref: RefObject<HTMLHeadingElement>
//     offsetRem: number
//   }) => void
// }

// function createNavigationStore(navigation: NavigationSection[]) {
//   return createStore<NavigationState>()((set) => ({
//     navigation,
//     visibleSections: [],
//     setVisibleSections: (visibleSections) =>
//       set((state) =>
//         state.visibleSections.join() === visibleSections.join()
//           ? {}
//           : { visibleSections }
//       ),
//     registerHeading: ({ href, ref, offsetRem }) =>
//       set((state) => {
//         return {
//           navigation: state.navigation.map((section) => ({
//             ...section,
//             links: section.links.map((link) => {
//               if (link.href === href) {
//                 return {
//                   ...link,
//                   headingRef: ref,
//                   offsetRem
//                 }
//               }
//               return link
//             })
//           }))
//         }
//       })
//   }))
// }

// function useVisibleSections(navigationStore: StoreApi<NavigationState>) {
//   const setVisibleSections = useStore(
//     navigationStore,
//     (s) => s.setVisibleSections
//   )
//   const navigation = useStore(navigationStore, (s) => s.navigation)

//   useEffect(() => {
//     function checkVisibleSections() {
//       const { innerHeight, scrollY } = window
//       const newVisibleSections = []

//       // Flatten all links for easier iteration
//       const allLinks = navigation.flatMap((section) =>
//         section.links.map((link) => ({
//           ...link,
//           sectionTitle: section.title
//         }))
//       )

//       for (let linkIndex = 0; linkIndex < allLinks.length; linkIndex++) {
//         const { href, headingRef, offsetRem = 0 } = allLinks[linkIndex]

//         if (!headingRef?.current) {
//           continue
//         }

//         const offset = remToPx(offsetRem)
//         const top = headingRef.current.getBoundingClientRect().top + scrollY

//         if (linkIndex === 0 && top - offset > scrollY) {
//           newVisibleSections.push("_top")
//         }

//         const nextLink = allLinks[linkIndex + 1]
//         const bottom =
//           (nextLink?.headingRef?.current?.getBoundingClientRect().top ??
//             Infinity) +
//           scrollY -
//           remToPx(nextLink?.offsetRem ?? 0)

//         if (
//           (top > scrollY && top < scrollY + innerHeight) ||
//           (bottom > scrollY && bottom < scrollY + innerHeight) ||
//           (top <= scrollY && bottom >= scrollY + innerHeight)
//         ) {
//           newVisibleSections.push(href)
//         }
//       }

//       setVisibleSections(newVisibleSections)
//     }

//     const raf = window.requestAnimationFrame(() => checkVisibleSections())
//     window.addEventListener("scroll", checkVisibleSections, { passive: true })
//     window.addEventListener("resize", checkVisibleSections)

//     return () => {
//       window.cancelAnimationFrame(raf)
//       window.removeEventListener("scroll", checkVisibleSections)
//       window.removeEventListener("resize", checkVisibleSections)
//     }
//   }, [setVisibleSections, navigation])
// }

// const NavigationStoreContext = createContext<StoreApi<NavigationState> | null>(
//   null
// )

// const useIsomorphicLayoutEffect =
//   typeof window === "undefined" ? useEffect : useLayoutEffect

// export function NavigationProvider({
//   navigation,
//   children
// }: {
//   navigation: NavigationSection[]
//   children: ReactNode
// }) {
//   const [navigationStore] = useState(() => createNavigationStore(navigation))

//   useVisibleSections(navigationStore)

//   useIsomorphicLayoutEffect(() => {
//     navigationStore.setState({ navigation })
//   }, [navigationStore, navigation])

//   return (
//     <NavigationStoreContext.Provider value={navigationStore}>
//       {children}
//     </NavigationStoreContext.Provider>
//   )
// }

// export function useNavigationStore<T>(selector: (state: NavigationState) => T) {
//   const store = useContext(NavigationStoreContext)
//   return useStore(store!, selector)
// }
