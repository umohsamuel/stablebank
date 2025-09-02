import { Search } from "lucide-react";
import Image from "next/image";

export default function USend() {
  return (
    <div className="flex w-full max-w-[678px] flex-col gap-5">
      <h1 className="text-2xl font-semibold">Send Token</h1>

      <div className="flex items-center gap-2 rounded-[20px] bg-[#0E121C] px-3.5 py-4 text-sm font-semibold text-white/60">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search Networks"
          className="hide-autofill h-full w-full border-0 bg-inherit ring-0 outline-0"
        />
      </div>

      <div className="space-y-5">
        <div>
          <h2 className="mb-1.5 text-base font-medium">Top Users</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {topUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-1.5 text-base font-medium">Top Sender</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {topSenders.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const UserCard = ({
  user,
}: {
  user: {
    id: number;
    username: string;
    avatar: string;
    bgColor: string;
  };
}) => (
  <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
    <div className="relative aspect-square overflow-hidden rounded-[9px]">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${user.bgColor} opacity-80`}
      />

      <Image
        src={user.avatar}
        alt={`${user.username} avatar`}
        width={103}
        height={94}
        className="h-full max-h-[94px] w-full max-w-[103px] object-cover mix-blend-overlay transition-all duration-300 group-hover:mix-blend-normal"
      />

      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>

    <p className="mt-1 text-sm font-normal text-white/60 transition-colors group-hover:text-white">
      {user.username}
    </p>
  </div>
);

const topUsers = [
  {
    id: 1,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-red-600 to-gray-800",
  },
  {
    id: 3,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-green-400 to-yellow-500",
  },
  {
    id: 4,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-red-700 to-red-900",
  },
  {
    id: 5,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-blue-400 to-blue-600",
  },
  {
    id: 6,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616c6b4f20e?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-gray-200 to-blue-400",
  },
];

const topSenders = [
  {
    id: 1,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-gray-700 to-gray-900",
  },
  {
    id: 2,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-gray-800 to-black",
  },
  {
    id: 3,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-gray-500 to-gray-700",
  },
  {
    id: 5,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616c6b4f20e?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-gray-200 to-blue-400",
  },
  {
    id: 6,
    username: "fony.bank",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=face",
    bgColor: "from-purple-600 to-gray-800",
  },
];
