import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const elections = [
  {
    id: 1,
    title: "Presidential Primary Election",
    date: "2024-03-05",
    type: "Primary",
    status: "Upcoming",
    location: "Nationwide",
  },
  {
    id: 2,
    title: "State Governor Election",
    date: "2024-04-15",
    type: "State",
    status: "Upcoming",
    location: "State-wide",
  },
  {
    id: 3,
    title: "Local Council Election",
    date: "2024-05-20",
    type: "Local",
    status: "Upcoming",
    location: "District-wide",
  },
];

export default function ElectionsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold">Elections</h1>
        <Button>Add New Election</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {elections.map((election) => (
          <Card key={election.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {election.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{election.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span>{election.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{election.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-600">{election.status}</span>
                </div>
                <Button className="w-full mt-4">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}