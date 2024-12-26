'use client';

import { KanjiData } from "@/lib/types";
import { useKanjiPractice } from "@/hooks/use-kanji-practice";
import { KanjiDisplay } from "./kanji/kanji-display";

interface KanjiPracticeProps {
  selectedKanji: KanjiData[];
}

export function KanjiPractice({ selectedKanji }: KanjiPracticeProps) {
  const {
    currentKanji,
    showImage,
    currentIndex,
    totalCount,
    handleKanjiClick,
  } = useKanjiPractice(selectedKanji);

  if (!currentKanji) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <KanjiDisplay
        kanji={currentKanji}
        showImage={showImage}
        onKanjiClick={handleKanjiClick}
        currentIndex={currentIndex}
        totalCount={totalCount}
      />
    </div>
  );
}