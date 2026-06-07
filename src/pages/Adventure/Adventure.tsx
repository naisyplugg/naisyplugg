import React from 'react'
import { motion } from 'framer-motion'
import { GameState } from '../../data/types'
import styles from './Adventure.module.css'

interface AdventureProps {
  gameState: GameState;
  onNewQuestClick: () => void;
}

export const Adventure: React.FC<AdventureProps> = ({ gameState, onNewQuestClick }) => {
  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.content}>
        <motion.button
          className={styles.newQuestBtn}
          onClick={onNewQuestClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className={styles.icon}>✨</span>
          <span className={styles.text}>New Quest</span>
        </motion.button>

        {gameState.quests.length === 0 ? (
          <motion.div
            className={styles.emptyState}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className={styles.emptyIcon}>🏰</div>
            <h3>No Quests Available</h3>
            <p>Create your first quest to begin your adventure!</p>
          </motion.div>
        ) : (
          <motion.div
            className={styles.questsList}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          >
            {/* Quests will be rendered here by parent component */}
          </motion.div>
        )}

        <div className={styles.stats}>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Quests Active</div>
            <div className={styles.statValue}>{gameState.quests.length}</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Completed Today</div>
            <div className={styles.statValue}>{gameState.completedToday}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
