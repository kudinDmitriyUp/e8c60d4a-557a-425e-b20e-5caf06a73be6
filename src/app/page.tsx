"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TeamCardFour from '@/components/sections/team/TeamCardFour';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterCard from '@/components/sections/footer/FooterCard';
import { ArrowRight, Shield, Users, Star, Mail, Phone } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          links={[
            { label: "Home", href: "hero" },
            { label: "About", href: "about" },
            { label: "Services", href: "services" },
            { label: "Testimonials", href: "testimonials" },
            { label: "Team", href: "team" },
            { label: "FAQ", href: "faq" },
            { label: "Contact", href: "contact" }
          ]}
          logoSrc="/placeholders/placeholder1.webp"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Professional Services Excellence"
          description="Delivering expert solutions and exceptional results for your business needs"
          items={[
            {
              title: "Expert Consulting",
              description: "Strategic guidance from industry professionals",
              image: "/placeholders/placeholder1.webp"
            },
            {
              title: "Quality Delivery",
              description: "Consistent results that exceed expectations",
              image: "/placeholders/placeholder1.webp"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          description="We are a team of dedicated professionals committed to delivering exceptional results. Our expertise spans across multiple industries, providing tailored solutions that drive success."
        />
      </div>
      
      <div id="services" data-section="services">
        <FeatureCardNine
          title="Our Services"
          description="Comprehensive solutions designed to meet your business objectives"
          features={[
            {
              title: "Strategic Consulting",
              description: "Expert advice to guide your business decisions",
              icon: Shield
            },
            {
              title: "Implementation Support",
              description: "Hands-on assistance to execute your plans",
              icon: ArrowRight
            },
            {
              title: "Ongoing Maintenance",
              description: "Continuous support to ensure sustained success",
              icon: Star
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Client Success Stories"
          description="See what our clients have to say about working with us"
          testimonials={[
            {
              name: "Sarah Johnson",
              title: "CEO, TechCorp",
              content: "Outstanding service and exceptional results. Highly recommended for any business looking to grow.",
              image: "/placeholders/placeholder1.webp"
            },
            {
              name: "Michael Chen",
              title: "Director, InnovateInc",
              content: "Professional, reliable, and delivers exactly what they promise. A pleasure to work with.",
              image: "/placeholders/placeholder1.webp"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardFour
          title="Meet Our Team"
          description="Experienced professionals dedicated to your success"
          teamMembers={[
            {
              name: "Alex Rodriguez",
              title: "Senior Consultant",
              description: "15 years of industry experience",
              image: "/placeholders/placeholder1.webp"
            },
            {
              name: "Emily Davis",
              title: "Project Manager",
              description: "Expertise in delivery excellence",
              image: "/placeholders/placeholder1.webp"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services"
          faqs={[
            {
              question: "What services do you offer?",
              answer: "We provide comprehensive consulting, implementation, and support services tailored to your business needs."
            },
            {
              question: "How long do projects typically take?",
              answer: "Project timelines vary based on scope and complexity. We provide detailed timelines during our initial consultation."
            },
            {
              question: "Do you offer ongoing support?",
              answer: "Yes, we provide continuous support and maintenance services to ensure your long-term success."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactFaq
          title="Get in Touch"
          description="Ready to start your project? Contact us today"
          contactInfo={[
            {
              label: "Email",
              value: "hello@example.com",
              icon: Mail
            },
            {
              label: "Phone",
              value: "+1 (555) 123-4567",
              icon: Phone
            }
          ]}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterCard
          companyName="Professional Services"
          description="Excellence in every project"
          links={[
            { label: "Privacy Policy", href: "#privacy" },
            { label: "Terms of Service", href: "#terms" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}