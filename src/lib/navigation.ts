import { MenuData, NavGroup } from "@/types"

export function menuToNavigation(menuData: MenuData): NavGroup[] {
  if (!menuData?.items) {
    return []
  }

  return menuData.items.map((item) => ({
    title: item.title,
    links: [
      {
        title: item.title,
        href: `/${item.slug}`
      },
      ...(item.submenu?.map((subItem) => ({
        title: subItem.title,
        href: `/${item.slug}/${subItem.slug}`,
        tag: subItem.tag
      })) ?? [])
    ]
  }))
}
