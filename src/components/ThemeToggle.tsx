import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark")
        setTheme(isDark ? "dark" : "light")
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="h-6 w-6 text-slate-800" />
            ) : (
                <Sun className="h-6 w-6 text-yellow-400" />
            )}
        </button>
    )
}
