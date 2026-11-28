import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Flipbook } from './components/Flipbook';
import {
  comparisonData,
  criticismBook,
  criticismContent,
  essayBook,
  essayContent,
  faqData,
  primarySources,
  ChapterItem
} from './data/literaryData';

const DUST_PARTICLES = Array.from({ length: 24 }, (_, idx) => ({
  id: idx,
  size: ((idx * 17) % 24) / 10 + 1.4,
  left: ((idx * 37) % 94) + 3,
  top: ((idx * 53) % 92) + 4,
  duration: ((idx * 13) % 9) + 9,
  delay: -((idx * 7) % 10)
}));

interface EmbeddedReaderFrameProps {
  sectionTitle: string;
  items: ChapterItem[];
  activeId: string;
  onSelect: (id: string) => void;
  flipbookHref: string;
  flipbookLabel: string;
}

const EmbeddedReaderFrame: React.FC<EmbeddedReaderFrameProps> = ({
  sectionTitle,
  items,
  activeId,
  onSelect,
  flipbookHref,
  flipbookLabel
}) => {
  const frameBodyRef = useRef<HTMLDivElement | null>(null);
  const currentIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId)
  );
  const activeItem = items[currentIndex] || items[0];

  useEffect(() => {
    if (frameBodyRef.current) {
      frameBodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeId]);

  const goPrev = () => {
    if (currentIndex > 0) onSelect(items[currentIndex - 1].id);
  };

  const goNext = () => {
    if (currentIndex < items.length - 1) onSelect(items[currentIndex + 1].id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-8 mt-10 items-stretch">
      {/* Menu Materi Sebelah Kiri */}
      <aside className="border border-[#B99A62]/30 rounded-[4px] bg-[#17130F]/80 p-4 flex flex-col justify-between">
        <div>
          <div className="font-ui text-[0.7rem] tracking-[0.15em] uppercase text-[#B99A62] px-2 pb-3 mb-2 border-b border-[#E8DCC5]/10">
            Pilih Topik {sectionTitle}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5">
            {items.map((item) => {
              const isActive = item.id === activeItem.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelect(item.id)}
                  className={`text-left px-3 py-2.5 min-h-[42px] rounded-[3px] font-ui text-xs flex items-center justify-between gap-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-[#B99A62] text-[#17130F] font-semibold'
                      : 'text-[#B7AA96] hover:text-[#E8DCC5] hover:bg-[#E8DCC5]/5'
                  }`}
                >
                  <span className="flex items-baseline gap-2.5">
                    <span
                      className={`text-[0.7rem] tabular-nums shrink-0 ${
                        isActive ? 'text-[#17130F]/80' : 'text-[#B99A62]'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span>{item.title}</span>
                  </span>
                  <span aria-hidden="true" className="text-xs">
                    {isActive ? '●' : '→'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[#E8DCC5]/10 px-2">
          <a
            href={flipbookHref}
            className="inline-flex items-center gap-2 font-ui text-[0.72rem] tracking-[0.08em] uppercase text-[#D3B47A] hover:text-[#E8DCC5] transition-colors"
          >
            <span>{flipbookLabel}</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </aside>

      {/* Panel Pembaca Kanan (Berfungsi Seperti Iframe Tersemat) */}
      <div
        role="region"
        aria-live="polite"
        aria-label={`Jendela Materi ${sectionTitle}: ${activeItem.title}`}
        className="border border-[#B99A62]/40 rounded-[4px] bg-[#14100C] shadow-[0_20px_50px_rgba(0,0,0,0.45)] flex flex-col h-[520px] sm:h-[540px] overflow-hidden"
      >
        {/* Frame Header Bar */}
        <div className="px-5 py-3 bg-[#1E1813] border-b border-[#B99A62]/25 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-ui text-[0.7rem] tracking-[0.14em] uppercase text-[#B99A62]">
              {sectionTitle}
            </span>
            <span aria-hidden="true" className="text-[#B7AA96]/40">
              /
            </span>
            <span className="font-ui text-xs text-[#E8DCC5] font-medium">
              {activeItem.num}. {activeItem.title}
            </span>
          </div>
          <span className="font-ui text-[0.7rem] text-[#B7AA96] tabular-nums">
            {currentIndex + 1} dari {items.length}
          </span>
        </div>

        {/* Scrollable Inner Frame Content */}
        <div ref={frameBodyRef} className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="max-w-[66ch]">
            <div className="font-ui text-[0.72rem] tracking-[0.14em] uppercase text-[#B99A62] mb-2 tabular-nums">
              Bagian {activeItem.num}
            </div>
            <h3 className="font-display text-[clamp(1.75rem,2.8vw,2.4rem)] font-semibold text-[#E8DCC5] mb-3.5 leading-[1.18]">
              {activeItem.title}
            </h3>
            <p className="text-[1.03rem] text-[#F1E8D8] mb-5 leading-[1.75]">
              {activeItem.lead}
            </p>

            {activeItem.paragraphs?.map((p, idx) => (
              <p key={idx} className="text-[#B7AA96] mb-4 leading-[1.78]">
                {p}
              </p>
            ))}

            {activeItem.items && (
              <ul className="space-y-3 mt-4">
                {activeItem.items.map((sub, idx) => (
                  <li
                    key={idx}
                    className="p-4 bg-[#241D17]/75 border border-[#E8DCC5]/15 rounded-[3px]"
                  >
                    <strong className="block font-display text-xl font-semibold text-[#D3B47A] mb-1">
                      {sub.label}
                    </strong>
                    <p className="text-sm text-[#B7AA96] leading-[1.68]">{sub.desc}</p>
                  </li>
                ))}
              </ul>
            )}

            {activeItem.excerpt && (
              <div className="mt-4 p-6 bg-[linear-gradient(145deg,rgba(232,220,197,0.06),rgba(36,29,23,0.85))] border border-[#B99A62]/35 rounded-[3px]">
                <div className="font-ui text-xs tracking-[0.14em] uppercase text-[#B99A62] mb-2">
                  {activeItem.excerpt.kicker}
                </div>
                <h4 className="font-display text-2xl text-[#E8DCC5] mb-3">
                  {activeItem.excerpt.title}
                </h4>
                <div className="space-y-3 text-[#B7AA96] text-[0.96rem]">
                  {activeItem.excerpt.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {activeItem.sources && activeItem.sources.length > 0 && (
              <div className="mt-7 pt-4 border-t border-[#E8DCC5]/12">
                <div className="font-ui text-[0.68rem] tracking-[0.14em] uppercase text-[#B99A62] mb-2">
                  Sumber Rujukan Valid
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeItem.sources.map((src) => (
                    <a
                      key={src.url}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#241D17] border border-[#B99A62]/35 rounded-[3px] font-ui text-[0.72rem] text-[#E8DCC5] hover:border-[#D3B47A] hover:text-[#D3B47A] transition-colors"
                    >
                      <span>{src.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Frame Footer Navigation */}
        <div className="px-5 py-3 bg-[#1E1813] border-t border-[#E8DCC5]/10 flex items-center justify-between gap-4 shrink-0">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="px-3.5 py-2 min-h-[38px] border border-[#B99A62]/35 rounded-[3px] font-ui text-[0.7rem] tracking-[0.08em] uppercase text-[#E8DCC5] hover:bg-[#2D241C] disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
          >
            ← Sebelumnya
          </button>
          <span className="hidden sm:inline font-ui text-[0.7rem] text-[#B7AA96]">
            Gulir di kotak ini untuk membaca materi sampai selesai
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={currentIndex === items.length - 1}
            className="px-3.5 py-2 min-h-[38px] border border-[#B99A62]/35 rounded-[3px] font-ui text-[0.7rem] tracking-[0.08em] uppercase text-[#E8DCC5] hover:bg-[#2D241C] disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
          >
            Berikutnya →
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Embedded iframe-like reader states for Kritik Sastra & Esai
  const [activeCriticismId, setActiveCriticismId] = useState(criticismContent[0].id);
  const [activeEssayId, setActiveEssayId] = useState(essayContent[0].id);

  // Interactive comparison explorer state
  const [activeCompIdx, setActiveCompIdx] = useState(0);
  const [activeLens, setActiveLens] = useState<'both' | 'criticism' | 'essay'>('both');

  // FAQ state
  const [activeFaqCat, setActiveFaqCat] = useState('Semua');
  const [openFaqIds, setOpenFaqIds] = useState<number[]>([1]);

  // Image fallback state
  const [heroImgOk, setHeroImgOk] = useState(true);
  const [closingImgOk, setClosingImgOk] = useState(true);

  // Multi-layer Parallax refs
  const heroBackdropRef = useRef<HTMLDivElement | null>(null);
  const heroMidLayerRef = useRef<HTMLDivElement | null>(null);
  const heroBooksRef = useRef<HTMLDivElement | null>(null);
  const closingParallaxRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId = 0;
    const updateParallax = () => {
      const top = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (top / docHeight) * 100) : 0);
      setIsScrolled(top > 40);

      // Multi-depth Hero Parallax
      if (top < window.innerHeight * 1.4) {
        if (heroBackdropRef.current) {
          heroBackdropRef.current.style.transform = `translate3d(0, ${top * 0.24}px, 0) scale(1.06)`;
        }
        if (heroMidLayerRef.current) {
          heroMidLayerRef.current.style.transform = `translate3d(0, ${top * 0.12}px, 0)`;
        }
        if (heroBooksRef.current && window.innerWidth > 768) {
          heroBooksRef.current.style.transform = `translate3d(0, ${top * -0.09}px, 0)`;
        }
      }

      // Closing Section Parallax Layer
      if (closingParallaxRef.current) {
        const rect = closingParallaxRef.current.parentElement?.getBoundingClientRect();
        if (rect) {
          closingParallaxRef.current.style.transform = `translate3d(0, ${rect.top * 0.14}px, 0) scale(1.08)`;
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && navOpen) setNavOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  // Desktop Custom Cursor
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let visible = false;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.left = `${mouseX}px`;
        cursorDotRef.current.style.top = `${mouseY}px`;
        if (!visible) {
          visible = true;
          cursorDotRef.current.style.opacity = '1';
          cursorRingRef.current.style.opacity = '1';
        }
        const target = e.target as HTMLElement | null;
        const interactive = target?.closest('a, button, .book-leaf, [role="button"]');
        cursorRingRef.current.style.width = interactive ? '50px' : '34px';
        cursorRingRef.current.style.height = interactive ? '50px' : '34px';
        cursorRingRef.current.style.backgroundColor = interactive
          ? 'rgba(185, 154, 98, 0.08)'
          : 'transparent';
      }
    };

    const onLeave = () => {
      visible = false;
      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.opacity = '0';
        cursorRingRef.current.style.opacity = '0';
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${ringX}px`;
        cursorRingRef.current.style.top = `${ringY}px`;
      }
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const filteredFaqs = useMemo(() => {
    if (activeFaqCat === 'Semua') return faqData;
    return faqData.filter((item) => item.category === activeFaqCat);
  }, [activeFaqCat]);

  const allVisibleFaqsOpen =
    filteredFaqs.length > 0 && filteredFaqs.every((f) => openFaqIds.includes(f.id));

  const toggleAllVisibleFaqs = () => {
    if (allVisibleFaqsOpen) {
      const visibleSet = new Set(filteredFaqs.map((f) => f.id));
      setOpenFaqIds((prev) => prev.filter((id) => !visibleSet.has(id)));
    } else {
      const merged = new Set([...openFaqIds, ...filteredFaqs.map((f) => f.id)]);
      setOpenFaqIds(Array.from(merged));
    }
  };

  const activeComparison = comparisonData[activeCompIdx];
  const prevComp = () => setActiveCompIdx((prev) => (prev - 1 + comparisonData.length) % comparisonData.length);
  const nextComp = () => setActiveCompIdx((prev) => (prev + 1) % comparisonData.length);

  return (
    <div className="min-h-screen bg-[#17130F] text-[#F1E8D8]">
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[120] pointer-events-none bg-gradient-to-r from-[#B99A62] to-[#D3B47A] transition-[width] duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Custom Cursor */}
      <div
        ref={cursorDotRef}
        className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#D3B47A] pointer-events-none z-[200] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200"
        aria-hidden="true"
      />
      <div
        ref={cursorRingRef}
        className="hidden md:block fixed top-0 left-0 w-[34px] h-[34px] rounded-full border border-[#B99A62]/55 pointer-events-none z-[200] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-[opacity,width,height,background-color] duration-200"
        aria-hidden="true"
      />

      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[90] backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled
            ? 'py-3 bg-[#17130F]/95 border-[#B99A62]/35'
            : 'py-4 bg-gradient-to-b from-[#17130F]/90 to-[#17130F]/60 border-[#E8DCC5]/10'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-8">
          <a
            href="#hero"
            className="font-display text-xl sm:text-2xl font-semibold tracking-[0.06em] text-[#F1E8D8] whitespace-nowrap shrink-0"
          >
            Kritik Sastra &amp; Esai
          </a>

          <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-7">
            {[
              { href: '#kritik-sastra', label: 'Kritik Sastra' },
              { href: '#esai', label: 'Esai' },
              { href: '#perbandingan', label: 'Perbandingan' },
              { href: '#faq', label: 'FAQ' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-ui text-xs font-medium tracking-[0.08em] text-[#B7AA96] hover:text-[#F1E8D8] whitespace-nowrap shrink-0 py-1 relative group transition-colors"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#B99A62] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setNavOpen(true)}
            aria-label="Buka menu navigasi penuh"
            aria-expanded={navOpen}
            className="inline-flex items-center gap-2.5 px-4 py-2 min-h-[40px] border border-[#B99A62]/35 rounded-[4px] font-ui text-xs font-medium tracking-[0.1em] uppercase text-[#E8DCC5] bg-[#241D17]/75 hover:bg-[#2D241C] hover:border-[#D3B47A] whitespace-nowrap shrink-0 transition-colors"
          >
            <span>Menu</span>
            <span className="flex flex-col gap-1 w-4" aria-hidden="true">
              <span className="block h-[1.5px] w-full bg-[#B99A62]" />
              <span className="block h-[1.5px] w-full bg-[#B99A62]" />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Peta Navigasi Kritik Sastra dan Esai"
        className={`fixed inset-0 z-[150] bg-[radial-gradient(circle_at_75%_25%,rgba(61,46,32,0.45),rgba(16,13,10,0.98)_65%)] backdrop-blur-lg flex flex-col justify-between px-6 py-7 transition-all duration-300 ${
          navOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between pb-4 border-b border-[#E8DCC5]/15">
          <span className="font-display text-2xl font-semibold tracking-[0.06em] text-[#F1E8D8]">
            Kritik Sastra &amp; Esai
          </span>
          <button
            type="button"
            onClick={() => setNavOpen(false)}
            className="min-w-[44px] min-h-[44px] px-4 py-2 border border-[#B99A62]/35 rounded-[4px] font-ui text-xs tracking-[0.12em] uppercase text-[#E8DCC5] hover:bg-[#2D241C] hover:border-[#D3B47A] transition-colors"
          >
            Tutup
          </button>
        </div>

        <div className="max-w-[1200px] w-full mx-auto my-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 items-center py-6">
          <ul className="flex flex-col gap-1.5">
            {[
              { num: '01', href: '#hero', label: 'Beranda' },
              { num: '02', href: '#kritik-sastra', label: 'Kritik Sastra' },
              { num: '03', href: '#flipbook-kritik', label: 'Flipbook Kritik Sastra' },
              { num: '04', href: '#esai', label: 'Esai' },
              { num: '05', href: '#flipbook-esai', label: 'Flipbook Esai' },
              { num: '06', href: '#perbandingan', label: 'Perbedaan Kritik & Esai' },
              { num: '07', href: '#faq', label: 'FAQ' }
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setNavOpen(false)}
                  className="inline-flex items-baseline gap-4 font-display text-[clamp(1.75rem,3.6vw,3rem)] font-medium leading-[1.2] text-[#B7AA96] hover:text-[#E8DCC5] hover:translate-x-3 transition-all duration-200 py-1"
                >
                  <span className="font-ui text-xs tracking-[0.14em] text-[#B99A62] tabular-nums">
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block border-y border-[#B99A62]/35 py-7">
            <p className="text-[#B7AA96] text-base mb-3.5">
              Membaca sastra melatih kita peka pada makna, dan menulis esai membantu kita merangkai pendapat dengan jernih.
            </p>
            <cite className="font-display italic text-xl text-[#D3B47A]">
              Menimbang Karya, Merangkai Gagasan
            </cite>
          </div>
        </div>
        <div />
      </div>

      {/* =====================================================================
          1. HERO SECTION (MULTI-LAYER PARALLAX)
          ===================================================================== */}
      <section
        id="hero"
        onMouseMove={(e) => {
          if (!window.matchMedia('(hover: hover)').matches || !heroBooksRef.current) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const rx = (e.clientX - rect.left) / rect.width - 0.5;
          const ry = (e.clientY - rect.top) / rect.height - 0.5;
          const scrollY = window.scrollY || 0;
          heroBooksRef.current.style.transform = `translate3d(${rx * -18}px, ${
            ry * -12 + scrollY * -0.09
          }px, 0)`;
        }}
        className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#17130F]"
      >
        <div
          ref={heroBackdropRef}
          className="absolute -inset-[8%] z-0 will-change-transform bg-[radial-gradient(ellipse_at_65%_35%,rgba(185,154,98,0.16),transparent_60%),linear-gradient(135deg,#1b140e_0%,#0f0c09_100%)]"
        >
          {heroImgOk && (
            <img
              src="/src/assets/images/hero_library_backdrop_1795784092465.jpg"
              alt="Ruang perpustakaan klasik dengan rak buku mahoni dan pencahayaan hangat"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgOk(false)}
              className="w-full h-full object-cover opacity-40 sepia-[20%] contrast-[1.06]"
            />
          )}
        </div>

        {/* Midground Parallax Ambient Light & Dust */}
        <div
          ref={heroMidLayerRef}
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none will-change-transform"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_45%,rgba(185,154,98,0.12)_0%,rgba(23,19,15,0.88)_72%),linear-gradient(to_bottom,rgba(23,19,15,0.72)_0%,rgba(23,19,15,0.42)_45%,#17130F_100%)]" />
          <div className="absolute inset-0 overflow-hidden">
            {DUST_PARTICLES.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full bg-[radial-gradient(circle,rgba(232,220,197,0.85),rgba(185,154,98,0.2))]"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  animation: `dustDrift ${p.duration}s linear ${p.delay}s infinite`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-[3] max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <div className="flex items-center gap-3.5 font-ui text-xs tracking-[0.16em] uppercase text-[#B99A62] mb-5">
              <span className="w-9 h-[1px] bg-[#B99A62]" aria-hidden="true" />
              <span>Menimbang Karya, Merangkai Gagasan</span>
            </div>

            <h1 className="font-display text-[clamp(2.85rem,5.6vw,4.9rem)] font-semibold leading-[1.04] text-[#F1E8D8] text-balance mb-6">
              Kritik Sastra <em className="italic font-medium text-[#D3B47A]">dan Esai</em>
            </h1>

            <p className="text-[1.06rem] text-[#B7AA96] max-w-[52ch] mb-8">
              Belajar kritik sastra dan esai dengan cara yang ringan dan jelas. Pahami cara menilai karya sastra secara adil serta menyusun tulisan opini yang runtut dan enak dibaca.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#kritik-sastra"
                className="inline-flex items-center justify-center px-7 py-3.5 min-h-[46px] bg-[#B99A62] hover:bg-[#D3B47A] text-[#17130F] font-ui text-xs font-semibold tracking-[0.1em] uppercase rounded-[3px] whitespace-nowrap transition-all hover:-translate-y-0.5"
              >
                Mulai Menjelajah
              </a>
              <a
                href="#perbandingan"
                className="inline-flex items-center justify-center px-7 py-3.5 min-h-[46px] border border-[#B99A62]/40 hover:border-[#D3B47A] bg-[#17130F]/55 hover:bg-[#2D241C]/85 text-[#E8DCC5] font-ui text-xs font-medium tracking-[0.1em] uppercase rounded-[3px] whitespace-nowrap transition-all hover:-translate-y-0.5"
              >
                Lihat Perbedaan
              </a>
            </div>
          </div>

          {/* 3 Floating Classic 3D Books */}
          <div
            ref={heroBooksRef}
            aria-hidden="true"
            className="hero-book-stage relative h-[320px] sm:h-[380px] lg:h-[460px] flex items-center justify-center will-change-transform"
          >
            {/* Book Left */}
            <div className="absolute left-[4%] sm:left-[6%] top-[14%] z-[2]">
              <div className="hero-book-3d hero-book-left relative w-[128px] h-[186px] sm:w-[165px] sm:h-[240px]">
                <div className="absolute inset-y-0 left-0 w-[26px] bg-[linear-gradient(to_right,#120d09,#2d2116_45%,#120d09)] border-x border-[#B99A62]/30 [transform:rotateY(-90deg)_translateZ(13px)]" />
                <div className="absolute inset-y-1 right-0 w-[24px] bg-[repeating-linear-gradient(to_right,#d8cbb2_0px,#c7b79b_2px,#e8dcc5_3px)] [transform:rotateY(90deg)_translateZ(12px)]" />
                <div className="absolute inset-0 rounded-[2px_6px_6px_2px] p-3.5 sm:p-4 border border-[#B99A62]/45 shadow-[0_24px_48px_rgba(0,0,0,0.65)] bg-[linear-gradient(145deg,#2a2118_0%,#1a140f_70%,#110d0a_100%)] [transform:translateZ(13px)]">
                  <div className="border border-[#B99A62]/45 h-full p-2.5 sm:p-3 flex flex-col justify-between text-center">
                    <span className="font-ui text-[0.6rem] tracking-[0.22em] text-[#B99A62]">BAGIAN I</span>
                    <div>
                      <div className="font-display text-lg sm:text-xl font-semibold leading-tight text-[#E8DCC5]">
                        Apresiasi &amp; Makna
                      </div>
                      <div className="font-body italic text-[0.7rem] text-[#D3B47A] mt-1">
                        Dasar Membaca Sastra
                      </div>
                    </div>
                    <span className="font-ui text-[0.6rem] tracking-[0.22em] text-[#B99A62]">SASTRA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Center */}
            <div className="absolute left-[31%] top-[6%] z-[4]">
              <div className="hero-book-3d hero-book-center relative w-[148px] h-[214px] sm:w-[200px] sm:h-[290px]">
                <div className="absolute inset-y-0 left-0 w-[28px] bg-[linear-gradient(to_right,#120d09,#2d2116_45%,#120d09)] border-x border-[#B99A62]/30 [transform:rotateY(-90deg)_translateZ(14px)]" />
                <div className="absolute inset-y-1 right-0 w-[26px] bg-[repeating-linear-gradient(to_right,#d8cbb2_0px,#c7b79b_2px,#e8dcc5_3px)] [transform:rotateY(90deg)_translateZ(13px)]" />
                <div className="absolute inset-0 rounded-[2px_6px_6px_2px] p-4 border border-[#B99A62]/45 shadow-[0_24px_48px_rgba(0,0,0,0.65)] bg-[linear-gradient(145deg,#3c1e1a_0%,#24120f_65%,#190c0a_100%)] [transform:translateZ(14px)]">
                  <div className="border border-[#B99A62]/45 h-full p-3 flex flex-col justify-between text-center">
                    <span className="font-ui text-[0.62rem] tracking-[0.22em] text-[#B99A62]">BAGIAN II</span>
                    <div>
                      <div className="font-display text-xl sm:text-2xl font-semibold leading-tight text-[#E8DCC5]">
                        Kritik Sastra
                      </div>
                      <div className="font-body italic text-xs text-[#D3B47A] mt-1">
                        Menilai Karya dengan Adil
                      </div>
                    </div>
                    <span className="font-ui text-[0.62rem] tracking-[0.22em] text-[#B99A62]">KLASIK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Right */}
            <div className="absolute right-[4%] sm:right-[6%] top-[22%] z-[3]">
              <div className="hero-book-3d hero-book-right relative w-[128px] h-[186px] sm:w-[165px] sm:h-[240px]">
                <div className="absolute inset-y-0 left-0 w-[26px] bg-[linear-gradient(to_right,#120d09,#2d2116_45%,#120d09)] border-x border-[#B99A62]/30 [transform:rotateY(-90deg)_translateZ(13px)]" />
                <div className="absolute inset-y-1 right-0 w-[24px] bg-[repeating-linear-gradient(to_right,#d8cbb2_0px,#c7b79b_2px,#e8dcc5_3px)] [transform:rotateY(90deg)_translateZ(12px)]" />
                <div className="absolute inset-0 rounded-[2px_6px_6px_2px] p-3.5 sm:p-4 border border-[#B99A62]/45 shadow-[0_24px_48px_rgba(0,0,0,0.65)] bg-[linear-gradient(145deg,#1b2c25_0%,#121d18_68%,#0c1410_100%)] [transform:translateZ(13px)]">
                  <div className="border border-[#B99A62]/45 h-full p-2.5 sm:p-3 flex flex-col justify-between text-center">
                    <span className="font-ui text-[0.6rem] tracking-[0.22em] text-[#B99A62]">BAGIAN III</span>
                    <div>
                      <div className="font-display text-lg sm:text-xl font-semibold leading-tight text-[#E8DCC5]">
                        Seni Menulis Esai
                      </div>
                      <div className="font-body italic text-[0.7rem] text-[#D3B47A] mt-1">
                        Berbagi Sudut Pandang
                      </div>
                    </div>
                    <span className="font-ui text-[0.6rem] tracking-[0.22em] text-[#B99A62]">MODERN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. SECTION KRITIK SASTRA (IFRAME-LIKE VIEWER ON RIGHT)
          ===================================================================== */}
      <section id="kritik-sastra" className="py-24 bg-[#241D17] border-t border-[#E8DCC5]/15">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-ui text-xs font-medium tracking-[0.16em] uppercase text-[#B99A62] mb-3.5">
            01 · Materi Utama I
          </p>
          <h2 className="font-display text-[clamp(2.15rem,4vw,3.35rem)] font-semibold leading-[1.12] text-[#F1E8D8] text-balance mb-4">
            Mengenal Kritik Sastra
          </h2>
          <p className="text-[1.04rem] text-[#B7AA96] max-w-[62ch]">
            Pilih topik di sebelah kiri untuk langsung membacanya di kotak sebelah kanan, tanpa perlu menggulir halaman jauh ke bawah.
          </p>

          <EmbeddedReaderFrame
            sectionTitle="Kritik Sastra"
            items={criticismContent}
            activeId={activeCriticismId}
            onSelect={setActiveCriticismId}
            flipbookHref="#flipbook-kritik"
            flipbookLabel="Buka Flipbook Kritik Sastra"
          />
        </div>
      </section>

      {/* =====================================================================
          3. FLIPBOOK KRITIK SASTRA
          ===================================================================== */}
      <section id="flipbook-kritik" className="py-24 border-t border-[#E8DCC5]/15">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
            <div>
              <p className="font-ui text-xs font-medium tracking-[0.16em] uppercase text-[#B99A62] mb-3.5">
                02 · Buku Interaktif I
              </p>
              <h2 className="font-display text-[clamp(2.15rem,4vw,3.35rem)] font-semibold leading-[1.12] text-[#F1E8D8] text-balance mb-3">
                Contoh &amp; Praktik Kritik Sastra
              </h2>
              <p className="text-[1.04rem] text-[#B7AA96] max-w-[60ch]">
                Buka sampul buku untuk membaca keseluruhan teks kritik sastra novel “Gadis Kretek” secara utuh, lalu lanjutkan ke halaman terpisah untuk melihat analisisnya.
              </p>
            </div>
            <div className="font-ui text-xs tracking-[0.08em] text-[#B7AA96]">
              Klik halaman, tombol di bawah buku, panah keyboard, atau usap layar.
            </div>
          </div>

          <Flipbook book={criticismBook} />
        </div>
      </section>

      {/* =====================================================================
          4. SECTION ESAI (IFRAME-LIKE VIEWER ON RIGHT)
          ===================================================================== */}
      <section id="esai" className="py-24 bg-[#241D17] border-t border-[#E8DCC5]/15">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-ui text-xs font-medium tracking-[0.16em] uppercase text-[#B99A62] mb-3.5">
            03 · Materi Utama II
          </p>
          <h2 className="font-display text-[clamp(2.15rem,4vw,3.35rem)] font-semibold leading-[1.12] text-[#F1E8D8] text-balance mb-4">
            Menulis Esai dari Sudut Pandang Pribadi
          </h2>
          <p className="text-[1.04rem] text-[#B7AA96] max-w-[62ch]">
            Pilih topik esai di sebelah kiri untuk langsung melihat penjelasannya di kotak baca sebelah kanan.
          </p>

          <EmbeddedReaderFrame
            sectionTitle="Esai"
            items={essayContent}
            activeId={activeEssayId}
            onSelect={setActiveEssayId}
            flipbookHref="#flipbook-esai"
            flipbookLabel="Buka Flipbook Esai"
          />
        </div>
      </section>

      {/* =====================================================================
          5. FLIPBOOK ESAI
          ===================================================================== */}
      <section id="flipbook-esai" className="py-24 border-t border-[#E8DCC5]/15">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
            <div>
              <p className="font-ui text-xs font-medium tracking-[0.16em] uppercase text-[#B99A62] mb-3.5">
                04 · Buku Interaktif II
              </p>
              <h2 className="font-display text-[clamp(2.15rem,4vw,3.35rem)] font-semibold leading-[1.12] text-[#F1E8D8] text-balance mb-3">
                Contoh &amp; Praktik Menulis Esai
              </h2>
              <p className="text-[1.04rem] text-[#B7AA96] max-w-[60ch]">
                Buka sampul buku untuk membaca keseluruhan teks esai bertema “Dampak Media Sosial” secara utuh, lalu lanjutkan ke halaman terpisah untuk melihat analisisnya.
              </p>
            </div>
            <div className="font-ui text-xs tracking-[0.08em] text-[#B7AA96]">
              Bisa dibuka dan dibalik terpisah dari buku pertama.
            </div>
          </div>

          <Flipbook book={essayBook} />
        </div>
      </section>

      {/* =====================================================================
          6. COMPARISON SECTION (SINGLE INTERACTIVE EXPLORER)
          ===================================================================== */}
      <section id="perbandingan" className="py-24 bg-[#241D17] border-t border-[#E8DCC5]/15">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-ui text-xs font-medium tracking-[0.16em] uppercase text-[#B99A62] mb-3.5">
            05 · Komparasi Interaktif
          </p>
          <h2 className="font-display text-[clamp(2.15rem,4vw,3.35rem)] font-semibold leading-[1.12] text-[#F1E8D8] text-balance mb-4">
            Perbedaan Kritik Sastra dan Esai
          </h2>
          <p className="text-[1.04rem] text-[#B7AA96] max-w-[62ch]">
            Pilih salah satu aspek di bawah, pakai tombol panah, atau klik kartu untuk membandingkan kritik sastra dan esai secara ringkas.
          </p>

          <div
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextComp();
              } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevComp();
              }
            }}
            className="mt-10 bg-[#17130F]/90 border border-[#B99A62]/40 rounded-[4px] p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] focus:outline-none focus:border-[#D3B47A]"
          >
            {/* Top Interactive Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-[#E8DCC5]/15">
              <div className="flex items-center gap-3">
                <span className="font-ui text-xs tracking-[0.14em] uppercase text-[#B99A62] tabular-nums">
                  Aspek 0{activeCompIdx + 1} / 0{comparisonData.length}
                </span>
                <span aria-hidden="true" className="text-[#E8DCC5]/25">
                  ·
                </span>
                <span className="font-display text-2xl font-semibold text-[#F1E8D8]">
                  {activeComparison.aspect}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div
                  role="group"
                  aria-label="Sorotan Lensa"
                  className="inline-flex border border-[#E8DCC5]/15 rounded-[3px] p-0.5 bg-[#241D17]/80 mr-2"
                >
                  {[
                    { id: 'both' as const, label: 'Bandingkan' },
                    { id: 'criticism' as const, label: 'Fokus Kritik' },
                    { id: 'essay' as const, label: 'Fokus Esai' }
                  ].map((lens) => (
                    <button
                      key={lens.id}
                      type="button"
                      onClick={() => setActiveLens(lens.id)}
                      className={`px-3 py-1.5 rounded-[2px] font-ui text-[0.68rem] tracking-[0.06em] uppercase transition-colors ${
                        activeLens === lens.id
                          ? 'bg-[#B99A62] text-[#17130F] font-semibold'
                          : 'text-[#B7AA96] hover:text-[#E8DCC5]'
                      }`}
                    >
                      {lens.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={prevComp}
                  aria-label="Aspek sebelumnya"
                  className="px-3.5 py-2 min-h-[38px] border border-[#B99A62]/35 rounded-[3px] font-ui text-[0.7rem] tracking-[0.08em] uppercase text-[#E8DCC5] hover:bg-[#2D241C] hover:border-[#D3B47A] transition-colors"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={nextComp}
                  aria-label="Aspek berikutnya"
                  className="px-3.5 py-2 min-h-[38px] border border-[#B99A62]/35 rounded-[3px] font-ui text-[0.7rem] tracking-[0.08em] uppercase text-[#E8DCC5] hover:bg-[#2D241C] hover:border-[#D3B47A] transition-colors"
                >
                  →
                </button>
              </div>
            </div>

            {/* Aspect Selector Tabs */}
            <div
              role="tablist"
              aria-label="Aspek Perbandingan"
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-7"
            >
              {comparisonData.map((item, idx) => {
                const isActive = idx === activeCompIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCompIdx(idx)}
                    className={`px-3 py-2.5 min-h-[44px] border rounded-[3px] text-left font-ui text-xs transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#B99A62] border-[#B99A62] text-[#17130F] font-semibold shadow-[0_6px_20px_rgba(185,154,98,0.2)]'
                        : 'bg-[#241D17]/60 border-[#E8DCC5]/15 text-[#B7AA96] hover:border-[#B99A62]/45 hover:text-[#E8DCC5]'
                    }`}
                  >
                    <span
                      className={`text-[0.68rem] tabular-nums ${
                        isActive ? 'text-[#17130F]/75' : 'text-[#B99A62]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="truncate">{item.aspect}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
              <button
                type="button"
                onClick={() =>
                  setActiveLens((prev) => (prev === 'criticism' ? 'both' : 'criticism'))
                }
                aria-pressed={activeLens === 'criticism'}
                className={`text-left p-6 sm:p-7 border rounded-[3px] transition-all duration-300 flex flex-col justify-between ${
                  activeLens === 'essay'
                    ? 'opacity-45 bg-[#241D17]/35 border-[#E8DCC5]/10 scale-[0.99]'
                    : activeLens === 'criticism'
                    ? 'bg-[#241D17] border-[#D3B47A] shadow-[0_14px_34px_rgba(185,154,98,0.14)]'
                    : 'bg-[#241D17]/75 border-[#B99A62]/30 hover:border-[#D3B47A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-ui text-[0.7rem] tracking-[0.15em] uppercase text-[#B99A62]">
                      Kritik Sastra
                    </span>
                    <span className="font-ui text-[0.68rem] text-[#D3B47A] tabular-nums">
                      Bobot Objektif {activeComparison.criticismWeight}%
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-[1.65rem] text-[#E8DCC5] mb-2.5 leading-snug">
                    {activeComparison.criticismTitle}
                  </h3>
                  <p className="text-[0.96rem] text-[#B7AA96] leading-[1.72]">
                    {activeComparison.criticismText}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#E8DCC5]/10 font-ui text-[0.68rem] tracking-[0.08em] uppercase text-[#B99A62]">
                  {activeLens === 'criticism' ? 'Sedang disorot · Klik untuk bandingkan' : 'Klik kartu untuk menyorot'}
                </div>
              </button>

              <div className="flex md:flex-col items-center justify-center gap-2 py-1">
                <div className="font-display italic text-2xl text-[#D3B47A] px-4 py-2 border-y border-[#B99A62]/35 text-center">
                  vs
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveLens((prev) => (prev === 'essay' ? 'both' : 'essay'))}
                aria-pressed={activeLens === 'essay'}
                className={`text-left p-6 sm:p-7 border rounded-[3px] transition-all duration-300 flex flex-col justify-between ${
                  activeLens === 'criticism'
                    ? 'opacity-45 bg-[#241D17]/35 border-[#E8DCC5]/10 scale-[0.99]'
                    : activeLens === 'essay'
                    ? 'bg-[#241D17] border-[#9ab097] shadow-[0_14px_34px_rgba(125,143,123,0.16)]'
                    : 'bg-[#241D17]/75 border-[#E8DCC5]/20 hover:border-[#9ab097]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-ui text-[0.7rem] tracking-[0.15em] uppercase text-[#9ab097]">
                      Esai
                    </span>
                    <span className="font-ui text-[0.68rem] text-[#9ab097] tabular-nums">
                      Bobot Subjektif {100 - activeComparison.criticismWeight}%
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-[1.65rem] text-[#E8DCC5] mb-2.5 leading-snug">
                    {activeComparison.essayTitle}
                  </h3>
                  <p className="text-[0.96rem] text-[#B7AA96] leading-[1.72]">
                    {activeComparison.essayText}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#E8DCC5]/10 font-ui text-[0.68rem] tracking-[0.08em] uppercase text-[#9ab097]">
                  {activeLens === 'essay' ? 'Sedang disorot · Klik untuk bandingkan' : 'Klik kartu untuk menyorot'}
                </div>
              </button>
            </div>

            {/* Interactive Orientation Spectrum */}
            <div className="mt-7 pt-5 border-t border-[#E8DCC5]/15">
              <div className="flex flex-wrap justify-between gap-2 font-ui text-[0.72rem] tracking-[0.08em] text-[#B7AA96] mb-2.5 tabular-nums">
                <span>
                  Fokus pada Karya · Objektif ({activeComparison.criticismWeight}%)
                </span>
                <span>
                  Fokus pada Penulis · Subjektif ({100 - activeComparison.criticismWeight}%)
                </span>
              </div>
              <div
                aria-hidden="true"
                className="h-2 bg-[#E8DCC5]/12 rounded-[3px] overflow-hidden flex"
              >
                <div
                  className="bg-[#B99A62] transition-[width] duration-500"
                  style={{ width: `${activeComparison.criticismWeight}%` }}
                />
                <div
                  className="bg-[#7d8f7b] transition-[width] duration-500"
                  style={{ width: `${100 - activeComparison.criticismWeight}%` }}
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-body italic text-sm text-[#B7AA96]">
                    Tips: pakai tombol panah kiri/kanan di keyboard untuk berpindah aspek.
                  </span>
                  <a
                    href={activeComparison.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-ui text-[0.72rem] text-[#D3B47A] underline decoration-[#B99A62]/45 hover:text-[#F1E8D8] transition-colors"
                  >
                    <span>Sumber: {activeComparison.source.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="flex items-center gap-1.5" aria-label="Indikator aspek">
                  {comparisonData.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveCompIdx(idx)}
                      aria-label={`Pilih aspek ${item.aspect}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeCompIdx
                          ? 'w-7 bg-[#B99A62]'
                          : 'w-2 bg-[#E8DCC5]/25 hover:bg-[#B99A62]/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. FAQ SECTION
          ===================================================================== */}
      <section id="faq" className="py-24 border-t border-[#E8DCC5]/15">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-ui text-xs font-medium tracking-[0.16em] uppercase text-[#B99A62] mb-3.5">
            06 · Tanya Jawab
          </p>
          <h2 className="font-display text-[clamp(2.15rem,4vw,3.35rem)] font-semibold leading-[1.12] text-[#F1E8D8] text-balance mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-[1.04rem] text-[#B7AA96] max-w-[62ch]">
            Jawaban singkat untuk hal-hal yang paling sering ditanyakan soal kritik sastra dan esai.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 mb-6">
            <div role="tablist" aria-label="Kategori FAQ" className="flex flex-wrap gap-2">
              {['Semua', 'Kritik Sastra', 'Esai', 'Perbandingan', 'Penulisan'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeFaqCat === cat}
                  onClick={() => setActiveFaqCat(cat)}
                  className={`px-4 py-2 min-h-[40px] border rounded-[3px] font-ui text-xs font-medium whitespace-nowrap transition-colors ${
                    activeFaqCat === cat
                      ? 'bg-[#B99A62] border-[#B99A62] text-[#17130F] font-semibold'
                      : 'border-[#E8DCC5]/15 text-[#B7AA96] hover:border-[#B99A62]/40 hover:text-[#E8DCC5]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleAllVisibleFaqs}
              className="px-5 py-2.5 min-h-[40px] border border-[#B99A62]/40 hover:border-[#D3B47A] rounded-[3px] font-ui text-xs font-medium tracking-[0.1em] uppercase text-[#E8DCC5] whitespace-nowrap transition-colors"
            >
              {allVisibleFaqsOpen ? 'Tutup Semua' : 'Buka Semua'}
            </button>
          </div>

          <div className="border-t border-[#B99A62]/35">
            {filteredFaqs.map((item) => {
              const isOpen = openFaqIds.includes(item.id);
              return (
                <div key={item.id} className="border-b border-[#E8DCC5]/15">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaqIds((prev) =>
                        prev.includes(item.id)
                          ? prev.filter((id) => id !== item.id)
                          : [...prev, item.id]
                      )
                    }
                    className="w-full py-5 px-1.5 flex items-center justify-between gap-5 text-left"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-ui text-[0.68rem] tracking-[0.14em] uppercase text-[#B99A62]">
                        {item.category}
                      </span>
                      <span className="font-display text-[clamp(1.25rem,2vw,1.55rem)] font-semibold text-[#E8DCC5] leading-[1.25]">
                        {item.question}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className={`w-[34px] h-[34px] shrink-0 border border-[#B99A62]/40 rounded-full flex items-center justify-center font-ui text-lg text-[#D3B47A] transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-[#B99A62]/15' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-1.5 pb-6 max-w-[72ch] text-[#B7AA96] text-[0.98rem] leading-[1.75]">
                        <p>{item.answer}</p>
                        <div className="mt-3">
                          <a
                            href={item.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-ui text-[0.72rem] text-[#D3B47A] underline decoration-[#B99A62]/45 hover:text-[#F1E8D8] transition-colors"
                          >
                            <span>Sumber rujukan: {item.source.label}</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. CLOSING SECTION (WITH PARALLAX BACKDROP)
          ===================================================================== */}
      <section
        id="closing"
        className="relative py-28 overflow-hidden border-t border-[#B99A62]/35 bg-[#17130F]"
      >
        <div
          ref={closingParallaxRef}
          className="absolute -inset-[8%] z-0 will-change-transform bg-[radial-gradient(circle_at_50%_50%,rgba(185,154,98,0.15),#17130F_72%)]"
        >
          {closingImgOk && (
            <img
              src="/src/assets/images/closing_open_book_1795784093177.jpg"
              alt="Buku sastra terbuka di meja kayu dalam pencahayaan hangat"
              referrerPolicy="no-referrer"
              onError={() => setClosingImgOk(false)}
              className="w-full h-full object-cover opacity-35"
            />
          )}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-gradient-to-b from-[#17130F]/90 via-[#17130F]/60 to-[#17130F]/95"
        />

        <div className="relative z-[2] max-w-[720px] mx-auto px-6 text-center">
          <p className="font-ui text-xs font-medium tracking-[0.16em] uppercase text-[#B99A62] mb-3.5">
            Penutup Pembelajaran
          </p>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.08] text-[#E8DCC5] text-balance mb-5">
            Setiap Tulisan Punya Sudut Pandang.
          </h2>
          <p className="text-[1.06rem] text-[#B7AA96] mb-8">
            Membaca karya sastra membantu kita memahami kehidupan dari banyak sisi. Sementara itu, belajar menulis kritik dan esai melatih kita berpikir jernih, bersikap adil, dan menyampaikan pendapat dengan santun.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center justify-center px-7 py-3.5 min-h-[46px] bg-[#B99A62] hover:bg-[#D3B47A] text-[#17130F] font-ui text-xs font-semibold tracking-[0.1em] uppercase rounded-[3px] whitespace-nowrap transition-all hover:-translate-y-0.5"
          >
            Kembali ke Atas
          </a>
        </div>
      </section>

      {/* =====================================================================
          10. FOOTER
          ===================================================================== */}
      <footer className="border-t border-[#E8DCC5]/15 bg-[#120E0B] pt-12 pb-9">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-between items-start gap-8 pb-7 border-b border-[#E8DCC5]/15">
            <div>
              <div className="font-display text-2xl font-semibold tracking-[0.06em] text-[#E8DCC5]">
                Kritik Sastra dan Esai
              </div>
              <div className="font-body italic text-sm text-[#B99A62] mt-1">
                Menimbang Karya, Merangkai Gagasan
              </div>
              <p className="text-sm text-[#B7AA96] max-w-[44ch] mt-2.5">
                Media belajar Bahasa Indonesia tentang Kritik Sastra dan Esai dengan bahasa yang ringan serta rujukan resmi yang dapat diklik.
              </p>
            </div>

            <nav aria-label="Navigasi Footer" className="flex flex-wrap gap-5">
              {[
                { href: '#kritik-sastra', label: 'Kritik Sastra' },
                { href: '#esai', label: 'Esai' },
                { href: '#perbandingan', label: 'Perbandingan' },
                { href: '#faq', label: 'FAQ' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-ui text-xs tracking-[0.08em] text-[#B7AA96] hover:text-[#D3B47A] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="py-5 border-b border-[#E8DCC5]/10">
            <div className="font-ui text-[0.68rem] tracking-[0.14em] uppercase text-[#B99A62] mb-2.5">
              Sumber Rujukan Utama (Klik untuk Membuka)
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {primarySources.map((src) => (
                <a
                  key={src.url}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-xs text-[#B7AA96] hover:text-[#D3B47A] underline decoration-[#B99A62]/35 transition-colors"
                >
                  {src.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4 pt-5 font-ui text-xs text-[#B7AA96]">
            <span>
              &copy; {new Date().getFullYear()} Kritik Sastra dan Esai. Media Pembelajaran Sastra Indonesia.
            </span>
            <span>Disusun dengan bahasa yang ringkas dan sumber rujukan resmi.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
