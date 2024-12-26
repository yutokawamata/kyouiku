'use client';

import { useCallback } from 'react';

export function useKanjiAudio() {
  const playAudio = useCallback((text: string) => {
    // 既存の音声をキャンセル
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 1.0; // 標準速度
    utterance.pitch = 1.0; // 標準ピッチ
    utterance.volume = 1.0; // 最大音量

    // 音声の読み込みを待ってから再生
    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(voice => voice.lang === 'ja-JP');
    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
    }

    window.speechSynthesis.speak(utterance);
  }, []);

  return { playAudio };
}