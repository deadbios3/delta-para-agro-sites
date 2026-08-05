import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/components/RegionPage";
import { getRegion, regionHead } from "@/data/regions";

const region = getRegion("zaporizhzhia");

export const Route = createFileRoute("/kupyty-stijku-deltaplau/zaporizhzhia")({
  head: () => regionHead(region),
  component: () => <RegionPage region={region} />,
});
