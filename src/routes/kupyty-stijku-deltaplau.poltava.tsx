import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/components/RegionPage";
import { getRegion, regionHead } from "@/data/regions";

const region = getRegion("poltava");

export const Route = createFileRoute("/kupyty-stijku-deltaplau/poltava")({
  head: () => regionHead(region),
  component: () => <RegionPage region={region} />,
});
