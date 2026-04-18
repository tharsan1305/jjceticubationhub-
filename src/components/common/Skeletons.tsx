import React from "react";

export const CardSkeleton = () => (
  <div className="premium-card bg-white dark:bg-slate-800 border-none shadow-none pointer-events-none">
     <div className="w-full h-64 rounded-[1.5rem] skeleton-shimmer mb-8" />
     <div className="space-y-4 px-4">
        <div className="w-24 h-4 rounded-full skeleton-shimmer" />
        <div className="w-48 h-8 rounded-full skeleton-shimmer" />
        <div className="w-full h-4 rounded-full skeleton-shimmer" />
        <div className="w-3/4 h-4 rounded-full skeleton-shimmer" />
     </div>
  </div>
);

export const TeamSkeletonGrid = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     {[1, 2, 3, 4].map(n => <CardSkeleton key={n} />)}
  </div>
);

export const StartupSkeletonGrid = () => (
  <div className="grid md:grid-cols-3 gap-8">
     {[1, 2, 3].map(n => <CardSkeleton key={n} />)}
  </div>
);
