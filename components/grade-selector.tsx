'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const grades = [
  { id: 1, label: "1年生", path: "/kanji/grade1" },
  { id: 2, label: "2年生", path: "/kanji/grade2" },
  { id: 3, label: "3年生", path: "/kanji/grade3" },
] as const;

export function GradeSelector() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 gap-4">
      {grades.map((grade) => (
        <Button
          key={grade.id}
          size="lg"
          className="text-xl px-8 py-6 shadow-lg transition-all hover:scale-105"
          onClick={() => router.push(grade.path)}
        >
          {grade.label}
        </Button>
      ))}
    </div>
  );
}