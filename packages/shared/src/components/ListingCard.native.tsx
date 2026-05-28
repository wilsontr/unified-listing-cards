import { Pressable, Text, View } from "react-native";

import type { Listing } from "../listings";

type ListingCardProps = {
  actionLabel: string;
  listing: Listing;
  onPress?: () => void;
};

export function ListingCard({
  actionLabel,
  listing,
  onPress,
}: ListingCardProps) {
  return (
    <Pressable
      className="rounded-[28px] border border-slate-800 bg-slate-900 p-5 active:opacity-90"
      onPress={onPress}
    >
      <View className="gap-5">
        <View className="flex-row items-start justify-between gap-4">
          <View className="flex-1 gap-2">
            <Text className="text-xs font-semibold uppercase tracking-[3px] text-teal-300">
              {listing.badge}
            </Text>
            <Text className="text-3xl font-bold leading-tight text-white">
              {listing.title}
            </Text>
            <Text className="text-base text-slate-400">{listing.location}</Text>
          </View>
          <View className="rounded-full bg-white/10 px-3 py-2">
            <Text className="text-sm font-semibold text-white">
              {listing.price}
            </Text>
          </View>
        </View>
        <Text className="text-base leading-7 text-slate-300">{listing.summary}</Text>
        <View className="flex-row flex-wrap gap-2">
          {listing.amenities.map((amenity) => (
            <View
              key={amenity}
              className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1"
            >
              <Text className="text-sm font-medium text-slate-200">
                {amenity}
              </Text>
            </View>
          ))}
        </View>
        <View className="rounded-full bg-teal-500 px-4 py-3">
          <Text className="text-center text-sm font-semibold text-slate-950">
            {actionLabel}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}