import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Providers } from "@/contexts/providers"
import { MenuData } from "@/types"

interface CustomAppProps extends AppProps {
  menuData: MenuData
}
export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <Providers>
      <div className="w-full">
        <Component {...pageProps} />
      </div>
    </Providers>
  )
}
