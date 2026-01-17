"use client"

import { GitCommit, User, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Commit {
  hash: string
  message: string
  author: string
  timestamp: string
  filesChanged: number
  additions: number
  deletions: number
  stage: string
}

interface CommitTimelineProps {
  commits: Commit[]
  projectName: string
  projectDescription?: string
  startDate?: string
  endDate?: string
}

export function CommitTimeline({ commits, projectName, projectDescription, startDate, endDate }: CommitTimelineProps) {
  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Hello World":
        return "bg-blue-500/20 text-blue-400"
      case "Basic Features":
        return "bg-purple-500/20 text-purple-400"
      case "Optimization":
        return "bg-yellow-500/20 text-yellow-400"
      case "Production Ready":
        return "bg-accent/20 text-accent"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-2xl">{projectName}</CardTitle>
          {projectDescription && <CardDescription>{projectDescription}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 text-sm">
            {startDate && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{startDate}</span>
              </div>
            )}
            {endDate && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>→</span>
                <span>{endDate}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-muted hidden md:block" />

        {/* Commits */}
        <div className="space-y-4">
          {commits.map((commit, index) => (
            <Card key={commit.hash} className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex gap-6">
                  {/* Commit Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 ring-4 ring-background">
                      <GitCommit className="h-4 w-4 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    {/* Message and Stage */}
                    <div>
                      <h3 className="font-semibold text-foreground text-base">{commit.message}</h3>
                      <Badge className={`mt-2 ${getStageColor(commit.stage)}`}>{commit.stage}</Badge>
                    </div>

                    {/* Author and Time */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {commit.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {commit.timestamp}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid gap-3 pt-2 md:grid-cols-4">
                      <div className="rounded bg-muted/50 p-2">
                        <p className="text-xs text-muted-foreground">Hash</p>
                        <p className="font-mono text-sm text-foreground">{commit.hash.slice(0, 7)}</p>
                      </div>
                      <div className="rounded bg-muted/50 p-2">
                        <p className="text-xs text-muted-foreground">Files Changed</p>
                        <p className="font-mono text-sm text-foreground">{commit.filesChanged}</p>
                      </div>
                      <div className="rounded bg-muted/50 p-2">
                        <p className="text-xs text-muted-foreground">Additions</p>
                        <p className="font-mono text-sm text-green-400">+{commit.additions}</p>
                      </div>
                      <div className="rounded bg-muted/50 p-2">
                        <p className="text-xs text-muted-foreground">Deletions</p>
                        <p className="font-mono text-sm text-red-400">-{commit.deletions}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
