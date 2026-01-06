import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { ThemeToggle } from '../components/ThemeToggle'

export function ProcessPage() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pt-20">
                <About />
            </main>
            <Footer />
            <ThemeToggle />
        </div>
    )
}
