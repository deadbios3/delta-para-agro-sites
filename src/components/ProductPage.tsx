import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_HREF, type Product } from "@/data/products";
import { CallToAction } from "./SiteChrome";

export function ProductPage({ product, other }: { product: Product; other: Product }) {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <img
            src={product.image}
            alt={`${product.name} — глибокорихлювач для плугів ПЛН`}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-display text-xs tracking-[0.3em] text-primary">
            Глибокорозпушувач • ДискАгро
          </p>
          <h1 className="mt-3 text-3xl leading-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>
          <div className="mt-7 flex flex-wrap items-end gap-x-6 gap-y-2">
            <span className="font-display text-4xl text-ember">
              {product.price.toLocaleString("uk-UA")} ₴
            </span>
            <span className="text-sm text-muted-foreground">
              {product.wholesale.toLocaleString("uk-UA")} ₴/шт. від 2 шт.
            </span>
          </div>
          <p className="mt-2 text-sm text-accent">● В наявності — опт і роздріб</p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="btn-ember rounded-sm px-7 py-3 font-display text-sm tracking-widest"
            >
              Замовити {PHONE}
            </a>
            <Link
              to={other.slug === "deltaplau" ? "/deltaplau" : "/paraplau"}
              className="rounded-sm border border-border px-7 py-3 font-display text-sm tracking-widest transition-colors hover:bg-secondary"
            >
              {other.name}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl">Технічні характеристики</h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {product.specs.map((s) => (
              <div key={s.label} className="bg-card p-6">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-lg">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl">Що дає ця стійка в полі</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {product.features.map((f) => (
            <li
              key={f}
              className="rounded-lg border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mr-2 font-display text-primary">→</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      <CallToAction title={`Замовити ${product.name}`} />
    </main>
  );
}