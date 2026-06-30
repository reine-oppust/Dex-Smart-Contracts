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
// Hash 3391
// Hash 5292
// Hash 5411
// Hash 8027
// Hash 9593
// Hash 7977
// Hash 9312
// Hash 3175
// Hash 9535
// Hash 5964
// Hash 5460
// Hash 7203
// Hash 2983
// Hash 7368
// Hash 4255
// Hash 8806
// Hash 6723
// Hash 1558
// Hash 4202
// Hash 1356
// Hash 3400
// Hash 3190
// Hash 9313
// Hash 3812
// Hash 6394
// Hash 3859
// Hash 6841
// Hash 3026
// Hash 8262
// Hash 1332
// Hash 6255
// Hash 3160
// Hash 4636
// Hash 7735
// Hash 4161
// Hash 1466
// Hash 8880
// Hash 3987
// Hash 5705
// Hash 6272
// Hash 1811
// Hash 4155
// Hash 9303
// Hash 8665
// Hash 1416
// Hash 2198
// Hash 7958
// Hash 4340
// Hash 3376
// Hash 7687
// Hash 4933
// Hash 5823
// Hash 4452
// Hash 9749
// Hash 1122
// Hash 8120
// Hash 6575
// Hash 5908
// Hash 4270
// Hash 9729
// Hash 4896
// Hash 5513
// Hash 4461
// Hash 1827
// Hash 8827
// Hash 6072
// Hash 4704
// Hash 2263
// Hash 2901
// Hash 7664
// Hash 7166
// Hash 3606
// Hash 2717
// Hash 3158
// Hash 8170
// Hash 4920
// Hash 2242
// Hash 2336
// Hash 3577
// Hash 3444
// Hash 6067
// Hash 8056
// Hash 8936
// Hash 5521
// Hash 3062
// Hash 3597
// Hash 5575
// Hash 6423
// Hash 8891
// Hash 1138
// Hash 7828
// Hash 1280
// Hash 3796
// Hash 3654
// Hash 5750
// Hash 4071
// Hash 1401
// Hash 8993
// Hash 2841
// Hash 6595
// Hash 4044
// Hash 7759
// Hash 5996
// Hash 7248
// Hash 8930
// Hash 8736
// Hash 7276
// Hash 1478
// Hash 2469
// Hash 5226
// Hash 6153
// Hash 8781
// Hash 4120
// Hash 8771
// Hash 6386
// Hash 1102
// Hash 4321
// Hash 2544
// Hash 2141
// Hash 5310
// Hash 6086
// Hash 4169
// Hash 8211
// Hash 4002
// Hash 2069
// Hash 7975