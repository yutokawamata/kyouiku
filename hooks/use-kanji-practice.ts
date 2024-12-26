'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { KanjiData } from '@/lib/types';
import { useKanjiAudio } from './use-kanji-audio';

export function useKanjiPractice(selectedKanji: KanjiData[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const router = useRouter();
  const { playAudio } = useKanjiAudio();

  const currentKanji = selectedKanji[currentIndex];
  const isLastKanji = currentIndex === selectedKanji.length - 1;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showImage) {
      timer = setTimeout(() => {
        setShowImage(false);
        if (isLastKanji) {
          router.back();
        } else {
          setCurrentIndex(prev => prev + 1);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showImage, isLastKanji, router]);

  const handleKanjiClick = useCallback(() => {
    if (currentKanji) {
      // クリック時に即座に画像を表示
      setShowImage(true);
      // 少し遅延させて音声を再生（UXを改善）
      setTimeout(() => {
        playAudio(currentKanji.reading);
      }, 100);
    }
  }, [currentKanji, playAudio]);

  return {
    currentKanji,
    showImage,
    currentIndex,
    totalCount: selectedKanji.length,
    handleKanjiClick,
  };
}