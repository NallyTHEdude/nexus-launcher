import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/contexts/theme-provider.tsx"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Sun className="size-4" />
      <Switch onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} />
      <Moon className="size-4" />
    </div>
  )
}