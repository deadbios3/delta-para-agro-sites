import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { getProduct } from "@/data/products";

const title = "Стійка глибокорихлювача Параплау для плугів ПЛН — 7 800 ₴";
const description =
  "Стійка Параплау ДискАгро: корпус стійка + лемех 10 мм + долото 16 мм, борована сталь, наплавка «Зірмайт» (+30% ресурсу). Болтове кріплення на ПЛН.";

export const Route = createFileRoute("/paraplau")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: () => (
    <ProductPage product={getProduct("paraplau")!} other={getProduct("deltaplau")!} />
  ),
});