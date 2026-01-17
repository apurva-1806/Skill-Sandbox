"use client"

import { CourseRoadmap } from "@/components/course-roadmap"
import { SyncStatus } from "@/components/sync-status"
import { CodeQualityReport } from "@/components/code-quality-report"

// Mock data
const mockMilestones = [
  {
    id: "1",
    title: "Hello World",
    description: "Create your first JavaScript function",
    status: "completed" as const,
    skillPoints: 10,
    difficulty: "beginner" as const,
    commitHash: "a1b2c3d",
  },
  {
    id: "2",
    title: "Array Methods",
    description: "Master map, filter, reduce patterns",
    status: "completed" as const,
    skillPoints: 25,
    difficulty: "beginner" as const,
    commitHash: "e4f5g6h",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Build async/await fetch handlers",
    status: "in-progress" as const,
    skillPoints: 40,
    difficulty: "intermediate" as const,
    commitHash: "i7j8k9l",
  },
  {
    id: "4",
    title: "Database Optimization",
    description: "Query optimization and indexing strategies",
    status: "locked" as const,
    skillPoints: 60,
    difficulty: "advanced" as const,
  },
]

const mockMetrics = [
  { category: "Logic Accuracy", score: 92, maxScore: 100 },
  { category: "Code Cleanliness", score: 85, maxScore: 100 },
  { category: "Speed", score: 78, maxScore: 100 },
  { category: "Edge Cases", score: 88, maxScore: 100 },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Your Sandbox</h1>
          <p className="text-muted-foreground">Build your proof-of-work portfolio through committed code.</p>
        </div>

        {/* Sync Status */}
        <SyncStatus
          status="synced"
          lastSyncTime="2 minutes ago"
          repoUrl="github.com/yourname/skill-sandbox"
          branchName="main"
          uncommittedChanges={0}
        />

        {/* Course Roadmap */}
        <CourseRoadmap courseName="JavaScript Mastery" milestones={mockMilestones} progress={50} />

        {/* Quality Report */}
        <CodeQualityReport
          projectName="Current Milestone - API Integration"
          metrics={mockMetrics}
          overallScore={85.75}
          timestamp={new Date().toLocaleDateString()}
        />
      </div>
    </div>
  )
}
