import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_HREF } from "@/data/products";
import { regions, REGION_BASE } from "@/data/regions";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="font-display text-lg tracking-widest">
          Диск<span className="text-ember">Агро</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link to="/deltaplau" className="transition-colors hover:text-foreground">
            Дельтаплау
          </Link>
          <Link to="/paraplau" className="transition-colors hover:text-foreground">
            Параплау
          </Link>
          <Link to="/" hash="compare" className="transition-colors hover:text-foreground">
            Порівняння
          </Link>
        </nav>
        <a
          href={PHONE_HREF}
          className="btn-ember rounded-sm px-4 py-2 text-sm font-semibold tracking-wide"
        >
          {PHONE}
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-base tracking-widest">ДискАгро</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Виробництво ґрунтообробної техніки та запчастин. Одеса, Україна.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-display text-xs tracking-widest text-foreground">Продукція</p>
          <Link to="/deltaplau" className="mt-2 block hover:text-foreground">
            Стійка Дельтаплау
          </Link>
          <Link to="/paraplau" className="mt-1 block hover:text-foreground">
            Стійка Параплау
          </Link>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-display text-xs tracking-widest text-foreground">Регіони</p>
          {regions.map((r) => (
            <a
              key={r.slug}
              href={`${REGION_BASE}/${r.slug}`}
              className="mt-1 block hover:text-foreground"
            >
              Стійки {r.cityIn}
            </a>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-display text-xs tracking-widest text-foreground">Контакти</p>
          <a href={PHONE_HREF} className="mt-2 block hover:text-foreground">
            {PHONE}
          </a>
          <p className="mt-1">Опт і роздріб. Відправка по всій Україні.</p>
        </div>
      </div>
      <p className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ДискАгро. Всі права захищені.
      </p>
    </footer>
  );
}

export function CallToAction({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="rounded-lg border border-border bg-card p-10 text-center shadow-[var(--shadow-lift)]">
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Підкажемо, яка стійка підійде під вашу раму, розрахуємо комплект і відправимо в день
          замовлення.
        </p>
        <a
          href={PHONE_HREF}
          className="btn-ember mt-6 inline-block rounded-sm px-8 py-3 font-display text-sm tracking-widest"
        >
          Зателефонувати {PHONE}
        </a>
      </div>
    </section>
  );
}