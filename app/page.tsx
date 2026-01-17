"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code2, Users, Shield, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-accent" />
            <span className="font-bold text-lg text-foreground">Skill-Sandbox</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-foreground hover:text-accent">
                Dashboard
              </Button>
            </Link>
            <Link href="/recruiter">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Recruiter Portal</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 space-y-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                Proof-of-Work Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Your Code Is Your <span className="text-accent">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Replace static certificates with live, commit-based portfolios. Every lesson requires real code changes,
              every commit proves your skills.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/recruiter">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-muted text-base h-12 px-8 bg-transparent"
              >
                Verify Candidates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">For Developers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Build your portfolio through real projects and verified commits
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border bg-card hover:border-accent/50 transition-colors">
                <CardHeader>
                  <Code2 className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Commit-Based Learning</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Every lesson milestone requires a real code commit. Your progress is backed by GitHub history.
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:border-accent/50 transition-colors">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Skill Points</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Earn skill points for completed milestones. Track your growth across logic, quality, and speed.
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:border-accent/50 transition-colors">
                <CardHeader>
                  <Shield className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Public Portfolio</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Share your verified, recruit-ready portfolio. No fake credentials, only real proof.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Section */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">For Recruiters</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Verify candidate skills with AI-powered trust scoring
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <Shield className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Verified Credentials</CardTitle>
                  <CardDescription>Every commit is verified through GitHub</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  No resume inflation. Every skill point earned through real project completion and code analysis.
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <Users className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Trust Scoring</CardTitle>
                  <CardDescription>AI-powered authenticity verification</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Plagiarism detection, consistency analysis, and quality metrics give you confidence in candidates.
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/recruiter">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8">
                  Open Recruiter Portal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-accent" />
                <span className="font-semibold text-foreground">Skill-Sandbox</span>
              </div>
              <p className="text-sm text-muted-foreground">Proof-of-work portfolios for developers.</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Skill-Sandbox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
