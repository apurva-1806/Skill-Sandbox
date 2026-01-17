"use client"

import { useState } from "react"
import { CandidateSearch } from "@/components/candidate-search"
import { TrustScoreCard } from "@/components/trust-score-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock candidate data
const mockCandidates: Record<string, any> = {
  "alex-chen": {
    name: "Alex Chen",
    trustScore: 94,
    verified: true,
    skillPoints: 385,
    commitCount: 47,
    metrics: [
      { name: "Code Uniqueness", score: 96, category: "plagiarism" },
      { name: "Commit Consistency", score: 92, category: "consistency" },
      { name: "Code Quality", score: 94, category: "quality" },
      { name: "Activity Level", score: 93, category: "activity" },
    ],
  },
  "jane-smith": {
    name: "Jane Smith",
    trustScore: 87,
    verified: true,
    skillPoints: 310,
    commitCount: 38,
    metrics: [
      { name: "Code Uniqueness", score: 85, category: "plagiarism" },
      { name: "Commit Consistency", score: 88, category: "consistency" },
      { name: "Code Quality", score: 89, category: "quality" },
      { name: "Activity Level", score: 86, category: "activity" },
    ],
  },
  "john-dev": {
    name: "John Developer",
    trustScore: 72,
    verified: true,
    skillPoints: 245,
    commitCount: 29,
    metrics: [
      { name: "Code Uniqueness", score: 75, category: "plagiarism" },
      { name: "Commit Consistency", score: 70, category: "consistency" },
      { name: "Code Quality", score: 72, category: "quality" },
      { name: "Activity Level", score: 68, category: "activity" },
    ],
  },
}

export default function RecruiterPortalPage() {
  const [searchedCandidate, setSearchedCandidate] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (candidateId: string) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSearchedCandidate(candidateId)
    setIsLoading(false)
  }

  const candidate = searchedCandidate ? mockCandidates[searchedCandidate] : null

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Recruiter Portal</h1>
          <p className="text-muted-foreground">Verify developer credentials with AI-powered trust scoring</p>
        </div>

        {/* Search Bar */}
        <CandidateSearch onSearch={handleSearch} isLoading={isLoading} />

        {!candidate ? (
          /* Empty State */
          <Card className="border-border bg-card">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">Start Verification</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Search for a candidate by ID or username to view their verified skill portfolio and trust score.
                </p>
                <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                  <p>
                    Try searching for: <span className="font-mono text-foreground">alex-chen</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Candidate Results */
          <div className="space-y-8">
            <TrustScoreCard
              candidateName={candidate.name}
              trustScore={candidate.trustScore}
              metrics={candidate.metrics}
              verified={candidate.verified}
              skillPoints={candidate.skillPoints}
              commitCount={candidate.commitCount}
            />

            {/* Additional Info */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Recommended Action</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-accent">
                    {candidate.trustScore >= 85 ? "Interview" : candidate.trustScore >= 70 ? "Review" : "Request Info"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-2xl font-bold ${
                      candidate.trustScore >= 85
                        ? "text-accent"
                        : candidate.trustScore >= 70
                          ? "text-blue-400"
                          : "text-yellow-400"
                    }`}
                  >
                    {candidate.trustScore >= 85 ? "Low" : candidate.trustScore >= 70 ? "Medium" : "High"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Skill Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-2xl font-bold ${
                      candidate.skillPoints >= 350
                        ? "text-accent"
                        : candidate.skillPoints >= 250
                          ? "text-blue-400"
                          : "text-yellow-400"
                    }`}
                  >
                    {candidate.skillPoints >= 350 ? "Expert" : candidate.skillPoints >= 250 ? "Intermediate" : "Junior"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* View Full Portfolio */}
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <a
                  href={`/portfolio/${searchedCandidate}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors"
                >
                  View Full Portfolio
                </a>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
