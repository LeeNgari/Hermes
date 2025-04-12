import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Car, Wrench, Package, AlertTriangle, Calendar, TrendingUp, DollarSign } from "lucide-react"
import { VehicleStatusChart } from "@/components/dashboard/vehicle-status-chart"
import { MaintenanceCostChart } from "@/components/dashboard/maintenance-cost-chart"
import { UpcomingMaintenanceList } from "@/components/dashboard/upcoming-maintenance-list"
import { RecentActivitiesList } from "@/components/dashboard/recent-activities-list"
import { InventoryAlertsList } from "@/components/dashboard/inventory-alerts-list"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Maintenance
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Maintenance</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 due this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Alerts</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Items below threshold</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Costs</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,891</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 inline" />
              12% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert variant="destructive" className="border-red-600 bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-300">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Critical Alerts</AlertTitle>
        <AlertDescription>
          3 vehicles have overdue maintenance tasks.{" "}
          <Button variant="link" className="h-auto p-0 text-red-600 dark:text-red-300">
            View details
          </Button>
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Vehicle Status</CardTitle>
                <CardDescription>Current status of all vehicles in the fleet</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <VehicleStatusChart />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Maintenance</CardTitle>
                <CardDescription>Scheduled for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingMaintenanceList />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Inventory Alerts</CardTitle>
                <CardDescription>Items below minimum threshold</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryAlertsList />
              </CardContent>
            </Card>
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest maintenance and inventory activities</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivitiesList />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Costs</CardTitle>
              <CardDescription>Monthly maintenance costs for the past year</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <MaintenanceCostChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Reports</CardTitle>
              <CardDescription>Generate and download reports</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                <li className="flex items-center justify-between border-b pb-2">
                  <div>
                    <h3 className="font-medium">Maintenance Summary</h3>
                    <p className="text-sm text-muted-foreground">Complete maintenance history by vehicle</p>
                  </div>
                  <Button>Generate</Button>
                </li>
                <li className="flex items-center justify-between border-b pb-2">
                  <div>
                    <h3 className="font-medium">Cost Analysis</h3>
                    <p className="text-sm text-muted-foreground">Breakdown of maintenance costs</p>
                  </div>
                  <Button>Generate</Button>
                </li>
                <li className="flex items-center justify-between border-b pb-2">
                  <div>
                    <h3 className="font-medium">Inventory Status</h3>
                    <p className="text-sm text-muted-foreground">Current inventory levels and usage</p>
                  </div>
                  <Button>Generate</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Vehicle Utilization</h3>
                    <p className="text-sm text-muted-foreground">Usage patterns and efficiency metrics</p>
                  </div>
                  <Button>Generate</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

