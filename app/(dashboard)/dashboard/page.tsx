import { VoterStats } from "@/components/VoterStats";
import { UpcomingElections } from "@/components/UpcomingElections";
import { PollingLocations } from "@/components/PollingLocations";
import { VoterRegistration } from "@/components/VoterRegistration";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-8">
      <VoterStats />
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Elections</TabsTrigger>
          <TabsTrigger value="locations">Polling Locations</TabsTrigger>
          <TabsTrigger value="registration">Voter Registration</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <UpcomingElections />
        </TabsContent>
        <TabsContent value="locations" className="space-y-4">
          <PollingLocations />
        </TabsContent>
        <TabsContent value="registration" className="space-y-4">
          <VoterRegistration />
        </TabsContent>
      </Tabs>
    </div>
  );
}