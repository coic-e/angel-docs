import { createContext, ReactNode, useContext } from "react"

import { menuToNavigation } from "@/lib/navigation"
import { MenuData, NavGroup } from "@/types"

interface MenuContextValue {
  menuData: MenuData
  navigation: NavGroup[]
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined)

export function useMenu() {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider")
  }
  return context.menuData
}

export function useNavigation() {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error("useNavigation must be used within a MenuProvider")
  }
  return context.navigation
}

interface MenuProviderProps {
  children: ReactNode
  menuData: MenuData
}

export function MenuProvider({ children, menuData }: MenuProviderProps) {
  const navigation = menuToNavigation(menuData)

  return (
    <MenuContext.Provider value={{ menuData, navigation }}>
      {children}
    </MenuContext.Provider>
  )
}
