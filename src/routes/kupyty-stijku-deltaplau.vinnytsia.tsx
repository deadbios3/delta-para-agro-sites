import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/components/RegionPage";
import { getRegion, regionHead } from "@/data/regions";

const region = getRegion("vinnytsia");

export const Route = createFileRoute("/kupyty-stijku-deltaplau/vinnytsia")({
  head: () => regionHead(region),
  component: () => <RegionPage region={region} />,
});
