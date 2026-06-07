import { useState, useEffect, useCallback } from 'react'
import { GameState, Quest } from '../data/types'
import {
  loadGameState,
  saveGameState,
  getInitialGameState,
  completeQuest,
  addExperience,
  addGold,
} from '../utils/gameLogic'
import { MONSTERS } from '../data/constants'

export const useGameState = () => {
  const [state, setState] = useState<GameState>(getInitialGameState())
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage
  useEffect(() => {
    const loaded = loadGameState()
    setState(loaded)
    setIsLoaded(true)
  }, [])

  // Save to localStorage when state changes
  useEffect(() => {
    if (isLoaded) {
      saveGameState(state)
    }
  }, [state, isLoaded])

  const addQuest = useCallback((title: string, difficulty: 'easy' | 'normal' | 'hard') => {
    const monsterTypes = Object.values(MONSTERS).filter(m => m.difficulty === difficulty)
    const monsterType = monsterTypes[Math.floor(Math.random() * monsterTypes.length)]

    const newQuest: Quest = {
      id: `quest_${Date.now()}`,
      title,
      difficulty,
      monsterType,
      hp: monsterType.baseHp,
      maxHp: monsterType.baseHp,
      completed: false,
      damage: 0,
      createdAt: Date.now(),
    }

    setState(prev => ({
      ...prev,
      quests: [...prev.quests, newQuest],
    }))
  }, [])

  const damageQuest = useCallback((questId: string, damage: number) => {
    setState(prev => ({
      ...prev,
      quests: prev.quests.map(q =>
        q.id === questId ? { ...q, hp: Math.max(0, q.hp - damage), damage } : q
      ),
    }))
  }, [])

  const finishQuest = useCallback((questId: string) => {
    setState(prev => completeQuest(prev, questId))
  }, [])

  const updatePlayerName = useCallback((name: string) => {
    setState(prev => ({
      ...prev,
      player: {
        ...prev.player,
        name,
      },
    }))
  }, [])

  const selectPet = useCallback((petType: 'fox' | 'dragon' | 'owl') => {
    setState(prev => ({
      ...prev,
      player: {
        ...prev.player,
        pet: {
          id: petType,
          name: petType === 'fox' ? 'Rusty' : petType === 'dragon' ? 'Ember' : 'Sage',
          type: petType,
          level: 1,
          affection: 0,
        },
      },
    }))
  }, [])

  return {
    state,
    setState,
    isLoaded,
    addQuest,
    damageQuest,
    finishQuest,
    updatePlayerName,
    selectPet,
  }
}
