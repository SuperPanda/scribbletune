import { getScale, scales } from './scale';
import { getChord, chords } from './chord';
import { clip } from './clip';
import {
  getChordDegrees,
  getChordsByProgression,
  progression,
} from './progression';
import { arp } from './arp';
import { midi } from './midi';
import { Session } from './session';

interface NoteObject {
  note: string[] | string | null;
  length: number;
  level: number;
}

interface NVP<T> {
  [key: string]: T;
}

interface TPD {
  T: string[]; // Tonic
  P: string[]; // Predominant (or subdominant)
  D: string[]; // Dominant
}

type SizzleStyle = 'sin' | 'cos' | 'rampUp' | 'rampDown';
type progressionScale = 'major' | 'minor' | 'M' | 'm';

interface ClipParams {
  notes: string | (string | string[])[];
  pattern: string;
  shuffle?: boolean;
  arpegiate?: boolean;
  subdiv?: string;
  amp?: number;
  sizzle?: boolean | SizzleStyle;
  accent?: string;
  accentLow?: number;
  sizzleReps?: number;
  randomNotes?: null | string | (string | string[])[];
  synth?: any;
  instrument?: any;
  sample?: any;
  buffer?: any;
  samples?: any;
  sampler?: any;
  player?: any;
  dur?: string;
  effects?: string[];
  volume?: number;
}

interface ChannelParams extends ClipParams {
  idx?: number;
  clips?: any;
}

type SeqFn = (time: string, el: string) => void;

declare var Tone: any;
declare var require: NodeRequire;
declare module 'jsmidgen';



export {
  getScale as scale,
  getScale as mode,
  scales,
  scales as modes,
  getChord as chord,
  chords,
  clip,
  getChordDegrees,
  getChordsByProgression,
  progression,
  arp,
  midi,
  Session,
};
