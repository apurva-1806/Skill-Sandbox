"use client"

import { ExternalLink, Star, GitFork, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  skillPointsEarned: number
  difficulty: "beginner" | "intermediate" | "advanced"
  stars?: number
  forks?: number
  views?: number
  link?: string
}

interface ProjectShowcaseProps {
  projects: Project[]
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-blue-500/20 text-blue-400"
      case "intermediate":
        return "bg-yellow-500/20 text-yellow-400"
      case "advanced":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Project Showcase</h2>
        <p className="text-muted-foreground">Verified projects built through committed code</p>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="border-border hover:border-accent/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-accent" />
                      </a>
                    )}
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <Badge className={`flex-shrink-0 ${getDifficultyColor(project.difficulty)}`}>
                  {project.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-muted/50">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <span>+{project.skillPointsEarned} points</span>
                </div>
                {project.stars !== undefined && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="h-4 w-4" />
                    {project.stars}
                  </div>
                )}
                {project.forks !== undefined && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <GitFork className="h-4 w-4" />
                    {project.forks}
                  </div>
                )}
                {project.views !== undefined && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    {project.views} views
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
