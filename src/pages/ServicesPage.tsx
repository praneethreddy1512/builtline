import { Services } from '../components/Services'
import { Footer } from '../components/Footer'
import { ThemeToggle } from '../components/ThemeToggle'

export function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pt-20">
                <Services />
            </main>
            <Footer />
            <ThemeToggle />
        </div>
    )
}
