import headlessuiPlugin from "@headlessui/tailwindcss"
import typographyPlugin from "@tailwindcss/typography"
import type { Config } from "tailwindcss"

import typographyStyles from "./typography"

// const defaultTiming = "0.2s ease"
// const bgTransition = `background ${defaultTiming}`
// const colorTransition = `color ${defaultTiming}`
// const defaultTransition = `${bgTransition}, ${colorTransition}`

// const containerPlugin: PluginCreator = ({ addUtilities }) => {
//   const newUtilities = {
//     ".transition-default": {
//       transition: defaultTransition
//     },
//     ".transition-color": {
//       transition: colorTransition
//     },
//     ".transition-background": {
//       transition: bgTransition
//     },
//     ".transition-all-custom": {
//       transition: `all ${defaultTiming}`
//     }
//   }

//   addUtilities(newUtilities)
// }

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "selector",
  plugins: [typographyPlugin, headlessuiPlugin],
  theme: {
    fontSize: {
      "2xs": ["0.75rem", { lineHeight: "1.25rem" }],
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    typography: typographyStyles,
    extend: {
      boxShadow: {
        glow: "0 0 4px rgb(0 0 0 / 0.1)"
      },
      maxWidth: {
        lg: "33rem",
        "2xl": "40rem",
        "3xl": "50rem",
        "5xl": "66rem"
      },
      opacity: {
        1: "0.01",
        2.5: "0.025",
        7.5: "0.075",
        15: "0.15"
      }
    }
  }
}
export default config
