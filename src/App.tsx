import React, { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ParallaxBackground } from './components/ParallaxBackground/ParallaxBackground'
import { HeroHeader } from './components/HeroHeader/HeroHeader'
import { QuestModal } from './components/QuestModal/QuestModal'
import { QuestCard } from './components/QuestCard/QuestCard'
import { BottomNavigation, TabType } from './components/BottomNavigation/BottomNavigation'
import { Adventure } from './pages/Adventure/Adventure'
import { World } from './pages/World/World'
import { Bestiary } from './pages/Bestiary/Bestiary'
import { Achievements } from './pages/Achievements/Achievements'
import { useGameState } from './hooks/useGameState'
import styles from './App.module.css'

function App() {
  const { state, isLoaded, addQuest, damageQuest, finishQuest, updatePlayerName } = useGameState()
  const [activeTab, setActiveTab] = useState<TabType>('adventure')
  const [modalOpen, setModalOpen] = useState(false)

  const handleAddQuest = useCallback(
    (title: string, difficulty: 'easy' | 'normal' | 'hard') => {
      addQuest(title, difficulty)
    },
    [addQuest]
  )

  const handleAttackQuest = useCallback(
    (questId: string, damage: number) => {
      damageQuest(questId, damage)
    },
    [damageQuest]
  )

  const handleCompleteQuest = useCallback(
    (questId: string) => {
      finishQuest(questId)
    },
    [finishQuest]
  )

  if (!isLoaded) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingContent}>Loading your adventure...</div>
      </div>
    )
  }

  return (
    <div className={styles.app}>
      {/* Background */}
      <ParallaxBackground />

      {/* Main Content */}
      <div className={styles.container}>
        {/* Hero Header */}
        <HeroHeader gameState={state} onNameClick={() => {}} />

        {/* Pages */}
        <div className={styles.pages}>
          <AnimatePresence mode="wait">
            {activeTab === 'adventure' && (
              <Adventure
                key="adventure"
                gameState={state}
                onNewQuestClick={() => setModalOpen(true)}
              />
            )}
            {activeTab === 'world' && <World key="world" />}
            {activeTab === 'bestiary' && <Bestiary key="bestiary" gameState={state} />}
            {activeTab === 'achievements' && <Achievements key="achievements" gameState={state} />}
          </AnimatePresence>

          {/* Quests in Adventure Tab */}
          {activeTab === 'adventure' && (
            <div className={styles.questsContainer}>
              <AnimatePresence>
                {state.quests.map(quest => (
                  <QuestCard
                    key={quest.id}
                    quest={quest}
                    onAttack={handleAttackQuest}
                    onComplete={handleCompleteQuest}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Modals */}
      <QuestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddQuest}
      />
    </div>
  )
}

export default App
