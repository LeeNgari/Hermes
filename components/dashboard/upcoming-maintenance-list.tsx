import { Badge } from "@/components/ui/badge"
import { Car, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for upcoming maintenance
const upcomingMaintenance = [
  {
    id: "MAINT007",
    vehicleId: "VEH002",
    vehicleName: "Honda Civic",
    type: "Oil Change",
    date: "2024-03-05",
    priority: "Medium",
  },
  {
    id: "MAINT008",
    vehicleId: "VEH001",
    vehicleName: "Toyota Camry",
    type: "Tire Rotation",
    date: "2024-03-08",
    priority: "Low",
  },
  {
    id: "MAINT009",
    vehicleId: "VEH004",
    vehicleName: "Chevrolet Malibu",
    type: "Brake Inspection",
    date: "2024-03-10",
    priority: "High",
  },
  {
    id: "MAINT010",
    vehicleId: "VEH003",
    vehicleName: "Ford F-150",
    type: "Transmission Service",
    date: "2024-03-12",
    priority: "Medium",
  },
]

export function UpcomingMaintenanceList() {
  return (
    <div className="space-y-4">
      {upcomingMaintenance.map((item) => (
        <div key={item.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
          <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
            <Car className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{item.type}</p>
              <Badge
                variant={
                  item.priority === "High" ? "destructive" : item.priority === "Medium" ? "outline" : "secondary"
                }
              >
                {item.priority}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{item.vehicleName}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              {new Date(item.date).toLocaleDateString()}
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        View All Scheduled Maintenance
      </Button>
    </div>
  )
}

