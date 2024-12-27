"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PollingLocations() {
  const locations = [
    {
      id: 1,
      name: "City Hall",
      address: "123 Main Street",
      hours: "7:00 AM - 8:00 PM",
      phone: "(555) 123-4567",
      accessibility: true,
    },
    {
      id: 2,
      name: "Community Center",
      address: "456 Park Avenue",
      hours: "7:00 AM - 8:00 PM",
      phone: "(555) 234-5678",
      accessibility: true,
    },
    {
      id: 3,
      name: "Public Library",
      address: "789 Oak Road",
      hours: "7:00 AM - 8:00 PM",
      phone: "(555) 345-6789",
      accessibility: true,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {locations.map((location) => (
        <Card key={location.id}>
          <CardHeader>
            <CardTitle className="text-lg">{location.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{location.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{location.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{location.phone}</span>
              </div>
              <div className="mt-4">
                <Button className="w-full">Get Directions</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}