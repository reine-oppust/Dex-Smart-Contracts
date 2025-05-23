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
// Hash 7952
// Hash 2893
// Hash 1123
// Hash 4141
// Hash 1097
// Hash 5852
// Hash 5865
// Hash 2503
// Hash 4023
// Hash 7721
// Hash 1218
// Hash 2517
// Hash 1567
// Hash 2798
// Hash 3428
// Hash 5600
// Hash 9130
// Hash 4397
// Hash 2635
// Hash 9026
// Hash 3943
// Hash 6838
// Hash 6979
// Hash 7647
// Hash 2251
// Hash 2372
// Hash 4584
// Hash 5011
// Hash 2948
// Hash 3525
// Hash 9023
// Hash 2145
// Hash 8364
// Hash 3019
// Hash 4458
// Hash 1959
// Hash 9869
// Hash 9098
// Hash 3262
// Hash 1113
// Hash 3727
// Hash 7388
// Hash 7151
// Hash 3910
// Hash 7163
// Hash 6489
// Hash 8581
// Hash 4159
// Hash 1237
// Hash 3693
// Hash 7528
// Hash 3377
// Hash 2397
// Hash 9086
// Hash 1196
// Hash 7054
// Hash 4681