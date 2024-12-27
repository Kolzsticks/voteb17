"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", turnout: 65 },
  { month: "Feb", turnout: 72 },
  { month: "Mar", turnout: 85 },
  { month: "Apr", turnout: 78 },
  { month: "May", turnout: 90 },
  { month: "Jun", turnout: 82 },
];

export function VoterTurnoutChart() {
  return (
    <Card className="col-span-4 animate-slide-in">
      <CardHeader>
        <CardTitle>Voter Turnout Trends</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="turnout" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}