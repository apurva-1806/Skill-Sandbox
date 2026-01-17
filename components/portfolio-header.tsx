"use client"

import { Github, Linkedin, Globe, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface PortfolioHeaderProps {
  name: string
  title: string
  bio: string
  skillPoints: number
  trustScore: number
  socialLinks?: {
    github?: string
    linkedin?: string
    website?: string
  }
}

export function PortfolioHeader({ name, title, bio, skillPoints, trustScore, socialLinks }: PortfolioHeaderProps) {
  return (
    <div className="space-y-6">
      <Card className="border-border bg-gradient-to-br from-card to-muted/30">
        <CardContent className="pt-8 pb-8">
          <div className="space-y-4">
            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground">{name}</h1>
              <p className="text-xl text-accent font-medium">{title}</p>
            </div>

            {/* Bio */}
            <p className="text-base text-card-foreground leading-relaxed max-w-2xl">{bio}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="rounded-lg bg-background/50 p-4">
                <p className="text-sm text-muted-foreground mb-1">Skill Points</p>
                <p className="text-2xl font-bold text-accent">{skillPoints}</p>
              </div>
              <div className="rounded-lg bg-background/50 p-4">
                <p className="text-sm text-muted-foreground mb-1">Trust Score</p>
                <p className="text-2xl font-bold text-primary">{trustScore}%</p>
              </div>
              <div className="rounded-lg bg-background/50 p-4">
                <p className="text-sm text-muted-foreground mb-1">Verified</p>
                <Award className="h-6 w-6 text-accent" />
              </div>
            </div>

            {/* Social Links */}
            {socialLinks && (
              <div className="flex items-center gap-4 pt-4">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {socialLinks.website && (
                  <a
                    href={socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
