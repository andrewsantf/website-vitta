import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactFormSection from '@/components/ContactFormSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <HowItWorksSection />
            <DifferentialsSection />
            <TestimonialsSection />
            <BlogSection />
            <ContactFormSection />
        </>
    );
}
