export interface GameState {
  player: {
    name: string;
    level: number;
    exp: number;
    expToNextLevel: number;
    gold: number;
    streak: number;
    pet: Pet | null;
  };
  quests: Quest[];
  achievements: Achievement[];
  bestiary: BestiaryEntry[];
  locations: Location[];
  completedToday: number;
}

export interface Quest {
  id: string;
  title: string;
  difficulty: 'easy' | 'normal' | 'hard';
  monsterType: MonsterType;
  hp: number;
  maxHp: number;
  completed: boolean;
  damage: number;
  createdAt: number;
}

export interface MonsterType {
  id: string;
  name: string;
  difficulty: 'easy' | 'normal' | 'hard';
  baseHp: number;
  rewards: {
    exp: number;
    gold: number;
  };
  description: string;
}

export interface Pet {
  id: string;
  name: string;
  type: 'fox' | 'dragon' | 'owl';
  level: number;
  affection: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  completed: boolean;
  completedAt?: number;
}

export interface BestiaryEntry {
  monsterId: string;
  encounters: number;
  defeated: number;
  discovered: boolean;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  icon: string;
}
