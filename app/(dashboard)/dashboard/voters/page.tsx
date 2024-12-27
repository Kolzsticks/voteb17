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

const voters = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    registrationDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Active",
    registrationDate: "2024-01-16",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "Inactive",
    registrationDate: "2024-01-17",
  },
];

export default function VotersPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Voters Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Input placeholder="Search voters..." className="flex-1" />
            <Button>Add Voter</Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Registration Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {voters.map((voter) => (
                  <TableRow key={voter.id}>
                    <TableCell>{voter.name}</TableCell>
                    <TableCell>{voter.email}</TableCell>
                    <TableCell>{voter.status}</TableCell>
                    <TableCell>{voter.registrationDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}