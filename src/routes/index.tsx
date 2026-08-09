const gaScript = document.createElement("script");
gaScript.async = true;
gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
document.head.appendChild(gaScript);

const gaInit = document.createElement("script");
gaInit.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-01WSQJC0Q3');
`;
document.head.appendChild(gaInit);
import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE, PHONE_HREF, products } from "@/data/products";
import { CallToAction } from "@/components/SiteChrome";

const title = "Стійки глибокорихлювача Дельтаплау і Параплау — ДискАгро";
const description =
  "Чизельні стійки Дельтаплау (7 000 ₴) та Параплау (7 800 ₴) для плугів ПЛН: сталь 25 мм, борована сталь, наплавка. Виробник, опт і роздріб, Одеса.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const rows = [
  { label: "Глибина обробітку", d: "до 40 см", p: "глибоке розпушування без обороту пласта" },
  { label: "Товщина стійки", d: "25 мм (09Г2С)", p: "25 мм листова сталь" },
  { label: "Робочі органи", d: "долото 16 мм", p: "лемех 10 мм + долото 16 мм" },
  { label: "Наплавка", d: "«Сормайт»", p: "«Зірмайт», ресурс +30%" },
  { label: "Ціна", d: "7 000 ₴", p: "7 800 ₴" },
];

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src="/images/field.jpg"
          alt="Глибокорозпушувач ДискАгро у роботі в полі"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="surface-hero relative mx-auto max-w-6xl px-5 py-28 sm:py-36">
          <p className="font-display text-xs tracking-[0.35em] text-primary">
            Виробник • Одеса • Опт і роздріб
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">
            Глибоке рихлення <span className="text-ember">зараз для вас</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Чизельні стійки Дельтаплау та Параплау для плугів ПЛН. Сталь 25 мм, гартовані долота,
            наплавка твердим сплавом. Заводська технологія, український метал.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/deltaplau"
              className="btn-ember rounded-sm px-7 py-3 font-display text-sm tracking-widest"
            >
              Дельтаплау — 7 000 ₴
            </Link>
            <Link
              to="/paraplau"
              className="rounded-sm border border-border bg-background/60 px-7 py-3 font-display text-sm tracking-widest transition-colors hover:bg-secondary"
            >
              Параплау — 7 800 ₴
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-4">
          {[
            ["40 см", "глибина розпушування"],
            ["25 мм", "товщина стійки"],
            ["+30%", "ресурс завдяки наплавці"],
            ["ПЛН", "3-35 / 4-35 / 5-35 / 8-40"],
          ].map(([k, v]) => (
            <div key={v} className="bg-background px-6 py-8 text-center">
              <p className="font-display text-3xl text-ember">{k}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-2xl sm:text-3xl">Обидві моделі</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={p.slug === "deltaplau" ? "/deltaplau" : "/paraplau"}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                <p className="mt-5 font-display text-2xl text-ember">
                  {p.price.toLocaleString("uk-UA")} ₴
                </p>
                <span className="mt-4 inline-block font-display text-xs tracking-widest text-primary">
                  Детальніше →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="compare" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-2xl sm:text-3xl">Дельтаплау чи Параплау?</h2>
          <div className="mt-10 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-secondary font-display uppercase tracking-widest">
                <tr>
                  <th className="p-4"> </th>
                  <th className="p-4">Дельтаплау</th>
                  <th className="p-4">Параплау</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-border bg-card">
                    <td className="p-4 text-xs uppercase tracking-widest text-muted-foreground">
                      {r.label}
                    </td>
                    <td className="p-4">{r.d}</td>
                    <td className="p-4">{r.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-border">
          <img src="/images/pair.jpg" alt="Стійки Дельтаплау та Параплау поруч" className="w-full" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl">Зроблено для реального поля</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Стійки вирізані з полоси товщиною 25 мм, вага близько 45 кг. Виготовлені з українського
            металу за заводською технологією. Знімне долото дозволяє швидко відновити робочий орган,
            а болтове кріплення — встановити стійку на глибокорозпушувач або на звичайний одеський
            плуг.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {[
              "Термічна обробка та гартування робочих елементів",
              "Наплавка твердим сплавом для максимальної зносостійкості",
              "Виготовлення під замовлення для нестандартних рам",
              "Повернення товару протягом 14 днів за домовленістю",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-primary">●</span>
                {t}
              </li>
            ))}
          </ul>
          <a
            href={PHONE_HREF}
            className="mt-8 inline-block rounded-sm border border-border px-7 py-3 font-display text-sm tracking-widest hover:bg-secondary"
          >
            {PHONE}
          </a>
        </div>
      </section>

      <CallToAction title="Потрібна консультація по підбору?" />
    </main>
  );
}
