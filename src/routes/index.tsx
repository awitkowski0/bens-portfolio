import { createFileRoute } from '@tanstack/react-router'
import { NavBar } from '#/components/sections/NavBar'
import { Hero } from '#/components/sections/Hero'
import { Experience } from '#/components/sections/Experience'
import { Leadership } from '#/components/sections/Leadership'
import { Projects } from '#/components/sections/Projects'
import { Education } from '#/components/sections/Education'
import { Skills } from '#/components/sections/Skills'
import { Contact } from '#/components/sections/Contact'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Experience />
      <Leadership />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </>
  )
}
