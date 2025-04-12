import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Package, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for inventory alerts
const inventoryAlerts = [
  {
    id: "INV004",
    name: "Wiper Blades",
    quantity: 4,
    minQuantity: 8,
    category: "Exterior",
    severity: "High",
  },
  {
    id: "INV006",
    name: "Transmission Fluid",
    quantity: 6,
    minQuantity: 8,
    category: "Fluids",
    severity: "Medium",
  },
  {
    id: "INV002",
    name: "Brake Pads (Front)",
    quantity: 8,
    minQuantity: 6,
    category: "Brakes",
    severity: "Low",
  },
  {
    id: "INV005",
    name: "Air Filter",
    quantity: 12,
    minQuantity: 10,
    category: "Filters",
    severity: "Low",
  },
]

export function InventoryAlertsList() {
  return (
    <div className="space-y-4">
      {inventoryAlerts.map((item) => (
        <div key={item.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
          <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
            <Package className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{item.name}</p>
              <Badge
                variant={
                  item.severity === "High" ? "destructive" : item.severity === "Medium" ? "outline" : "secondary"
                }
              >
                {item.severity}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{item.category}</p>
            <div className="flex items-center text-sm">
              <AlertTriangle className="mr-1 h-3 w-3 text-destructive" />
              <span className="text-destructive">
                {item.quantity} of {item.minQuantity} minimum
              </span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        View All Inventory
      </Button>
    </div>
  )
}

