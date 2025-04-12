"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Car, Plus, CalendarIcon, Clock, User } from "lucide-react"

// Mock data for scheduled maintenance
const scheduledMaintenance = [
  {
    id: "SCH001",
    vehicleId: "VEH002",
    vehicleName: "Honda Civic",
    type: "Oil Change",
    date: "2024-03-05",
    time: "09:00 AM",
    technician: "John Smith",
    notes: "Regular maintenance",
  },
  {
    id: "SCH002",
    vehicleId: "VEH001",
    vehicleName: "Toyota Camry",
    type: "Tire Rotation",
    date: "2024-03-08",
    time: "10:30 AM",
    technician: "Mike Johnson",
    notes: "Check tire pressure",
  },
  {
    id: "SCH003",
    vehicleId: "VEH004",
    vehicleName: "Chevrolet Malibu",
    type: "Brake Inspection",
    date: "2024-03-10",
    time: "02:00 PM",
    technician: "Sarah Williams",
    notes: "Customer reported squeaking",
  },
  {
    id: "SCH004",
    vehicleId: "VEH003",
    vehicleName: "Ford F-150",
    type: "Transmission Service",
    date: "2024-03-12",
    time: "11:00 AM",
    technician: "John Smith",
    notes: "Routine transmission fluid change",
  },
]

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])

  // Filter maintenance tasks for the selected date
  const tasksForSelectedDate = scheduledMaintenance.filter((task) => task.date === selectedDate)

  // Handle date change
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate)
    if (newDate) {
      setSelectedDate(newDate.toISOString().split("T")[0])
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Maintenance Schedule</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Schedule Maintenance
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Schedule Maintenance</DialogTitle>
              <DialogDescription>Create a new maintenance task for a vehicle.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="vehicle">Vehicle</Label>
                <Select>
                  <SelectTrigger id="vehicle">
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veh001">Toyota Camry (VEH001)</SelectItem>
                    <SelectItem value="veh002">Honda Civic (VEH002)</SelectItem>
                    <SelectItem value="veh003">Ford F-150 (VEH003)</SelectItem>
                    <SelectItem value="veh004">Chevrolet Malibu (VEH004)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Maintenance Type</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oil-change">Oil Change</SelectItem>
                    <SelectItem value="tire-rotation">Tire Rotation</SelectItem>
                    <SelectItem value="brake-service">Brake Service</SelectItem>
                    <SelectItem value="transmission">Transmission Service</SelectItem>
                    <SelectItem value="inspection">General Inspection</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="technician">Technician</Label>
                <Select>
                  <SelectTrigger id="technician">
                    <SelectValue placeholder="Assign technician" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="mike">Mike Johnson</SelectItem>
                    <SelectItem value="sarah">Sarah Williams</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Add any additional notes or instructions" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Schedule</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view scheduled maintenance</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={handleDateChange} className="rounded-md border" />
          </CardContent>
        </Card>

        <Card className="md:col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Scheduled Maintenance</CardTitle>
            <CardDescription>
              {selectedDate ? `Tasks for ${new Date(selectedDate).toLocaleDateString()}` : "No date selected"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {tasksForSelectedDate.length > 0 ? (
              <div className="space-y-4">
                {tasksForSelectedDate.map((task) => (
                  <div key={task.id} className="flex items-start gap-4 border rounded-lg p-4">
                    <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                      <Car className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-lg">{task.type}</h3>
                        <Badge>{task.id}</Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {task.vehicleName} ({task.vehicleId})
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{task.time}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{task.technician}</span>
                        </div>
                      </div>
                      {task.notes && <p className="text-sm border-t pt-2 mt-2">{task.notes}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-medium text-lg">No maintenance scheduled</h3>
                <p className="text-muted-foreground">There are no maintenance tasks scheduled for this date.</p>
                <Button className="mt-4" variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Schedule</CardTitle>
          <CardDescription>Next 7 days of scheduled maintenance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-3 text-left font-medium">Date & Time</th>
                  <th className="p-3 text-left font-medium">Vehicle</th>
                  <th className="p-3 text-left font-medium">Service Type</th>
                  <th className="p-3 text-left font-medium">Technician</th>
                  <th className="p-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {scheduledMaintenance.map((task) => (
                  <tr key={task.id} className="border-b">
                    <td className="p-3">
                      <div className="font-medium">{new Date(task.date).toLocaleDateString()}</div>
                      <div className="text-sm text-muted-foreground">{task.time}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-medium">{task.vehicleName}</div>
                      <div className="text-sm text-muted-foreground">{task.vehicleId}</div>
                    </td>
                    <td className="p-3">{task.type}</td>
                    <td className="p-3">{task.technician}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive">
                          Cancel
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

