import { VoterStats } from "@/components/VoterStats";
import { VoterTurnoutChart } from "@/components/charts/VoterTurnoutChart";
import { ElectionStatusChart } from "@/components/charts/ElectionStatusChart";
import { UpcomingElections } from "@/components/UpcomingElections";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <VoterStats />
      
      <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6">
        <VoterTurnoutChart />
        <ElectionStatusChart />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Upcoming Elections</h2>
        <UpcomingElections />
      </div>
    </div>
  );
}