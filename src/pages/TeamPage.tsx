import { Team } from '../components/Team'
import { Footer } from '../components/Footer'
import { ThemeToggle } from '../components/ThemeToggle'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export function TeamPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="pt-20">
                <Team />
            </main>

            <Footer />
            <ThemeToggle />
        </div>
    )
}
