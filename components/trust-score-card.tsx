"use client"

import { CheckCircle2, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface TrustMetric {
  name: string
  score: number
  category: "plagiarism" | "consistency" | "quality" | "activity"
}

interface TrustScoreCardProps {
  candidateName: string
  trustScore: number
  metrics: TrustMetric[]
  verified: boolean
  skillPoints: number
  commitCount: number
}

export function TrustScoreCard({
  candidateName,
  trustScore,
  metrics,
  verified,
  skillPoints,
  commitCount,
}: TrustScoreCardProps) {
  const getTrustColor = (score: number) => {
    if (score >= 85) return { bg: "bg-accent/20", text: "text-accent", label: "Highly Trusted" }
    if (score >= 70) return { bg: "bg-blue-500/20", text: "text-blue-400", label: "Trusted" }
    if (score >= 50) return { bg: "bg-yellow-500/20", text: "text-yellow-400", label: "Moderate Trust" }
    return { bg: "bg-destructive/20", text: "text-destructive", label: "Verify Required" }
  }

  const trust = getTrustColor(trustScore)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "plagiarism":
        return "bg-red-500/20 text-red-400"
      case "consistency":
        return "bg-blue-500/20 text-blue-400"
      case "quality":
        return "bg-purple-500/20 text-purple-400"
      case "activity":
        return "bg-green-500/20 text-green-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">{candidateName}</CardTitle>
            {verified && <Shield className="h-6 w-6 text-accent" title="Verified developer" />}
          </div>
          <CardDescription>AI-Powered Trust Verification</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Trust Score Display */}
        <div className={`rounded-lg border p-6 ${trust.bg}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Trust Score</p>
              <p className={`text-4xl font-bold ${trust.text}`}>{trustScore}%</p>
              <p className={`text-sm font-medium mt-2 ${trust.text}`}>{trust.label}</p>
            </div>
            <TrendingUp className={`h-12 w-12 ${trust.text} opacity-20`} />
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground mb-1">Skill Points</p>
            <p className="text-2xl font-bold text-accent">{skillPoints}</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground mb-1">Total Commits</p>
            <p className="text-2xl font-bold text-primary">{commitCount}</p>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground text-sm">Trust Metrics</h3>
          <div className="space-y-2">
            {metrics.map((metric) => (
              <div key={metric.name} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{metric.name}</span>
                  <span className="font-mono font-semibold text-foreground">{metric.score}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full transition-all ${getCategoryColor(metric.category).split(" ")[0]}`}
                    style={{ width: `${metric.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Status */}
        <div className="rounded-lg border border-accent/50 bg-accent/5 p-3 flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-foreground">Authenticity Verified</p>
            <p className="text-muted-foreground text-xs mt-1">
              All submissions are verified through real GitHub commits
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
