import { KanjiData } from './types';

const grade1Data = [
  { id: 1, character: "一", reading: "イチ", meaning: "one" },
  { id: 2, character: "右", reading: "ミギ", meaning: "right" },
  { id: 3, character: "雨", reading: "アメ", meaning: "rain" },
  // ... 残りの漢字データ
] as const;

export const getKanjiByGrade = (grade: number): KanjiData[] => {
  switch (grade) {
    case 1:
      return grade1Data;
    default:
      return [];
  }
};