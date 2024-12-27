"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ChartSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-[200px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[300px] w-full" />
      </CardContent>
    </Card>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <Skeleton className="h-5 w-[120px]" />
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-7 w-[100px] mb-1" />
            <Skeleton className="h-4 w-[140px]" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-10 w-[120px]" />
      </div>
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[150px]" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}