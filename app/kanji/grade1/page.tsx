'use client';

import { KanjiSelector } from "@/components/kanji-selector";
import { getKanjiByGrade } from "@/lib/kanji-data";
import { useEffect, useState } from "react";
import type { KanjiData } from "@/lib/types";

export default function FirstGradeKanjiPage() {
  const [kanjiList, setKanjiList] = useState<KanjiData[]>([]);

  useEffect(() => {
    const data = getKanjiByGrade(1);
    setKanjiList(data);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">1年生の漢字</h1>
      <KanjiSelector kanjiList={kanjiList} grade={1} />
    </div>
  );
}