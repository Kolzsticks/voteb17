import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Central Community Center",
    address: "123 Main St, City, State",
    hours: "7:00 AM - 8:00 PM",
    phone: "(555) 123-4567",
    accessibility: true,
    capacity: 500,
  },
  {
    id: 2,
    name: "North District Library",
    address: "456 Park Ave, City, State",
    hours: "7:00 AM - 8:00 PM",
    phone: "(555) 234-5678",
    accessibility: true,
    capacity: 300,
  },
  {
    id: 3,
    name: "South High School",
    address: "789 School Rd, City, State",
    hours: "7:00 AM - 8:00 PM",
    phone: "(555) 345-6789",
    accessibility: true,
    capacity: 800,
  },
];

export default function LocationsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold">Polling Locations</h1>
        <Button>Add Location</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <Card key={location.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {location.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {location.address}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {location.hours}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {location.phone}
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Capacity:</span>
                  <span>{location.capacity} voters</span>
                </div>
                <Button className="w-full">View on Map</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}