"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, CheckCircle2, AlertCircle } from "lucide-react"

interface GradeMetric {
  name: string
  score: number
  icon: React.ReactNode
  status: "excellent" | "good" | "needs-improvement"
}

interface AIGradeWidgetProps {
  grades: GradeMetric[]
  overallGrade: string
  skillPoints: number
}

export function AIGradeWidget({ grades, overallGrade, skillPoints }: AIGradeWidgetProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-accent/10 border-accent/50 text-accent"
      case "good":
        return "bg-blue-500/10 border-blue-500/50 text-blue-400"
      case "needs-improvement":
        return "bg-yellow-500/10 border-yellow-500/50 text-yellow-400"
      default:
        return "bg-muted"
    }
  }

  return (
    <Card className="border-border bg-card overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">AI Grade Report</CardTitle>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            <span className="font-bold text-accent">{skillPoints} Points</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Grade */}
        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground mb-2">Overall Assessment</p>
          <p className="text-3xl font-bold text-primary">{overallGrade}</p>
        </div>

        {/* Individual Grades */}
        <div className="space-y-3">
          {grades.map((grade) => (
            <div key={grade.name} className={`rounded-lg border p-4 ${getStatusColor(grade.status)}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {grade.icon}
                  <div>
                    <p className="font-medium text-sm">{grade.name}</p>
                    <p className="text-xs opacity-75">Score: {grade.score}/100</p>
                  </div>
                </div>
                {grade.status === "excellent" && <CheckCircle2 className="h-5 w-5" />}
                {grade.status === "needs-improvement" && <AlertCircle className="h-5 w-5" />}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
