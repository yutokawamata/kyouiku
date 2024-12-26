'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { KanjiData } from "@/lib/types";
import { KanjiCard } from "./kanji/kanji-card";
import { useKanjiSelection } from "@/hooks/use-kanji-selection";

interface KanjiSelectorProps {
  kanjiList: KanjiData[];
  grade: number;
}

export function KanjiSelector({ kanjiList, grade }: KanjiSelectorProps) {
  const { selectedKanji, toggleKanji, isSelected } = useKanjiSelection();
  const router = useRouter();

  const handleStartPractice = () => {
    if (selectedKanji.length > 0) {
      router.push(`/practice?grade=${grade}&kanji=${selectedKanji.join(',')}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 pb-24">
      {kanjiList.map((kanji) => (
        <KanjiCard
          key={kanji.id}
          kanji={kanji}
          isSelected={isSelected(kanji.id)}
          onToggle={toggleKanji}
        />
      ))}
      
      <Button
        size="lg"
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-xl px-8 py-6 shadow-lg transition-all hover:scale-105 z-10"
        onClick={handleStartPractice}
        disabled={selectedKanji.length === 0}
      >
        練習開始
      </Button>
    </div>
  );
}