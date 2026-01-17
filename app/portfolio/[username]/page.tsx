"use client"

import { PortfolioHeader } from "@/components/portfolio-header"
import { ProjectShowcase } from "@/components/project-showcase"
import { AIGradeWidget } from "@/components/ai-grade-widget"
import { Locate as LogicGate, Zap, Gauge, AlertTriangle } from "lucide-react"

// Mock portfolio data
const portfolioData = {
  name: "Alex Chen",
  title: "Full-Stack JavaScript Developer",
  bio: "Building production-ready applications with attention to code quality and performance. Passionate about testing, accessibility, and clean architecture.",
  skillPoints: 385,
  trustScore: 94,
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
}

const mockProjects = [
  {
    id: "1",
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with product catalog, cart, and payment integration",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    skillPointsEarned: 120,
    difficulty: "advanced" as const,
    stars: 24,
    forks: 8,
    views: 1200,
    link: "https://github.com",
  },
  {
    id: "2",
    name: "Real-time Chat Application",
    description: "WebSocket-based chat with user authentication and message persistence",
    technologies: ["Next.js", "WebSocket", "MongoDB", "Redis"],
    skillPointsEarned: 95,
    difficulty: "intermediate" as const,
    stars: 18,
    forks: 5,
    views: 850,
    link: "https://github.com",
  },
  {
    id: "3",
    name: "Data Visualization Dashboard",
    description: "Analytics dashboard with real-time data updates and custom charting",
    technologies: ["React", "D3.js", "API Design"],
    skillPointsEarned: 80,
    difficulty: "intermediate" as const,
    stars: 12,
    forks: 3,
    views: 620,
    link: "https://github.com",
  },
]

const mockGrades = [
  {
    name: "Logic Accuracy",
    score: 94,
    icon: <LogicGate className="h-4 w-4" />,
    status: "excellent" as const,
  },
  {
    name: "Code Cleanliness",
    score: 88,
    icon: <Zap className="h-4 w-4" />,
    status: "excellent" as const,
  },
  {
    name: "Speed of Implementation",
    score: 82,
    icon: <Gauge className="h-4 w-4" />,
    status: "good" as const,
  },
  {
    name: "Edge-case Handling",
    score: 91,
    icon: <AlertTriangle className="h-4 w-4" />,
    status: "excellent" as const,
  },
]

export default function PortfolioPage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Portfolio Header */}
        <PortfolioHeader
          name={portfolioData.name}
          title={portfolioData.title}
          bio={portfolioData.bio}
          skillPoints={portfolioData.skillPoints}
          trustScore={portfolioData.trustScore}
          socialLinks={portfolioData.socialLinks}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* Project Showcase */}
            <ProjectShowcase projects={mockProjects} />
          </div>

          {/* AI Grade Widget */}
          <div>
            <AIGradeWidget grades={mockGrades} overallGrade="A+" skillPoints={portfolioData.skillPoints} />
          </div>
        </div>
      </div>
    </div>
  )
}
