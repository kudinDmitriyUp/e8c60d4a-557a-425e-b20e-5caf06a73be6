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
import { Calendar, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="mediumSizeExtraSmallSpacing"
      background="noiseGradient"
      cardStyle="outline"
      primaryButtonStyle="outline"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Marketing Pro"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Your Marketing Success Starts Here"
          description="Elevate your brand with data-driven strategies and creative campaigns that deliver measurable results"
          tag="Marketing Excellence"
          buttons={[
            { text: "View Our Work", href: "#testimonials" },
            { text: "Schedule Consultation", href: "#contact" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907059444-8i3ihqyf.jpg", imageAlt: "Digital marketing campaign" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907060643-5mgz6ogz.jpg", imageAlt: "Social media marketing strategy" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907061459-gg8fuyp7.jpg", imageAlt: "Brand identity design" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907062363-01vm2z51.jpg", imageAlt: "Email marketing campaign" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907063447-fxfi1qag.jpg", imageAlt: "Analytics dashboard" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907064333-gk1703yp.jpg", imageAlt: "Digital advertising strategy" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Marketing Pro"
          description={[
            "We are a team of passionate marketing strategists, creative designers, and data analysts dedicated to transforming brands and driving business growth.",
            "Since 2015, we've helped 200+ businesses across industries achieve their marketing goals through integrated campaigns, innovative strategies, and measurable results.",
            "Our mission is simple: deliver exceptional marketing solutions that connect brands with their audiences and drive sustainable growth."
          ]}
          showBorder={true}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More About Our Approach", href: "#services" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNine
          title="Our Core Services"
          description="Comprehensive marketing solutions designed to elevate your brand and drive results"
          features={[
            {
              id: 1,
              title: "Social Media Marketing",
              description: "Strategic content creation and community management across all major platforms to build authentic engagement and loyal followers.",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907065226-shigh8ih.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907060643-5mgz6ogz.jpg" }
            },
            {
              id: 2,
              title: "SEO & Content Strategy",
              description: "Drive organic traffic with data-driven SEO strategies and compelling content that ranks high and converts visitors into customers.",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907066102-gbj15nd1.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907063447-fxfi1qag.jpg" }
            },
            {
              id: 3,
              title: "Brand Strategy & Design",
              description: "Build a cohesive brand identity that resonates with your target audience and differentiates you from competitors.",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907061459-gg8fuyp7.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907059444-8i3ihqyf.jpg" }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Client Success Stories"
          description="See how our strategies transformed businesses and delivered measurable results"
          tag="Real Results"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson, CEO of TechStart",
              date: "Date: 15 January 2025",
              title: "Transformed our online presence completely",
              quote: "Marketing Pro increased our social media engagement by 350% and generated 40% more qualified leads within 6 months. Their strategic approach is truly exceptional.",
              tag: "E-Commerce",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907066923-24ghpv5m.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907072117-x3fpw7gp.jpg"
            },
            {
              id: "2",
              name: "Michael Chen, Founder of EcoRetail",
              date: "Date: 22 December 2024",
              title: "Best marketing investment we made",
              quote: "The team understood our brand vision immediately and delivered a cohesive marketing strategy that resonated with our target audience. ROI exceeded our expectations.",
              tag: "Retail",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907067734-uq5p5sh6.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907072887-4xwdt5cg.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez, Marketing Director at GrowthCo",
              date: "Date: 10 December 2024",
              title: "Professional team with proven results",
              quote: "Their data-driven approach to SEO and content marketing helped us rank for competitive keywords and doubled our organic traffic in 4 months.",
              tag: "SaaS",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907068899-gku3nk7l.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907073907-x6m3nv5g.jpg"
            },
            {
              id: "4",
              name: "David Kim, Brand Manager at StyleLabs",
              date: "Date: 28 November 2024",
              title: "Creative excellence paired with strategy",
              quote: "Marketing Pro created a brand identity that perfectly captures our essence. Their design work and strategic messaging elevated our entire business presence.",
              tag: "Fashion",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907069758-2qlzbx2l.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907074704-ow2ysvbc.jpg"
            },
            {
              id: "5",
              name: "Lisa Anderson, COO of FinanceFlow",
              date: "Date: 05 November 2024",
              title: "Outstanding campaign results",
              quote: "Their email marketing campaigns achieved a 45% open rate and generated significant revenue. The team is responsive, professional, and results-oriented.",
              tag: "Finance",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907070529-mj45xuho.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907075623-wnrm6d9d.jpg"
            },
            {
              id: "6",
              name: "James Wilson, Founder of HealthHub",
              date: "Date: 12 October 2024",
              title: "Transformed our marketing strategy",
              quote: "From strategy development to execution, Marketing Pro handled everything professionally. Our brand awareness increased by 200% and we're now the market leader.",
              tag: "Healthcare",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907071360-ugm1zkag.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907076433-quc42gio.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFour
          title="Meet Our Team"
          description="Talented professionals dedicated to your marketing success"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          speed={35}
          team={[
            {
              id: "1",
              name: "Jessica Martinez",
              role: "Chief Strategy Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907077201-gh8gx2ln.jpg"
            },
            {
              id: "2",
              name: "Alex Thompson",
              role: "Creative Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907077855-7eivp6g5.jpg"
            },
            {
              id: "3",
              name: "Priya Patel",
              role: "Social Media Strategist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907078414-hg7523ef.jpg"
            },
            {
              id: "4",
              name: "Marco Rossi",
              role: "SEO Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907078983-cwyrwk3k.jpg"
            },
            {
              id: "5",
              name: "Sophie Laurent",
              role: "Content Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907079517-mewm06wf.jpg"
            },
            {
              id: "6",
              name: "Ryan Chen",
              role: "Analytics Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907080571-zj9f5tec.jpg"
            },
            {
              id: "7",
              name: "Emma Wilson",
              role: "Brand Strategist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907081346-gs4zjghn.jpg"
            },
            {
              id: "8",
              name: "Carlos Mendez",
              role: "Paid Ads Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765907082560-l9n7cf5l.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our services and how we can help your business grow"
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "How long does it take to see marketing results?",
              content: "Results vary by strategy, but most clients see measurable improvements within 2-3 months. SEO typically takes 3-6 months for significant ranking improvements, while social media and paid advertising can show results in 2-4 weeks."
            },
            {
              id: "2",
              title: "What industries do you specialize in?",
              content: "We work across all industries including e-commerce, SaaS, healthcare, finance, retail, real estate, and more. Our diverse experience means we understand market nuances and can develop strategies tailored to your specific industry."
            },
            {
              id: "3",
              title: "Do you offer custom packages?",
              content: "Absolutely. We understand every business is unique. We create custom marketing packages based on your goals, budget, and timeline. Let's discuss your needs in a consultation to design the perfect solution."
            },
            {
              id: "4",
              title: "How do you measure marketing success?",
              content: "We track KPIs like ROI, conversion rates, website traffic, engagement metrics, and revenue impact. Monthly reports provide transparent insights into campaign performance and strategy adjustments."
            },
            {
              id: "5",
              title: "Can you manage our existing campaigns?",
              content: "Yes, we can take over and optimize existing campaigns or work alongside your team. We conduct audits, identify improvement opportunities, and implement strategic enhancements to boost performance."
            },
            {
              id: "6",
              title: "What's your typical contract length?",
              content: "We typically recommend 3-6 month contracts for meaningful results. We're flexible and can adjust terms based on your specific needs and goals."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Grow Your Business?"
          ctaDescription="Let's discuss your marketing goals and create a winning strategy for your brand."
          ctaButton={{
            text: "Schedule Your Free Consultation",
            href: "#"
          }}
          ctaIcon={Calendar}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What should I prepare for the consultation?",
              content: "Bring your business goals, current marketing efforts, budget range, and target audience information. We'll ask questions to understand your challenges and opportunities."
            },
            {
              id: "2",
              title: "Is the initial consultation free?",
              content: "Yes! Your initial consultation is completely free. We use it to understand your needs and determine how we can best help your business grow."
            },
            {
              id: "3",
              title: "How quickly can you start?",
              content: "Once we finalize a proposal, most strategies launch within 1-2 weeks. Urgent projects can be prioritized for faster implementation."
            },
            {
              id: "4",
              title: "Do you provide regular reporting?",
              content: "Yes, we provide detailed monthly reports with key metrics, insights, and recommendations. We're transparent about performance and committed to continuous improvement."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Marketing Pro"
          copyrightText="© 2025 Marketing Pro. All rights reserved."
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/marketing-pro",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/marketingpro",
              ariaLabel: "Twitter"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/marketingpro",
              ariaLabel: "Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/marketingpro",
              ariaLabel: "Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}