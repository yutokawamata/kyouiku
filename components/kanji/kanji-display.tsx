'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import { KanjiData } from "@/lib/types";

interface KanjiDisplayProps {
  kanji: KanjiData;
  showImage: boolean;
  onKanjiClick: () => void;
  currentIndex: number;
  totalCount: number;
}

export function KanjiDisplay({ 
  kanji, 
  showImage, 
  onKanjiClick, 
  currentIndex, 
  totalCount 
}: KanjiDisplayProps) {
  return (
    <Card className="w-full max-w-2xl p-8">
      {!showImage ? (
        <Button
          className="w-full h-64 text-8xl font-bold hover:scale-105 transition-transform"
          variant="outline"
          onClick={onKanjiClick}
        >
          {kanji.character}
        </Button>
      ) : (
        <div className="relative w-full h-64">
          <Image
            src={`https://source.unsplash.com/featured/?${kanji.meaning}`}
            alt={kanji.meaning}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="mt-4 text-center">
        <p className="text-xl">
          {currentIndex + 1} / {totalCount}
        </p>
      </div>
    </Card>
  );
}