import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Filter, MoreHorizontal, FileEdit, Trash2, AlertTriangle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

// Mock data for inventory items
const inventoryItems = [
  {
    id: "INV001",
    name: "Oil Filter",
    category: "Filters",
    quantity: 24,
    minQuantity: 10,
    location: "Shelf A1",
    lastRestocked: "2024-01-15",
    unitPrice: 8.99,
  },
  {
    id: "INV002",
    name: "Brake Pads (Front)",
    category: "Brakes",
    quantity: 8,
    minQuantity: 6,
    location: "Shelf B3",
    lastRestocked: "2024-01-20",
    unitPrice: 45.5,
  },
  {
    id: "INV003",
    name: "Engine Oil (5W-30)",
    category: "Fluids",
    quantity: 32,
    minQuantity: 15,
    location: "Shelf A2",
    lastRestocked: "2024-02-05",
    unitPrice: 24.99,
  },
  {
    id: "INV004",
    name: "Wiper Blades",
    category: "Exterior",
    quantity: 4,
    minQuantity: 8,
    location: "Shelf C1",
    lastRestocked: "2023-12-10",
    unitPrice: 15.75,
  },
  {
    id: "INV005",
    name: "Air Filter",
    category: "Filters",
    quantity: 12,
    minQuantity: 10,
    location: "Shelf A1",
    lastRestocked: "2024-01-25",
    unitPrice: 12.5,
  },
  {
    id: "INV006",
    name: "Transmission Fluid",
    category: "Fluids",
    quantity: 6,
    minQuantity: 8,
    location: "Shelf A3",
    lastRestocked: "2024-01-10",
    unitPrice: 18.99,
  },
]

export default function InventoryPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search inventory..." className="pl-8 w-full" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="filters">Filters</SelectItem>
                <SelectItem value="brakes">Brakes</SelectItem>
                <SelectItem value="fluids">Fluids</SelectItem>
                <SelectItem value="exterior">Exterior</SelectItem>
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
                <TableHead>Item Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead className="text-right">Unit Price</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => {
                const stockPercentage = (item.quantity / item.minQuantity) * 100
                const isLow = item.quantity < item.minQuantity

                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>
                      <div className="font-medium flex items-center gap-2">
                        {item.name}
                        {isLow && <AlertTriangle className="h-4 w-4 text-destructive" />}
                      </div>
                    </TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.quantity} units</span>
                          <span className="text-muted-foreground">Min: {item.minQuantity}</span>
                        </div>
                        <Progress
                          value={stockPercentage > 100 ? 100 : stockPercentage}
                          className={isLow ? "text-destructive" : ""}
                        />
                      </div>
                    </TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{new Date(item.lastRestocked).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">${item.unitPrice.toFixed(2)}</TableCell>
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
                            <Plus className="mr-2 h-4 w-4" />
                            Restock
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing <strong>6</strong> of <strong>6</strong> items
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
      </div>
    </div>
  )
}

