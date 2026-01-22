export interface TranscriptSegment {
  speaker: string;
  timestamp: string;
  content: string;
  language: string;
  language_code: string;
  translation: string | null;
  emotion: string;
}

export interface TranscriptData {
  summary: string;
  segments: TranscriptSegment[];
}

export interface AudioTrack {
  id: string;
  label: string;
  audioPath: string;
  transcript: TranscriptData;
}

export interface Podcast {
  id: string;
  title: string;
  tracks: AudioTrack[];
}
