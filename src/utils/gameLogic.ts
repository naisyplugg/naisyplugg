import { GameState, Quest, Achievement } from './types'
import { MONSTERS, ACHIEVEMENTS } from './constants'

const STORAGE_KEY = 'task_hunter_state'
const EXP_PER_LEVEL = 500

export const getInitialGameState = (): GameState => ({
  player: {
    name: 'Traveler',
    level: 1,
    exp: 0,
    expToNextLevel: EXP_PER_LEVEL,
    gold: 100,
    streak: 0,
    pet: null,
  },
  quests: [],
  achievements: ACHIEVEMENTS.map(a => ({
    ...a,
    icon: '',
    progress: 0,
    completed: false,
  })),
  bestiary: [],
  locations: [
    { id: 'valley', name: 'Valley of Tasks', description: '', unlocked: true, icon: '' },
    { id: 'forest', name: 'Forest of Habits', description: '', unlocked: false, icon: '' },
    { id: 'mountain', name: 'Mountain of Discipline', description: '', unlocked: false, icon: '' },
    { id: 'castle', name: 'Castle of Deadlines', description: '', unlocked: false, icon: '' },
  ],
  completedToday: 0,
})

export const saveGameState = (state: GameState): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export const loadGameState = (): GameState => {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : getInitialGameState()
}

export const calculateDamage = (difficulty: 'easy' | 'normal' | 'hard'): number => {
  const damages = {
    easy: 10,
    normal: 25,
    hard: 50,
  }
  return damages[difficulty]
}

export const calculateRewards = (
  difficulty: 'easy' | 'normal' | 'hard'
): { exp: number; gold: number } => {
  const monsterType = Object.values(MONSTERS).find(m => m.difficulty === difficulty)
  if (!monsterType) {
    return { exp: 0, gold: 0 }
  }
  return monsterType.rewards
}

export const addExperience = (state: GameState, amount: number): GameState => {
  let newExp = state.player.exp + amount
  let newLevel = state.player.level
  let expToNextLevel = state.player.expToNextLevel

  while (newExp >= expToNextLevel) {
    newExp -= expToNextLevel
    newLevel += 1
    expToNextLevel = EXP_PER_LEVEL
  }

  return {
    ...state,
    player: {
      ...state.player,
      exp: newExp,
      level: newLevel,
      expToNextLevel,
    },
  }
}

export const addGold = (state: GameState, amount: number): GameState => ({
  ...state,
  player: {
    ...state.player,
    gold: state.player.gold + amount,
  },
})

export const removeQuest = (state: GameState, questId: string): GameState => ({
  ...state,
  quests: state.quests.filter(q => q.id !== questId),
})

export const updateAchievementProgress = (
  state: GameState,
  achievementId: string,
  progress: number
): GameState => ({
  ...state,
  achievements: state.achievements.map(a =>
    a.id === achievementId
      ? {
          ...a,
          progress: Math.min(progress, a.maxProgress),
          completed: progress >= a.maxProgress || a.completed,
          completedAt: progress >= a.maxProgress && !a.completed ? Date.now() : a.completedAt,
        }
      : a
  ),
})

export const completeQuest = (state: GameState, questId: string): GameState => {
  const quest = state.quests.find(q => q.id === questId)
  if (!quest) return state

  const rewards = calculateRewards(quest.difficulty)
  let newState = addExperience(state, rewards.exp)
  newState = addGold(newState, rewards.gold)
  newState = removeQuest(newState, questId)
  newState = {
    ...newState,
    completedToday: newState.completedToday + 1,
  }

  // Update achievements
  newState = updateAchievementProgress(newState, 'monster_slayer_10', newState.completedToday)
  newState = updateAchievementProgress(newState, 'monster_slayer_50', newState.completedToday)

  if (quest.difficulty === 'hard') {
    const dragonDefeated = newState.achievements.find(a => a.id === 'dragon_killer')?.progress || 0
    newState = updateAchievementProgress(newState, 'dragon_killer', dragonDefeated + 1)
  }

  return newState
}

export const selectPet = (state: GameState, petType: 'fox' | 'dragon' | 'owl'): GameState => ({
  ...state,
  player: {
    ...state.player,
    pet: {
      id: petType,
      name: petType === 'fox' ? 'Rusty' : petType === 'dragon' ? 'Ember' : 'Sage',
      type: petType,
      level: 1,
      affection: 0,
    },
  },
})

export const resetDailyProgress = (state: GameState): GameState => ({
  ...state,
  completedToday: 0,
})
