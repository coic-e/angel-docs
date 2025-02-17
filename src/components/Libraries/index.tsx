import Image from "next/image"

import { Button } from "@/components/Button"
import { Heading } from "@/components/Heading"

const libraries = [
  {
    href: "#",
    name: "PHP",
    description:
      "A popular general-purpose scripting language that is especially suited to web development.",
    logo: "/images/php.svg"
  },
  {
    href: "#",
    name: "Ruby",
    description:
      "A dynamic, open source programming language with a focus on simplicity and productivity.",
    logo: "/images/ruby.svg"
  },
  {
    href: "#",
    name: "Node.js",
    description:
      "Node.js® is an open-source, cross-platform JavaScript runtime environment.",
    logo: "/images/node.svg"
  },
  {
    href: "#",
    name: "Python",
    description:
      "Python is a programming language that lets you work quickly and integrate systems more effectively.",
    logo: "/images/python.svg"
  },
  {
    href: "#",
    name: "Go",
    description:
      "An open-source programming language supported by Google with built-in concurrency.",
    logo: "/images/go.svg"
  }
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
