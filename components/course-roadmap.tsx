"use client"
import { CheckCircle2, Circle, Lock, GitBranch } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Milestone {
  id: string
  title: string
  description: string
  status: "completed" | "in-progress" | "locked"
  skillPoints: number
  difficulty: "beginner" | "intermediate" | "advanced"
  commitHash?: string
}

interface CourseRoadmapProps {
  milestones: Milestone[]
  courseName: string
  progress: number
}

export function CourseRoadmap({ milestones, courseName, progress }: CourseRoadmapProps) {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-6 w-6 text-accent" />
      case "in-progress":
        return <Circle className="h-6 w-6 text-blue-400 animate-pulse" />
      case "locked":
        return <Lock className="h-6 w-6 text-muted-foreground" />
      default:
        return <Circle className="h-6 w-6 text-muted-foreground" />
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader>
          <div className="space-y-2">
            <CardTitle className="text-2xl">{courseName}</CardTitle>
            <CardDescription>Track your commit-based learning journey</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-foreground">{progress}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-accent transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Milestones Timeline */}
      <div className="relative space-y-4">
        {/* Vertical line connector */}
        <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/50 to-muted hidden md:block" />

        {milestones.map((milestone, index) => (
          <Card
            key={milestone.id}
            className={`border-border transition-all hover:border-accent/50 ${
              milestone.status === "locked" ? "opacity-50" : ""
            }`}
          >
            <CardContent className="pt-6">
              <div className="flex gap-4">
                {/* Status Icon */}
                <div className="flex-shrink-0 pt-1">{getStatusIcon(milestone.status)}</div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                    <Badge className={`flex-shrink-0 ${getDifficultyColor(milestone.difficulty)}`}>
                      {milestone.difficulty}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-accent font-semibold">{milestone.skillPoints} points</span>
                    </div>

                    {milestone.commitHash && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                        <GitBranch className="h-3 w-3" />
                        {milestone.commitHash.slice(0, 7)}
                      </div>
                    )}

                    {milestone.status === "completed" && (
                      <span className="text-xs text-accent font-medium">Completed</span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
