import { ThemeProvider, useTheme } from "next-themes"
import { ReactNode, useEffect } from "react"

interface ProvidersProps {
  children: ReactNode
}

function ThemeWatcher() {
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")

    function onMediaChange() {
      const systemTheme = media.matches ? "dark" : "light"
      if (resolvedTheme === systemTheme) {
        setTheme("system")
      }
    }

    onMediaChange()
    media.addEventListener("change", onMediaChange)

    return () => {
      media.removeEventListener("change", onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ThemeWatcher />
      {children}
    </ThemeProvider>
  )
}
