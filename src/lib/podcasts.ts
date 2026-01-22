import type { Podcast, AudioTrack, TranscriptData } from '../types/podcast';
import fs from 'node:fs';
import path from 'node:path';

const RESOURCES_DIR = 'public/resources';

const TRACK_LABELS: Record<string, string> = {
  dg: 'Dialogue',
  pb: 'Vocabulary',
  rv: 'Review'
};

export function parseTimestamp(timestamp: string): number {
  const [minutes, seconds] = timestamp.split(':').map(Number);
  return minutes * 60 + seconds;
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export async function getAllPodcasts(): Promise<Podcast[]> {
  const resourcesPath = path.join(process.cwd(), RESOURCES_DIR);
  const folders = fs.readdirSync(resourcesPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const podcasts: Podcast[] = [];

  for (const folder of folders) {
    const podcast = await getPodcastById(folder);
    if (podcast) {
      podcasts.push(podcast);
    }
  }

  return podcasts.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

export async function getPodcastById(id: string): Promise<Podcast | null> {
  const folderPath = path.join(process.cwd(), RESOURCES_DIR, id);

  if (!fs.existsSync(folderPath)) {
    return null;
  }

  const files = fs.readdirSync(folderPath);
  const mp3Files = files.filter(f => f.endsWith('.mp3'));

  const tracks: AudioTrack[] = [];

  for (const mp3File of mp3Files) {
    const match = mp3File.match(/([a-z]{2})\.mp3$/);
    if (!match) continue;

    const trackType = match[1];
    const jsonFile = mp3File.replace('.mp3', '.json');
    const jsonPath = path.join(folderPath, jsonFile);

    if (!fs.existsSync(jsonPath)) continue;

    const transcriptData: TranscriptData = JSON.parse(
      fs.readFileSync(jsonPath, 'utf-8')
    );

    tracks.push({
      id: trackType,
      label: TRACK_LABELS[trackType] || trackType.toUpperCase(),
      audioPath: `/resources/${id}/${mp3File}`,
      transcript: transcriptData
    });
  }

  const trackOrder = ['dg', 'pb', 'rv'];
  tracks.sort((a, b) => trackOrder.indexOf(a.id) - trackOrder.indexOf(b.id));

  return {
    id,
    title: `Episode ${id}`,
    tracks
  };
}
