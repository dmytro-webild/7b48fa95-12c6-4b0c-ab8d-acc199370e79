"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "The Story",          id: "about"},
        {
          name: "Moments",          id: "features"},
        {
          name: "Statistics",          id: "metrics"},
        {
          name: "Gallery",          id: "blog"},
      ]}
      brandName="Mbappé Legacy"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars"}}
      logoText="Kylian Mbappé"
      description="The Speed Of Greatness. Witness the legacy of a football icon as he redefines the game."
      buttons={[
        {
          text: "Enter Legacy",          href: "#about"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/view-empty-soccer-stadium-with-fantasy-dreamy-sky_23-2151563114.jpg"
      imageAlt="Kylian Mbappe cinematic tunnel entrance"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="A Legacy Built on Speed and Precision"
      tag="The Origin Story"
      tagIcon={Zap}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "2018 World Cup",          subtitle: "A global breakthrough",          category: "France",          value: "Winner"},
        {
          id: "2",          title: "2022 Hat Trick",          subtitle: "Final mastery",          category: "National Team",          value: "Elite"},
        {
          id: "3",          title: "Real Madrid",          subtitle: "New Chapter",          category: "Club",          value: "Iconic"},
        {
          id: "4",          title: "League Titles",          subtitle: "Domestic Dominance",          category: "Club",          value: "Champion"},
        {
          id: "5",          title: "European Night",          subtitle: "Elite Performance",          category: "Champions League",          value: "Masterclass"},
      ]}
      title="Legendary Moments"
      description="Defining achievements in football history."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Unmatched Statistics"
      tag="Career Data"
      metrics={[
        {
          id: "m1",          value: "300+",          description: "Career Goals"},
        {
          id: "m2",          value: "150+",          description: "Career Assists"},
        {
          id: "m3",          value: "20+",          description: "Trophies Won"},
        {
          id: "m4",          value: "450+",          description: "Professional Matches"},
        {
          id: "m5",          value: "40+",          description: "Individual Awards"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Born In",          content: "December 20, 1998, Paris, France"},
        {
          id: "q2",          title: "Playing Style",          content: "Speed, Dribbling, Clinical Finishing"},
        {
          id: "q3",          title: "Position",          content: "Forward, Striker"},
        {
          id: "q4",          title: "Height",          content: "1.78m"},
        {
          id: "q5",          title: "Foot",          content: "Right"},
      ]}
      sideTitle="Biographical Data"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="quote" data-section="quote">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="I always want to make history. I never put limits on myself."
      rating={5}
      author="Kylian Mbappé"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-with-soccer-ball_23-2150904277.jpg",          alt: "Mbappe portrait"},
        {
          src: "http://img.b2bpic.net/free-photo/american-football-character-with-equipment_23-2151154269.jpg",          alt: "World cup victory"},
        {
          src: "http://img.b2bpic.net/free-photo/male-football-player-field-rain_23-2150888383.jpg",          alt: "Champions league action"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-cheering-man-with-french-flag-confetti_23-2148935510.jpg",          alt: "Goal celebration"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-player-with-his-fist-up_1160-182.jpg",          alt: "Mbappe fist up"},
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Cinematic Visuals"
      description="Moments in focus."
      blogs={[
        {
          id: "b1",          category: "Match",          title: "The Entrance",          excerpt: "Focus.",          imageSrc: "http://img.b2bpic.net/free-photo/american-football-player-professional-stadium_654080-942.jpg",          authorName: "Mbappe",          authorAvatar: "http://img.b2bpic.net/free-photo/full-shot-soccer-woman-kicking-ball_23-2148298860.jpg",          date: "2024"},
        {
          id: "b2",          category: "Training",          title: "Precision",          excerpt: "Focus.",          imageSrc: "http://img.b2bpic.net/free-photo/full-length-portrait-strong-muscular-afro-american-man_171337-9421.jpg",          authorName: "Mbappe",          authorAvatar: "http://img.b2bpic.net/free-photo/person-enjoying-soccer-match_23-2150888285.jpg",          date: "2024"},
        {
          id: "b3",          category: "Stadium",          title: "Atmosphere",          excerpt: "Focus.",          imageSrc: "http://img.b2bpic.net/free-photo/analog-landscape-city-with-buildings_23-2149661459.jpg",          authorName: "Mbappe",          authorAvatar: "http://img.b2bpic.net/free-photo/blue-yellow-motion-lights-dodgems-court_23-2148328055.jpg",          date: "2024"},
        {
          id: "b4",          category: "Celebration",          title: "Victory",          excerpt: "Focus.",          imageSrc: "http://img.b2bpic.net/free-photo/american-football-player-professional-stadium_654080-972.jpg",          authorName: "Mbappe",          authorAvatar: "http://img.b2bpic.net/free-photo/different-people-looking-soccer-team_23-2149015541.jpg",          date: "2024"},
        {
          id: "b5",          category: "Trophy",          title: "Glory",          excerpt: "Focus.",          imageSrc: "http://img.b2bpic.net/free-photo/golden-soccer-ball-trophy-white-background_187299-46154.jpg",          authorName: "Mbappe",          authorAvatar: "http://img.b2bpic.net/free-photo/view-silver-cup-trophies_23-2149458766.jpg",          date: "2024"},
        {
          id: "b6",          category: "Stadium",          title: "Fans",          excerpt: "Focus.",          imageSrc: "http://img.b2bpic.net/free-photo/empty-soccer-stadium-with-dreamy-fantasy-view-sky_23-2151563129.jpg",          authorName: "Mbappe",          authorAvatar: "http://img.b2bpic.net/free-photo/gymnast-getting-ready-competition_23-2150867771.jpg",          date: "2024"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Join the Legacy"
      description="Stay updated with the latest documentary drops."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Name"},
        {
          name: "email",          type: "email",          placeholder: "Email"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/gold-black-background-wallpaper-abstract-art_53876-138213.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="KM"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Designed as a cinematic tribute to Kylian Mbappé",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
