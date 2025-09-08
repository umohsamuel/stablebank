"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartLine, CornerRightDown, LockKeyhole } from "lucide-react";

export default function UInvest() {
  const [currentTab, setCurrentTab] = useState("stake-earn");

  return (
    <div className="flex w-full max-w-[640px] flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#E9F2A3]">Earn</h1>
        <p className="text-brand-white text-sm font-normal">
          Grow your wealth through staking, automated investing, and synthetic
          assets.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Tabs */}
        <div className="grid grid-cols-3 overflow-hidden rounded-[10px] border-[0.3px] border-solid border-white/60">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`flex transform cursor-pointer items-center justify-center gap-1 p-3.5 text-[22px] font-medium transition duration-200 ease-linear ${
                tab.key === currentTab ? "bg-brand-purple" : "bg-transparent"
              }`}
              onClick={() => setCurrentTab(tab.key)}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="transition duration-200 ease-linear transform-content">
          {tabs.map((tab) => {
            if (tab.key === currentTab) {
              const Component = tab.component;
              return <Component key={tab.key} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

const StakeEarnTab = () => {
  const [selectedLock, setSelectedLock] = useState(365);
  const [amount, setAmount] = useState<number>(12);
  const lockOptions = [
    { days: 30, min: 100, apy: 8.5 },
    { days: 90, min: 250, apy: 12.3 },
    { days: 180, min: 500, apy: 16.8 },
    { days: 365, min: 500, apy: 16.8 },
  ];

  const selected = lockOptions.find((opt) => opt.days === selectedLock)!;

  const estimatedRewards = ((amount * selected.apy) / 100).toFixed(2);
  const totalReturn = (amount + parseFloat(estimatedRewards)).toFixed(2);
  return (
    <div>
      {/* Stake & Earn header */}
      <div className="mb-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
        <h2 className="text-lg font-semibold">Stake & Earn</h2>
        <p className="text-sm text-gray-200">
          Lock your tokens and earn rewards with competitive APY rates
        </p>
      </div>

      {/* Lock Period */}
      <h3 className="mb-2 text-lg font-semibold text-yellow-300">
        Choose Lock Period
      </h3>
      <p className="mb-4 text-xs text-gray-400">
        Cards Will Pull Funds in priority order: Ethereum first, then BNB, the
        USDC
      </p>

      <div className="mb-6 space-y-3">
        {lockOptions.map((opt) => (
          <Card
            key={opt.days}
            className={`cursor-pointer rounded-xl border bg-[#0f0f0f] transition ${
              selectedLock === opt.days
                ? "border border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => setSelectedLock(opt.days)}
          >
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-base font-medium">{opt.days} Days</p>
                <p className="text-xs text-gray-400">Min: ${opt.min}</p>
              </div>
              <p className="text-lg font-semibold text-green-500">
                {opt.apy}%
                <span className="block text-xs font-normal text-gray-400">
                  APY
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stake Amount */}
      <h3 className="mb-2 text-lg font-semibold text-yellow-300">
        Stake Amount
      </h3>
      <p className="mb-2 text-xs text-gray-400">Amount to stake</p>
      <div className="mb-6 flex items-center rounded-xl bg-[#0f0f0f] px-4 py-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          className="flex-1 bg-transparent text-lg text-white outline-none"
        />
        <span className="text-sm text-gray-400">USDC</span>
      </div>

      {/* Reward Projection */}
      <Card className="mb-6 rounded-xl bg-[#0f0f0f]">
        <CardContent className="p-4">
          <h3 className="mb-3 font-semibold text-gray-300">
            Reward Projection
          </h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-gray-400">Estimated Rewards:</span>
              <span className="text-white">${estimatedRewards}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400">Total Return:</span>
              <span className="text-white">${totalReturn}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400">Lock Period:</span>
              <span className="text-white">{selected.days} days</span>
            </p>
          </div>
        </CardContent>
      </Card>

      <Button className="text-brand-white bg-brand-purple flex h-12 w-full cursor-pointer items-center justify-center rounded-[10px] px-8 text-[22px] font-semibold">
        Stake Now
      </Button>
    </div>
  );
};

const AimPlansTab = () => {
  return <div>AIM Plans Content</div>;
};

const SyntheticStocksTab = () => {
  return <div>Synthetic Stocks Content</div>;
};

const tabs = [
  {
    key: "stake-earn",
    label: "Stake & Earn",
    icon: LockKeyhole,
    component: StakeEarnTab,
  },
  {
    key: "aim-plans",
    label: "AIM Plans",
    icon: CornerRightDown,
    component: AimPlansTab,
  },
  {
    key: "synthetic-stocks",
    label: "Synthetic Stocks",
    icon: ChartLine,
    component: SyntheticStocksTab,
  },
];
