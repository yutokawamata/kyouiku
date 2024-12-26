'use client';

import { useState } from 'react';

export function useKanjiSelection() {
  const [selectedKanji, setSelectedKanji] = useState<number[]>([]);

  const toggleKanji = (kanjiId: number) => {
    setSelectedKanji(current =>
      current.includes(kanjiId)
        ? current.filter(id => id !== kanjiId)
        : [...current, kanjiId]
    );
  };

  const isSelected = (kanjiId: number) => selectedKanji.includes(kanjiId);

  return {
    selectedKanji,
    toggleKanji,
    isSelected,
  };
}