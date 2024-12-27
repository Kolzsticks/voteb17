"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UpcomingElections() {
  const elections = [
    {
      id: 1,
      title: "General Election 2024",
      date: "November 5, 2024",
      location: "Nationwide",
      registeredVoters: "245,678",
    },
    {
      id: 2,
      title: "State Primary Election",
      date: "March 15, 2024",
      location: "State-wide",
      registeredVoters: "198,432",
    },
    {
      id: 3,
      title: "Local Municipal Election",
      date: "April 2, 2024",
      location: "City-wide",
      registeredVoters: "156,789",
    },
  ];

  return (
    <div className="grid gap-4">
      {elections.map((election) => (
        <Card key={election.id}>
          <CardHeader>
            <CardTitle>{election.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{election.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{election.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{election.registeredVoters} registered voters</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button>View Details</Button>
              <Button variant="outline">Download Voter Guide</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}