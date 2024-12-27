import { ChartSkeleton, StatsSkeleton } from "@/components/ui/loading-skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <StatsSkeleton />
      
      <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6">
        <div className="col-span-4">
          <ChartSkeleton />
        </div>
        <div className="col-span-4 lg:col-span-2">
          <ChartSkeleton />
        </div>
      </div>
    </div>
  );
}