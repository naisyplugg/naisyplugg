import { MonsterType } from './types'

export const MONSTERS: Record<string, MonsterType> = {
  forest_slime: {
    id: 'forest_slime',
    name: 'Forest Slime',
    difficulty: 'easy',
    baseHp: 20,
    rewards: {
      exp: 50,
      gold: 25,
    },
    description: 'A small gelatinous creature from the forest depths.',
  },
  stone_golem: {
    id: 'stone_golem',
    name: 'Stone Golem',
    difficulty: 'normal',
    baseHp: 50,
    rewards: {
      exp: 150,
      gold: 75,
    },
    description: 'An ancient guardian made of solid rock.',
  },
  sleepy_dragon: {
    id: 'sleepy_dragon',
    name: 'Sleepy Dragon',
    difficulty: 'hard',
    baseHp: 100,
    rewards: {
      exp: 300,
      gold: 150,
    },
    description: 'A magnificent dragon, currently dozing.',
  },
}

export const LOCATIONS = [
  {
    id: 'valley',
    name: 'Valley of Tasks',
    description: 'Where your daily quests begin',
    icon: '🌻',
  },
  {
    id: 'forest',
    name: 'Forest of Habits',
    description: 'Challenge yourself with recurring tasks',
    icon: '🌲',
  },
  {
    id: 'mountain',
    name: 'Mountain of Discipline',
    description: 'The hardest challenges await',
    icon: '⛰️',
  },
  {
    id: 'castle',
    name: 'Castle of Deadlines',
    description: 'Where urgent quests live',
    icon: '🏰',
  },
]

export const ACHIEVEMENTS = [
  {
    id: 'first_steps',
    name: 'First Steps',
    description: 'Complete your first quest',
    maxProgress: 1,
  },
  {
    id: 'monster_slayer_10',
    name: 'Monster Slayer I',
    description: 'Defeat 10 monsters',
    maxProgress: 10,
  },
  {
    id: 'monster_slayer_50',
    name: 'Monster Slayer II',
    description: 'Defeat 50 monsters',
    maxProgress: 50,
  },
  {
    id: 'dragon_killer',
    name: 'Dragon Slayer',
    description: 'Defeat 5 dragons',
    maxProgress: 5,
  },
  {
    id: 'streak_7',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    maxProgress: 7,
  },
  {
    id: 'streak_30',
    name: 'Monthly Champion',
    description: 'Maintain a 30-day streak',
    maxProgress: 30,
  },
  {
    id: 'level_10',
    name: 'Seasoned Adventurer',
    description: 'Reach level 10',
    maxProgress: 10,
  },
  {
    id: 'gold_1000',
    name: 'Treasure Hunter',
    description: 'Accumulate 1000 gold',
    maxProgress: 1000,
  },
]

export const PETS = [
  {
    id: 'fox',
    name: 'Rusty',
    description: 'A clever fox companion with golden fur',
  },
  {
    id: 'dragon',
    name: 'Ember',
    description: 'A small dragon with a warm heart',
  },
  {
    id: 'owl',
    name: 'Sage',
    description: 'A wise owl who watches over your progress',
  },
]
