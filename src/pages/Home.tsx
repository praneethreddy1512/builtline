import { Hero } from '../components/Hero'
import { Innovation } from '../components/Innovation'
import { Testimonials } from '../components/Testimonials'
import { Awards } from '../components/Awards'
import { Footer } from '../components/Footer'
import { ThemeToggle } from '../components/ThemeToggle'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { TrustBrands } from '../components/TrustBrands'

export function Home() {
    return (
        <>
            <main className="relative" role="main" style={{ overflow: 'visible' }}>
                <section id="hero" aria-label="Hero section">
                    <Hero />
                </section>

                {/* Innovation Section - Key highlight for Home */}
                <section id="innovation" aria-label="Innovation section">
                    <Innovation />
                </section>

                {/* Why Choose Us Section */}
                <section id="why-choose-us" aria-label="Why Choose Us section">
                    <WhyChooseUs />
                </section>

                {/* Awards - Credibility for Home */}
                <section id="awards" aria-label="Awards section">
                    <Awards />
                </section>

                {/* Trust Brands */}
                <section id="brands" aria-label="Trust Brands section">
                    <TrustBrands />
                </section>

                {/* Testimonials - Social Proof for Home */}
                <section id="testimonials" aria-label="Testimonials section">
                    <Testimonials />
                </section>

                {/* Other sections (Portfolio, Services, Process, Contact) are now on their own pages */}
            </main>
            <Footer />
            <ThemeToggle />
        </>
    )
}
