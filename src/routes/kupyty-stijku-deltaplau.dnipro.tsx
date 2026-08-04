import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/components/RegionPage";
import { getRegion, regionHead } from "@/data/regions";

const region = getRegion("dnipro");

export const Route = createFileRoute("/kupyty-stijku-deltaplau/dnipro")({
  head: () => regionHead(region),
  component: () => <RegionPage region={region} />,
});
