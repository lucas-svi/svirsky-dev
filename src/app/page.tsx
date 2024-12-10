"use client";
import PageTransition from '@/components/PageTransition'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'

export default function Home() {

  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </PageTransition>
  )
}