import { Badge } from "@/components/ui/badge"
import { Wrench, Package, Clock } from "lucide-react"

// Mock data for recent activities
const recentActivities = [
  {
    id: "ACT001",
    type: "maintenance",
    description: "Oil Change completed for Toyota Camry",
    timestamp: "2024-02-15T14:30:00",
    user: "John Smith",
  },
  {
    id: "ACT002",
    type: "inventory",
    description: "Restocked 12 Oil Filters",
    timestamp: "2024-02-15T11:15:00",
    user: "Sarah Williams",
  },
  {
    id: "ACT003",
    type: "maintenance",
    description: "Tire Rotation completed for Ford F-150",
    timestamp: "2024-02-14T16:45:00",
    user: "Mike Johnson",
  },
  {
    id: "ACT004",
    type: "inventory",
    description: "Used 4 Brake Pads for Honda Civic service",
    timestamp: "2024-02-14T10:20:00",
    user: "Sarah Williams",
  },
  {
    id: "ACT005",
    type: "maintenance",
    description: "Started Brake Service for Honda Civic",
    timestamp: "2024-02-13T15:30:00",
    user: "Mike Johnson",
  },
]

export function RecentActivitiesList() {
  // Function to format relative time
  const getRelativeTime = (timestamp: string) => {
    const now = new Date()
    const activityTime = new Date(timestamp)
    const diffInHours = Math.floor((now.getTime() - activityTime.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      return "Just now"
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`
    }
  }

  return (
    <div className="space-y-4">
      {recentActivities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
          <div
            className={`rounded-md flex items-center justify-center aspect-square w-10 ${
              activity.type === "maintenance" ? "bg-blue-100 dark:bg-blue-900" : "bg-amber-100 dark:bg-amber-900"
            }`}
          >
            {activity.type === "maintenance" ? (
              <Wrench className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            ) : (
              <Package className="h-5 w-5 text-amber-600 dark:text-amber-300" />
            )}
          </div>
          <div className="flex-1 space-y-1">
            <p className="font-medium">{activity.description}</p>
            <p className="text-sm text-muted-foreground">By {activity.user}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {getRelativeTime(activity.timestamp)}
            </div>
          </div>
          <Badge variant="outline">{activity.type === "maintenance" ? "Maintenance" : "Inventory"}</Badge>
        </div>
      ))}
    </div>
  )
}

