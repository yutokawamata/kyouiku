import { Grade } from './types';

export const GRADES: Grade[] = [
  { id: 1, label: "1年生", path: "/kanji/grade1" },
  { id: 2, label: "2年生", path: "/kanji/grade2" },
  { id: 3, label: "3年生", path: "/kanji/grade3" },
] as const;