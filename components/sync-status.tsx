"use client"

import { Activity, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SyncStatusProps {
  status: "synced" | "syncing" | "error" | "pending"
  lastSyncTime?: string
  repoUrl?: string
  branchName?: string
  uncommittedChanges?: number
}

export function SyncStatus({ status, lastSyncTime, repoUrl, branchName, uncommittedChanges }: SyncStatusProps) {
  const getStatusInfo = (status: string) => {
    switch (status) {
      case "synced":
        return {
          icon: <CheckCircle2 className="h-5 w-5 text-accent" />,
          title: "Repository Synced",
          description: "Your local commits are verified",
          badge: "In Sync",
          badgeColor: "bg-accent/20 text-accent",
        }
      case "syncing":
        return {
          icon: <RefreshCw className="h-5 w-5 text-blue-400 animate-spin" />,
          title: "Syncing Repository",
          description: "Analyzing your recent commits",
          badge: "Syncing...",
          badgeColor: "bg-blue-500/20 text-blue-400",
        }
      case "error":
        return {
          icon: <AlertCircle className="h-5 w-5 text-destructive" />,
          title: "Sync Failed",
          description: "Unable to connect to repository",
          badge: "Error",
          badgeColor: "bg-destructive/20 text-destructive",
        }
      case "pending":
        return {
          icon: <Activity className="h-5 w-5 text-yellow-400" />,
          title: "Pending Verification",
          description: "Waiting for next commit",
          badge: "Pending",
          badgeColor: "bg-yellow-500/20 text-yellow-400",
        }
      default:
        return {
          icon: <Activity className="h-5 w-5 text-muted-foreground" />,
          title: "Unknown Status",
          description: "Unable to determine sync status",
          badge: "Unknown",
          badgeColor: "bg-muted text-muted-foreground",
        }
    }
  }

  const info = getStatusInfo(status)

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {info.icon}
            <div>
              <CardTitle className="text-lg">{info.title}</CardTitle>
              <CardDescription>{info.description}</CardDescription>
            </div>
          </div>
          <Badge className={info.badgeColor}>{info.badge}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-4 md:grid-cols-2">
          {branchName && (
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium">Current Branch</p>
              <p className="text-sm font-mono text-foreground">{branchName}</p>
            </div>
          )}

          {repoUrl && (
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium">Repository</p>
              <p className="text-sm font-mono text-foreground truncate">{repoUrl}</p>
            </div>
          )}

          {lastSyncTime && (
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium">Last Sync</p>
              <p className="text-sm text-foreground">{lastSyncTime}</p>
            </div>
          )}

          {uncommittedChanges !== undefined && (
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium">Uncommitted Changes</p>
              <p className="text-sm text-foreground">{uncommittedChanges} files</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
