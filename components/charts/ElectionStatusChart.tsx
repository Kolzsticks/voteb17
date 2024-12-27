"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Completed", value: 45 },
  { name: "Upcoming", value: 30 },
  { name: "In Progress", value: 25 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--muted))"];

export function ElectionStatusChart() {
  return (
    <Card className="col-span-4 lg:col-span-2 animate-slide-in [animation-delay:200ms]">
      <CardHeader>
        <CardTitle>Election Status Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}