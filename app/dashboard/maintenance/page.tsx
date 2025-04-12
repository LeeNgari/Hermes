import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, ArrowUpDown, MoreHorizontal, FileEdit, Trash2, Car } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for maintenance records
const maintenanceRecords = [
  {
    id: "MAINT001",
    vehicleId: "VEH001",
    vehicleName: "Toyota Camry",
    type: "Oil Change",
    date: "2024-02-15",
    status: "Completed",
    cost: 75.99,
    technician: "John Smith",
    notes: "Regular maintenance, replaced oil filter",
  },
  {
    id: "MAINT002",
    vehicleId: "VEH003",
    vehicleName: "Ford F-150",
    type: "Tire Rotation",
    date: "2024-02-10",
    status: "Completed",
    cost: 45.0,
    technician: "Mike Johnson",
    notes: "Rotated all tires, checked pressure",
  },
  {
    id: "MAINT003",
    vehicleId: "VEH002",
    vehicleName: "Honda Civic",
    type: "Brake Service",
    date: "2024-02-20",
    status: "In Progress",
    cost: 220.5,
    technician: "Sarah Williams",
    notes: "Replacing front brake pads and rotors",
  },
  {
    id: "MAINT004",
    vehicleId: "VEH004",
    vehicleName: "Chevrolet Malibu",
    type: "Air Filter",
    date: "2024-02-05",
    status: "Completed",
    cost: 35.25,
    technician: "John Smith",
    notes: "Replaced cabin and engine air filters",
  },
  {
    id: "MAINT005",
    vehicleId: "VEH006",
    vehicleName: "Hyundai Sonata",
    type: "Transmission Service",
    date: "2024-02-25",
    status: "Scheduled",
    cost: 189.99,
    technician: "Mike Johnson",
    notes: "Scheduled for transmission fluid change",
  },
  {
    id: "MAINT006",
    vehicleId: "VEH005",
    vehicleName: "Nissan Altima",
    type: "Battery Replacement",
    date: "2024-02-18",
    status: "Completed",
    cost: 129.95,
    technician: "Sarah Williams",
    notes: "Replaced battery, tested charging system",
  },
]

export default function MaintenancePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Maintenance</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Maintenance
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Records</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search maintenance records..." className="pl-8 w-full" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Maintenance Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="oil-change">Oil Change</SelectItem>
                  <SelectItem value="tire-rotation">Tire Rotation</SelectItem>
                  <SelectItem value="brake-service">Brake Service</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Date
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Technician</TableHead>
                  <TableHead className="text-right">Cost</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {maintenanceRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.id}</TableCell>
                    <TableCell>
                      <div className="font-medium">{record.vehicleName}</div>
                      <div className="text-sm text-muted-foreground">{record.vehicleId}</div>
                    </TableCell>
                    <TableCell>{record.type}</TableCell>
                    <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          record.status === "Completed"
                            ? "default"
                            : record.status === "In Progress"
                              ? "outline"
                              : "secondary"
                        }
                      >
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{record.technician}</TableCell>
                    <TableCell className="text-right">${record.cost.toFixed(2)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <FileEdit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Car className="mr-2 h-4 w-4" />
                            View Vehicle
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>6</strong> of <strong>6</strong> records
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {/* Similar content as "all" tab but filtered for completed maintenance */}
          <div className="text-center py-8 text-muted-foreground">
            Filter applied: Showing only completed maintenance records
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          {/* Similar content as "all" tab but filtered for in-progress maintenance */}
          <div className="text-center py-8 text-muted-foreground">
            Filter applied: Showing only in-progress maintenance records
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          {/* Similar content as "all" tab but filtered for scheduled maintenance */}
          <div className="text-center py-8 text-muted-foreground">
            Filter applied: Showing only scheduled maintenance records
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

