import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { ThemeToggle } from '../components/ThemeToggle'

export function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pt-20">
                <Contact />
            </main>
            <Footer />
            <ThemeToggle />
        </div>
    )
}
