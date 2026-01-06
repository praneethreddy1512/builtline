import { Portfolio } from '../components/Portfolio'
import { Footer } from '../components/Footer'
import { ThemeToggle } from '../components/ThemeToggle'

export function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pt-20">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Projects</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Explore our portfolio of residential, commercial, and industrial excellence.</p>
                </div>
                <Portfolio />
            </main>
            <Footer />
            <ThemeToggle />
        </div>
    )
}
