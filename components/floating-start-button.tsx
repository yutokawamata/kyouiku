'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PlayCircle } from "lucide-react";

export function FloatingStartButton() {
  const router = useRouter();

  return (
    <Button
      size="lg"
      className="fixed bottom-8 left-1/2 -translate-x-1/2 text-xl px-8 py-6 shadow-lg transition-all hover:scale-105 flex items-center gap-2"
      onClick={() => router.push('/grades')}
    >
      <PlayCircle className="w-6 h-6" />
      Start
    </Button>
  );
}