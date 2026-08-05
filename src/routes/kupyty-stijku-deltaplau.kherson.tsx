import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/components/RegionPage";
import { getRegion, regionHead } from "@/data/regions";

const region = getRegion("kherson");

export const Route = createFileRoute("/kupyty-stijku-deltaplau/kherson")({
  head: () => regionHead(region),
  component: () => <RegionPage region={region} />,
});
