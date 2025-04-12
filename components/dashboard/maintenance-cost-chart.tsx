"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Mock data for maintenance costs
const data = [
  { name: "Jan", cost: 4200 },
  { name: "Feb", cost: 4891 },
  { name: "Mar", cost: 3800 },
  { name: "Apr", cost: 4500 },
  { name: "May", cost: 5200 },
  { name: "Jun", cost: 4100 },
  { name: "Jul", cost: 3700 },
  { name: "Aug", cost: 4300 },
  { name: "Sep", cost: 4800 },
  { name: "Oct", cost: 5100 },
  { name: "Nov", cost: 4600 },
  { name: "Dec", cost: 4900 },
]

export function MaintenanceCostChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <p className="text-muted-foreground">Loading chart...</p>
      </div>
    )
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, "Cost"]} />
          <Legend />
          <Bar dataKey="cost" fill="#3b82f6" name="Maintenance Cost" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

