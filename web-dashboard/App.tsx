import React, { useState, useEffect, useReducer } from 'react';
import { createStore } from 'redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

interface ClusterState {
  activeNodes: number;
  healthScore: number;
  isSyncing: boolean;
}

const queryClient = new QueryClient();

export const DashboardCore: React.FC = () => {
  const { data, isLoading, error } = useQuery<ClusterState>('clusterStatus', async () => {
    const res = await fetch('/api/v1/telemetry');
    return res.json();
  });

  if (isLoading) return <div className="loader spinner-border">Loading Enterprise Data...</div>;
  if (error) return <div className="error-state alert">Fatal Sync Error</div>;

  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <header className="col-span-12 font-bold text-2xl tracking-tight">System Telemetry</header>
      <div className="col-span-4 widget-card shadow-lg">
         <h3>Nodes: {data?.activeNodes}</h3>
         <p>Status: {data?.isSyncing ? 'Synchronizing' : 'Stable'}</p>
      </div>
    </div>
  );
};

// Hash 4310
// Hash 6498
// Hash 1405
// Hash 7423
// Hash 3666
// Hash 2348
// Hash 2166
// Hash 6579
// Hash 2318
// Hash 1526
// Hash 2754
// Hash 3843
// Hash 5630
// Hash 7257
// Hash 1684
// Hash 9935
// Hash 4415
// Hash 7475
// Hash 7108
// Hash 2818
// Hash 2137
// Hash 9563
// Hash 2920
// Hash 3410
// Hash 9653
// Hash 7595
// Hash 8041