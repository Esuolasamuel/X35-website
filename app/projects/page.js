
import ProjectsContent from '@/components/section/ProjectsContent'
import React from 'react'

export const metadata = {
  title: "Our Projects",
  description:
    "Browse X35's portfolio of commercial office fit-outs, residential renovations, and healthcare designs in Lagos and across Nigeria — from Chevron's Deep Waters office to The Brook Finance headquarters.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "X35 Portfolio – Commercial & Residential Projects in Lagos, Nigeria",
    description:
      "Explore X35's completed projects — office interiors, residential builds, and healthcare clinic designs delivered across Lagos and Nigeria.",
    url: "/projects",
    type: "website",
  },
};

const Projects = () => {
  return (
        <ProjectsContent/>
  )
}

export default Projects







