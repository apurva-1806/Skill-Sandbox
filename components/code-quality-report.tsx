"use client"

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface CodeQualityMetric {
  category: string
  score: number
  maxScore: number
}

interface CodeQualityReportProps {
  metrics: CodeQualityMetric[]
  overallScore: number
  projectName: string
  timestamp?: string
}

export function CodeQualityReport({ metrics, overallScore, projectName, timestamp }: CodeQualityReportProps) {
  // Prepare data for radar chart
  const radarData = metrics.map((metric) => ({
    category: metric.category,
    score: (metric.score / metric.maxScore) * 100,
    fullMark: 100,
  }))

  const averageScore = (overallScore / 100).toFixed(1)

  return (
    <div className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader className="space-y-1">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="text-2xl font-bold">{projectName}</CardTitle>
              <CardDescription>Code Quality Analysis Report</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-accent">{averageScore}</div>
              <div className="text-sm text-muted-foreground">Overall Score</div>
            </div>
          </div>
          {timestamp && <p className="text-xs text-muted-foreground">Generated: {timestamp}</p>}
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={radarData} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
              <PolarGrid stroke="oklch(0.25 0 0)" />
              <PolarAngleAxis dataKey="category" tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "oklch(0.65 0 0)" }} />
              <Radar
                name="Score"
                dataKey="score"
                stroke="oklch(0.65 0.2 42)"
                fill="oklch(0.65 0.2 42)"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Detailed Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {metrics.map((metric) => {
          const percentage = (metric.score / metric.maxScore) * 100
          const isGood = percentage >= 80
          const isMedium = percentage >= 60

          return (
            <Card key={metric.category} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-card-foreground">{metric.category}</p>
                    <span
                      className={`text-sm font-semibold ${
                        isGood ? "text-accent" : isMedium ? "text-yellow-500" : "text-destructive"
                      }`}
                    >
                      {percentage.toFixed(0)}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full transition-all ${
                        isGood ? "bg-accent" : isMedium ? "bg-yellow-500" : "bg-destructive"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {metric.score} / {metric.maxScore} points
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
