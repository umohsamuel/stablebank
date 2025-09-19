"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function URewards() {
  return (
    <div className="flex w-full max-w-[640px] flex-col gap-10">
      <div>
        <h1 className="text-brand-yellow text-2xl font-semibold">
          Rewards Dashboard
        </h1>
        <p className="text-sm font-normal">
          Track your point, level up and unlock amazing rewards.
        </p>
      </div>

      <div className="bg-brand-purple flex w-full justify-between rounded-[12px]">
        <div className="flex w-[70%] flex-col gap-11 px-5 py-7">
          <div>
            <p className="text-base font-semibold">Gold Member</p>
            <p className="mt-1 text-5xl font-bold">850 Pts</p>
            <p className="text-base font-medium">
              Earn more points and enjoy exclusive benefits!
            </p>
          </div>

          <div className="flex items-center justify-between rounded-[8px] bg-white/25 px-4 py-3">
            <div>
              <p className="text-xl font-bold">Free 50 Points</p>
              <p className="text-base font-medium">
                <span>Time Remaining:</span> <span>10:45:22</span>
              </p>
            </div>
            <div>
              <Button className="text-brand-white bg-brand-purple flex h-11 w-full cursor-pointer items-center justify-center rounded-[4px] px-5 text-base font-semibold">
                Claim
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <Image
            src={"/images/placeholder/reward-dash-img.svg"}
            alt="reward img"
            width={300}
            height={300}
            className="h-full w-full rounded-r-[12px] object-cover object-top-right"
          />
        </div>
      </div>

      <Tabs />
    </div>
  );
}

const tabsArr = [
  { label: "Overview", value: "overview", component: OverviewTab },
  { label: "Earn", value: "earn", component: EarnTab },
  { label: "Redeem", value: "redeem", component: RedeemTab },
  { label: "Tiers", value: "tiers", component: TiersTab },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabsArr[0].value);
  return (
    <div className="flex flex-col gap-12">
      <div className="grid w-full grid-cols-4 rounded-[10px] bg-[#0E121C] px-3.5 py-1.5">
        {tabsArr.map((tab) => (
          <Button
            key={tab.value}
            onClick={() => {
              setActiveTab(tab.value);
            }}
            className={`h-16 transform rounded-[10px] text-[26px] transition-all duration-200 ease-linear ${activeTab === tab.value ? "bg-[#4649D6] px-4 font-semibold" : "bg-transparent font-normal"}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="transform transition-all duration-200 ease-linear">
        {tabsArr.map((tab) => {
          if (tab.value === activeTab) {
            return <tab.component key={tab.value} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

import { Zap, Trophy, Gift, Crown } from "lucide-react";

export const overviewStats = [
  {
    label: "Points Balance",
    value: 2673,
    description: "Available to spend",
    icon: Zap,
    color: "#4649D6",
  },
  {
    label: "Total Earned",
    value: 12450,
    description: "Lifetime Points",
    icon: Trophy,
    color: "#CA8A04",
  },
  {
    label: "Points Redeemed",
    value: 9603,
    description: "Total Spent",
    icon: Gift,
    color: "#319F43",
  },
  {
    label: "Current Tier",
    value: "Gold",
    description: "Member level",
    icon: Crown,
    color: "#EA580C",
  },
];

function OverviewTab() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[29px]">
        {overviewStats.map((stat) => (
          <div
            key={stat.label}
            className={`flex items-center justify-between rounded-[14px] border-[0.2px] border-solid border-white/60 bg-[#0E121C] px-5 py-3`}
            style={{ color: stat.color }}
          >
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-[#E9E9E9]">
                {stat.label}
              </span>
              <span className="text-[28px] font-semibold">{stat.value}</span>
              <span className="text-base font-normal text-[#E9E9E9]">
                {stat.description}
              </span>
            </div>

            <div className="flex aspect-square w-[50px] items-center justify-center rounded-full bg-[#1F2937]">
              <stat.icon size={31} />
            </div>
          </div>
        ))}
      </div>

      <Button className="text-brand-white bg-brand-purple flex h-12 w-full cursor-pointer items-center justify-center rounded-[10px] px-8 text-[22px] font-semibold">
        Redeem Points
      </Button>
    </div>
  );
}

function EarnTab() {
  return <div></div>;
}

function RedeemTab() {
  return <div>RedeemTab</div>;
}

function TiersTab() {
  return <div>TiersTab</div>;
}
