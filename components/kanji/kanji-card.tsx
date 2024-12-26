'use client';

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { KanjiData } from "@/lib/types";

interface KanjiCardProps {
  kanji: KanjiData;
  isSelected: boolean;
  onToggle: (id: number) => void;
}

export function KanjiCard({ kanji, isSelected, onToggle }: KanjiCardProps) {
  return (
    <Card 
      className="p-4 cursor-pointer hover:bg-accent transition-colors"
      onClick={() => onToggle(kanji.id)}
    >
      <div className="flex items-center space-x-4">
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggle(kanji.id)}
          className="pointer-events-none"
        />
        <div className="flex items-center space-x-6">
          <span className="text-3xl font-bold min-w-[2ch]">
            {kanji.character}
          </span>
          <div className="space-y-1">
            <p className="text-sm font-medium">
              読み方: {kanji.reading}
            </p>
            <p className="text-sm text-muted-foreground">
              意味: {kanji.meaning}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}