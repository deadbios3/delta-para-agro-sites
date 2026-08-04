import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_HREF, products } from "@/data/products";
import { REGION_BASE, type Region } from "@/data/regions";

export function RegionPage({ region: r }: { region: Region }) {
  return (
    <main>
      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <p className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Головна
            </Link>{" "}
            / Регіони / {r.city}
          </p>
          <p className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-primary">
            {r.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl leading-tight sm:text-5xl">{r.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{r.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="btn-ember rounded-sm px-7 py-3 font-display text-sm tracking-widest"
            >
              Зателефонувати {PHONE}
            </a>
            <a
              href="#products"
              className="rounded-sm border border-border px-7 py-3 font-display text-sm tracking-widest transition-colors hover:bg-secondary"
            >
              Дивитись стійки
            </a>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          {r.facts.map((f) => (
            <div key={f.b}>
              <p className="font-display text-base text-ember">{f.b}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>

      <section id="products" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl">{r.productsHeading}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <div key={p.slug} className="rounded-lg border border-border bg-card p-7">
              <h3 className="font-display text-xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
              <p className="mt-5 font-display text-3xl text-ember">
                від {p.price.toLocaleString("uk-UA")} ₴
              </p>
              <Link
                to={p.slug === "deltaplau" ? "/deltaplau" : "/paraplau"}
                className="btn-ember mt-6 inline-block rounded-sm px-6 py-3 font-display text-sm tracking-widest"
              >
                Детальніше про {p.slug === "deltaplau" ? "Дельтаплау" : "Параплау"} →
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{r.note}</p>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl">Технічні характеристики</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { b: "до 40 см", t: "глибина розпушування" },
              { b: "25 мм", t: "товщина стійки" },
              { b: "+30%", t: "ресурс завдяки наплавці" },
              { b: "ПЛН-3-35…8-40", t: "сумісність" },
            ].map((s) => (
              <div key={s.b} className="bg-card p-6">
                <p className="font-display text-lg">{s.b}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl">{r.articleHeading}</h2>
        {r.paragraphs.map((p) => (
          <p key={p.slice(0, 30)} className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {r.checks.map((c) => (
            <li
              key={c}
              className="rounded-lg border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mr-2 font-display text-primary">→</span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl">Дельтаплау чи Параплау?</h2>
          <div className="mt-8 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 font-display">
                <tr>
                  <th className="p-4"></th>
                  <th className="p-4">Дельтаплау</th>
                  <th className="p-4">Параплау</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Глибина обробітку", "до 40 см", "глибоке розпушування без обороту пласта"],
                  ["Товщина стійки", "25 мм (09Г2С)", "25 мм листова сталь"],
                  ["Робочі органи", "долото 16 мм", "лемех 10 мм + долото 16 мм"],
                  ["Наплавка", "«Сормайт»", "«Зірмайт», ресурс +30%"],
                  ["Ціна", "від 7 000 ₴", "від 7 800 ₴"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-border bg-card">
                    <td className="p-4 text-foreground">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-lg border border-border bg-card p-10 text-center shadow-[var(--shadow-lift)]">
          <h2 className="text-2xl sm:text-3xl">{r.ctaHeading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">{r.ctaText}</p>
          <a
            href={PHONE_HREF}
            className="btn-ember mt-6 inline-block rounded-sm px-8 py-3 font-display text-sm tracking-widest"
          >
            Зателефонувати {PHONE}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          {r.links.map((l) => (
            <a
              key={l.slug}
              href={`${REGION_BASE}/${l.slug}`}
              className="rounded-sm border border-border px-4 py-2 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
