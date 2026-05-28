import { StatusBar } from "expo-status-bar";
import {
  ListingCard,
  getListingCardVariant,
  useFeaturedListing,
} from "@workspace/shared";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { cycleListing, listing, listingCount } = useFeaturedListing();
  const variant = getListingCardVariant("listing-card-highlight");

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-950">
        <StatusBar style="light" />
        <View className="flex-1 justify-center gap-8 px-5 py-8">
          <View className="gap-3">
            <Text className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
              Expo + Nativewind
            </Text>
            <Text className="text-4xl font-bold leading-tight text-white">
              The same listing hook and card API power mobile as well.
            </Text>
            <Text className="max-w-xl text-base leading-7 text-slate-300">
              Tap the card to cycle through the shared fixtures and confirm the
              shared package is wired into Expo.
            </Text>
          </View>
          <ListingCard
            actionLabel={`Show another listing (${listingCount} total)`}
            listing={listing}
            onPress={cycleListing}
            variant={variant}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
