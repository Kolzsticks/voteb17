import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "Voter Turnout Report",
    description: "Analysis of voter participation rates across districts",
    date: "2024-02-01",
    type: "Analytics",
  },
  {
    id: 2,
    title: "Registration Statistics",
    description: "Monthly voter registration trends and demographics",
    date: "2024-02-01",
    type: "Statistics",
  },
  {
    id: 3,
    title: "Election Results Summary",
    description: "Detailed breakdown of recent election outcomes",
    date: "2024-02-01",
    type: "Results",
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold">Reports</h1>
        <Button>Generate New Report</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                {report.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">{report.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Generated:</span>
                  <span>{report.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Type:</span>
                  <span>{report.type}</span>
                </div>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}