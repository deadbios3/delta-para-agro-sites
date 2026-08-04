import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { getProduct } from "@/data/products";

const title = "Стійка глибокорихлювача Дельтаплау 80 см — 7 600 ₴ | ДискАгро";
const description =
  "Стійка Дельтаплау для плугів ПЛН-3-35...8-40: глибина до 40 см, сталь 09Г2С 25 мм, долото 16 мм, наплавка «Сормайт». Виробник, опт і роздріб.";

export const Route = createFileRoute("/deltaplau")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: () => (
    <ProductPage product={getProduct("deltaplau")!} other={getProduct("paraplau")!} />
  ),
});