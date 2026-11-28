import React, { useEffect, useRef, useState } from 'react';
import { FlipbookData, FlipbookPage } from '../data/literaryData';

interface FlipbookProps {
  book: FlipbookData;
}

export const Flipbook: React.FC<FlipbookProps> = ({ book }) => {
  const [desktopLeaf, setDesktopLeaf] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);
  const [turningIndex, setTurningIndex] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 760 : false
  );

  const isAnimatingRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const totalPages = book.pages.length;
  const leaves: { front: FlipbookPage; back?: FlipbookPage }[] = [];
  for (let i = 0; i < book.pages.length; i += 2) {
    leaves.push({
      front: book.pages[i],
      back: book.pages[i + 1]
    });
  }
  const totalLeaves = leaves.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const triggerTurnLock = (idx: number) => {
    isAnimatingRef.current = true;
    setTurningIndex(idx);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      isAnimatingRef.current = false;
      setTurningIndex(-1);
    }, 790);
  };

  const goNext = () => {
    if (isAnimatingRef.current) return;
    if (isMobile) {
      if (mobilePage >= totalPages - 1) return;
      const turning = mobilePage;
      setMobilePage((p) => p + 1);
      triggerTurnLock(turning);
    } else {
      if (desktopLeaf >= totalLeaves) return;
      const turning = desktopLeaf;
      setDesktopLeaf((l) => l + 1);
      triggerTurnLock(turning);
    }
  };

  const goPrev = () => {
    if (isAnimatingRef.current) return;
    if (isMobile) {
      if (mobilePage <= 0) return;
      const nextPage = mobilePage - 1;
      setMobilePage(nextPage);
      triggerTurnLock(nextPage);
    } else {
      if (desktopLeaf <= 0) return;
      const nextLeaf = desktopLeaf - 1;
      setDesktopLeaf(nextLeaf);
      triggerTurnLock(nextLeaf);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    }
  };

  const renderPageFace = (page: FlipbookPage | undefined, side: 'front' | 'back') => {
    if (!page) {
      return <div className="page-parchment h-full w-full" />;
    }

    if (page.isCover) {
      const coverBg =
        book.coverTheme === 'criticism'
          ? 'bg-[linear-gradient(155deg,#3c1c18_0%,#24100e_65%,#160a08_100%)]'
          : 'bg-[linear-gradient(155deg,#1b2c24_0%,#111c17_65%,#0b120f_100%)]';

      return (
        <div
          className={`h-full p-6 flex flex-col justify-between text-[#E8DCC5] relative border border-[#B99A62]/55 ${coverBg}`}
        >
          <div className="h-full border border-[#B99A62]/55 px-5 py-6 flex flex-col justify-between items-center text-center relative">
            <div className="absolute inset-1.5 border border-[#B99A62]/25 pointer-events-none" />
            <span className="font-ui text-[0.68rem] tracking-[0.22em] uppercase text-[#B99A62]">
              {book.editionLabel}
            </span>
            <div className="flex flex-col items-center">
              <svg
                className="w-12 h-12 text-[#B99A62] mb-2"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                aria-hidden="true"
              >
                <circle cx="24" cy="24" r="19" />
                <path d="M16 18 C20 14, 28 14, 32 18 L32 31 C28 28, 20 28, 16 31 Z" />
                <line x1="24" y1="15" x2="24" y2="29" />
              </svg>
              <h3 className="font-display text-[clamp(1.65rem,2.6vw,2.45rem)] font-semibold leading-[1.12] text-[#E8DCC5] my-2">
                {page.title}
              </h3>
              <p className="font-body italic text-sm text-[#D3B47A] max-w-[24ch]">{page.subtitle}</p>
            </div>
            <span className="font-ui text-[0.68rem] tracking-[0.16em] uppercase text-[#B99A62]">
              Klik untuk Membuka →
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="page-parchment h-full px-6 py-5 sm:px-7 sm:py-6 flex flex-col justify-between">
        <div className="min-h-0 flex-1 flex flex-col">
          <div className="flex items-center justify-between border-b border-[#5A4837]/25 pb-2 mb-3 font-ui text-[0.64rem] tracking-[0.14em] uppercase text-[#5A4837]">
            <span>{book.coverTitle}</span>
            <span>{page.runningHead || ''}</span>
          </div>

          <div className="page-parchment-scroll flex-1 overflow-y-auto pr-1">
            <h4 className="font-display text-[1.4rem] sm:text-[1.55rem] font-bold leading-[1.16] text-[#1c130d] mb-2">
              {page.title}
            </h4>
            {page.subtitle && (
              <div className="font-body italic text-[0.84rem] text-[#6b5239] mb-3">
                {page.subtitle}
              </div>
            )}
            <div className="font-body text-[0.85rem] leading-[1.65] text-[#2b2017] space-y-2.5">
              {page.paragraphs?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              {page.bullets && (
                <ul className="list-disc pl-4 space-y-1.5">
                  {page.bullets.map((b, idx) => (
                    <li key={idx}>
                      {b.label && <strong className="font-semibold">{b.label}: </strong>}
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              {page.sources && page.sources.length > 0 && (
                <div className="pt-2.5 mt-3 border-t border-[#5A4837]/20">
                  <div className="font-ui text-[0.6rem] tracking-[0.14em] uppercase text-[#5A4837] mb-1">
                    Sumber Rujukan
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {page.sources.map((src) => (
                      <a
                        key={src.url}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-ui text-[0.72rem] text-[#6b4423] underline decoration-[#6b4423]/45 hover:text-[#1c130d] transition-colors"
                      >
                        {src.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#5A4837]/20 pt-2 mt-2.5 font-ui text-[0.68rem] text-[#5A4837] tabular-nums">
          <span>{side === 'front' ? 'Halaman Kanan' : 'Halaman Kiri'}</span>
          <span>
            Hal. {String(page.pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
          </span>
        </div>
      </div>
    );
  };

  const statusText = isMobile
    ? `Halaman ${mobilePage + 1} dari ${totalPages}`
    : desktopLeaf === 0
      ? `Halaman 1 dari ${totalPages} (Sampul)`
      : desktopLeaf === totalLeaves
        ? `Halaman ${totalPages} dari ${totalPages}`
        : `Halaman ${desktopLeaf * 2}–${desktopLeaf * 2 + 1} dari ${totalPages}`;

  const isPrevDisabled = isMobile ? mobilePage === 0 : desktopLeaf === 0;
  const isNextDisabled = isMobile ? mobilePage === totalPages - 1 : desktopLeaf === totalLeaves;

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flipbook-stage w-full flex justify-center items-center py-4">
        <div
          className={`book-3d ${
            !isMobile && desktopLeaf === 0
              ? 'is-cover-front'
              : !isMobile && desktopLeaf === totalLeaves
                ? 'is-cover-back'
                : ''
          }`}
          tabIndex={0}
          role="region"
          aria-label={`Buku Interaktif ${book.coverTitle}`}
          onKeyDown={handleKeyDown}
          onTouchStart={(e) => {
            touchStartRef.current = {
              x: e.changedTouches[0].clientX,
              y: e.changedTouches[0].clientY
            };
          }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
            const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
            if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) {
              if (dx < 0) goNext();
              else goPrev();
            }
          }}
        >
          {!isMobile && (
            <>
              <div
                className={`absolute top-0 left-0 w-1/2 h-full rounded-[3px] bg-[#14100c] shadow-[-10px_24px_55px_rgba(0,0,0,0.6)] pointer-events-none transition-opacity duration-300 ${
                  desktopLeaf > 0 ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute top-0 right-0 w-1/2 h-full rounded-[3px] bg-[#14100c] shadow-[10px_24px_55px_rgba(0,0,0,0.65)] pointer-events-none" />
              <div
                className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[18px] bg-[linear-gradient(to_right,rgba(0,0,0,0.42),rgba(255,255,255,0.06)_50%,rgba(0,0,0,0.42))] z-40 pointer-events-none transition-opacity duration-300 ${
                  desktopLeaf > 0 && desktopLeaf < totalLeaves ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </>
          )}

          {isMobile && (
            <div className="absolute inset-0 rounded-[3px] bg-[#14100c] shadow-[0_18px_45px_rgba(0,0,0,0.65)] pointer-events-none" />
          )}

          {isMobile
            ? book.pages.map((page, idx) => {
                const isFlipped = idx < mobilePage;
                const visible = Math.abs(idx - mobilePage) <= 1;
                const zIndex =
                  idx === turningIndex
                    ? totalPages + 10
                    : isFlipped
                      ? idx + 1
                      : totalPages - idx;

                return (
                  <div
                    key={page.pageNumber}
                    style={{ zIndex }}
                    onClick={() => {
                      if (mobilePage < totalPages - 1) goNext();
                    }}
                    className={`book-leaf ${isFlipped ? 'is-flipped' : ''} ${
                      turningIndex === idx ? 'is-turning' : ''
                    } ${visible ? '' : 'hidden'}`}
                  >
                    <div className="book-face book-face-front">{renderPageFace(page, 'front')}</div>
                    <div className="book-face book-face-back">
                      <div className="page-parchment h-full w-full" />
                    </div>
                  </div>
                );
              })
            : leaves.map((pair, idx) => {
                const isFlipped = idx < desktopLeaf;
                const zIndex =
                  idx === turningIndex
                    ? totalLeaves + 10
                    : isFlipped
                      ? idx + 1
                      : totalLeaves - idx;

                return (
                  <div
                    key={pair.front.pageNumber}
                    style={{ zIndex }}
                    onClick={() => {
                      if (idx >= desktopLeaf) goNext();
                      else goPrev();
                    }}
                    className={`book-leaf ${isFlipped ? 'is-flipped' : ''} ${
                      turningIndex === idx ? 'is-turning' : ''
                    }`}
                  >
                    <div className="book-face book-face-front">
                      {renderPageFace(pair.front, 'front')}
                    </div>
                    <div className="book-face book-face-back">
                      {renderPageFace(pair.back, 'back')}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={isPrevDisabled}
          className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] border border-[#B99A62]/35 rounded-[3px] font-ui text-xs font-medium tracking-[0.1em] uppercase text-[#E8DCC5] bg-[#241D17]/85 hover:bg-[#2D241C] hover:border-[#D3B47A] disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
        >
          ← Sebelumnya
        </button>
        <div className="font-ui text-xs tracking-[0.08em] text-[#D3B47A] min-w-[165px] text-center tabular-nums">
          {statusText}
        </div>
        <button
          type="button"
          onClick={goNext}
          disabled={isNextDisabled}
          className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] border border-[#B99A62]/35 rounded-[3px] font-ui text-xs font-medium tracking-[0.1em] uppercase text-[#E8DCC5] bg-[#241D17]/85 hover:bg-[#2D241C] hover:border-[#D3B47A] disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
        >
          Selanjutnya →
        </button>
      </div>
    </div>
  );
};
