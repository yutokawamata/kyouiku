import { promises as fs } from 'fs';
import path from 'path';

export interface KanjiData {
  id: number;
  character: string;
  reading: string;
  meaning: string;
}

export async function loadKanjiFromCsv(grade: number): Promise<KanjiData[]> {
  const filePath = path.join(process.cwd(), 'data', `grade${grade}-kanji.csv`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  
  const lines = fileContent.split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map((line) => {
    const values = line.split(',');
    return {
      id: parseInt(values[0]),
      character: values[1],
      reading: values[2],
      meaning: values[3],
    };
  });
}