"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VoterStats } from "@/components/VoterStats";
import { UpcomingElections } from "@/components/UpcomingElections";
import { PollingLocations } from "@/components/PollingLocations";
import { VoterRegistration } from "@/components/VoterRegistration";
import { UserNav } from "@/components/UserNav";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Voters Dashboard</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search voters..."
                className="pl-8 w-[300px]"
              />
            </div>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-8 pt-6">
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
      </main>
    </div>
  );
}