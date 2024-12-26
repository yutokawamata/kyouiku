'use client';

import { KanjiPractice } from "@/components/kanji-practice";
import { useSearchParams } from "next/navigation";
import { getKanjiByGrade } from "@/lib/kanji-data";
import { useEffect, useState } from "react";
import type { KanjiData } from "@/lib/types";

export default function PracticePage() {
  const searchParams = useSearchParams();
  const [selectedKanji, setSelectedKanji] = useState<KanjiData[]>([]);
  
  useEffect(() => {
    const kanjiIds = searchParams.get('kanji')?.split(',').map(Number) || [];
    const grade = searchParams.get('grade');
    
    if (grade && kanjiIds.length > 0) {
      const allKanji = getKanjiByGrade(Number(grade));
      const filtered = allKanji.filter(k => kanjiIds.includes(k.id));
      setSelectedKanji(filtered);
    }
  }, [searchParams]);

  if (selectedKanji.length === 0) return null;

  return <KanjiPractice selectedKanji={selectedKanji} />;
}