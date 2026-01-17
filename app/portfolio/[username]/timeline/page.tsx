"use client"

import { CommitTimeline } from "@/components/commit-timeline"

const mockCommits = [
  {
    hash: "a1b2c3d4e5f6g7h8",
    message: "Initial project setup with scaffolding",
    author: "Alex Chen",
    timestamp: "Jan 5, 2025",
    filesChanged: 12,
    additions: 450,
    deletions: 0,
    stage: "Hello World",
  },
  {
    hash: "i7j8k9l0m1n2o3p4",
    message: "Add core API endpoints and request handlers",
    author: "Alex Chen",
    timestamp: "Jan 8, 2025",
    filesChanged: 8,
    additions: 320,
    deletions: 45,
    stage: "Basic Features",
  },
  {
    hash: "q5r6s7t8u9v0w1x2",
    message: "Implement database schema and migrations",
    author: "Alex Chen",
    timestamp: "Jan 12, 2025",
    filesChanged: 15,
    additions: 680,
    deletions: 120,
    stage: "Basic Features",
  },
  {
    hash: "y3z4a5b6c7d8e9f0",
    message: "Add authentication and authorization middleware",
    author: "Alex Chen",
    timestamp: "Jan 15, 2025",
    filesChanged: 10,
    additions: 250,
    deletions: 80,
    stage: "Basic Features",
  },
  {
    hash: "g1h2i3j4k5l6m7n8",
    message: "Optimize queries and add caching layer",
    author: "Alex Chen",
    timestamp: "Jan 20, 2025",
    filesChanged: 6,
    additions: 180,
    deletions: 95,
    stage: "Optimization",
  },
  {
    hash: "o9p0q1r2s3t4u5v6",
    message: "Add comprehensive error handling and logging",
    author: "Alex Chen",
    timestamp: "Jan 24, 2025",
    filesChanged: 9,
    additions: 340,
    deletions: 60,
    stage: "Optimization",
  },
  {
    hash: "w7x8y9z0a1b2c3d4",
    message: "Deploy to production with monitoring setup",
    author: "Alex Chen",
    timestamp: "Jan 28, 2025",
    filesChanged: 12,
    additions: 420,
    deletions: 150,
    stage: "Production Ready",
  },
]

export default function TimelinePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <CommitTimeline
          commits={mockCommits}
          projectName="E-Commerce Platform - Full Project Evolution"
          projectDescription="Watch this project evolve from concept to production-ready application"
          startDate="January 5, 2025"
          endDate="January 28, 2025"
        />
      </div>
    </div>
  )
}
