import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const voters = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    registrationDate: "2024-01-15",
    district: "District A",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Active",
    registrationDate: "2024-01-16",
    district: "District B",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "Inactive",
    registrationDate: "2024-01-17",
    district: "District C",
  },
];

export default function VotersPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h1 className="text-3xl font-bold">Voters Management</h1>
        <Button>Add New Voter</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Voter Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Input placeholder="Search voters..." className="flex-1" />
            <div className="flex gap-2">
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Export</Button>
            </div>
          </div>
          
          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden lg:table-cell">District</TableHead>
                    <TableHead className="hidden sm:table-cell">Registration Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {voters.map((voter) => (
                    <TableRow key={voter.id} className="hover:bg-muted/50 cursor-pointer">
                      <TableCell className="font-medium">{voter.name}</TableCell>
                      <TableCell className="hidden md:table-cell">{voter.email}</TableCell>
                      <TableCell>
                        <Badge variant={voter.status === "Active" ? "default" : "secondary"}>
                          {voter.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">{voter.district}</TableCell>
                      <TableCell className="hidden sm:table-cell">{voter.registrationDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}