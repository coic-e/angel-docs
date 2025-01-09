import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentPropsWithoutRef, ReactNode } from "react"

import { Button } from "@/components/Button"

import { Tag } from "../Tag"

interface NavigationProps extends ComponentPropsWithoutRef<"nav"> {
  navigation: Array<{
    title: string
    links: Array<{
      title: string
      href: string
      tag?: string
    }>
  }>
}

function TopLevelNavItem({
  href,
  children
}: {
  href: string
  children: ReactNode
}) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
        {children}
      </Link>
    </li>
  )
}

function NavLink({
  href,
  children,
  tag,
  active = false,
  isAnchorLink = false
}: {
  href: string
  children: ReactNode
  tag?: string
  active?: boolean
  isAnchorLink?: boolean
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "flex justify-between gap-2 py-1 pr-3 text-sm transition",
        isAnchorLink ? "pl-7" : "pl-4",
        active
          ? "text-zinc-900 dark:text-white"
          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      )}>
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function NavigationGroup({
  group,
  className
}: {
  group: {
    title: string
    links: Array<{ title: string; href: string; tag?: string }>
  }
  className?: string
}) {
  const pathname = usePathname()
  const isActiveGroup =
    group.links.findIndex((link) => link.href === pathname) !== -1

  return (
    <li className={clsx("relative mt-6", className)}>
      <h2 className="text-xs font-semibold text-zinc-900 dark:text-white">
        {group.title}
      </h2>
      <div className="relative mt-3 pl-2">
        <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5" />
        {isActiveGroup && (
          <div className="absolute left-2 h-6 w-px bg-emerald-500" />
        )}
        <ul className="border-l border-transparent">
          {group.links.map((link) => (
            <li key={link.href} className="relative">
              <NavLink href={link.href} active={link.href === pathname}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function Navigation({ navigation, ...props }: NavigationProps) {
  return (
    <nav {...props}>
      <ul>
        <TopLevelNavItem href="/">API</TopLevelNavItem>
        <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
        <TopLevelNavItem href="#">Support</TopLevelNavItem>
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 ? "md:mt-0" : ""}
          />
        ))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="#" variant="filled" className="w-full">
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}
