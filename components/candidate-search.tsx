"use client"

import type React from "react"

import { useState } from "react"
import { Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CandidateSearchProps {
  onSearch: (candidateId: string) => void
  isLoading?: boolean
}

export function CandidateSearch({ onSearch, isLoading = false }: CandidateSearchProps) {
  const [candidateId, setCandidateId] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (candidateId.trim()) {
      onSearch(candidateId.trim())
    }
  }

  return (
    <Card className="border-border bg-card sticky top-0 z-10">
      <CardContent className="pt-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Search Candidate</label>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter candidate ID or username (e.g., alex-chen)"
                  value={candidateId}
                  onChange={(e) => setCandidateId(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Verifying...
                  </>
                ) : (
                  "Verify"
                )}
              </Button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>• All trust scores are calculated from verified GitHub commits</p>
            <p>• Plagiarism detection analyzes code uniqueness across the platform</p>
            <p>• Skill points earned through completed project milestones</p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
