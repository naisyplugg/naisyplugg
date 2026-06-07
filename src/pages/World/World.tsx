import React from 'react'
import { motion } from 'framer-motion'
import styles from './World.module.css'

export const World: React.FC = () => {
  const locations = [
    { id: 'valley', name: 'Valley of Tasks', icon: '🌻', unlocked: true, progress: 100 },
    { id: 'forest', name: 'Forest of Habits', icon: '🌲', unlocked: true, progress: 60 },
    { id: 'mountain', name: 'Mountain of Discipline', icon: '⛰️', unlocked: true, progress: 30 },
    { id: 'castle', name: 'Castle of Deadlines', icon: '🏰', unlocked: false, progress: 0 },
  ]

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>World Map</h2>

        <div className={styles.map}>
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className={`${styles.location} ${location.unlocked ? styles.unlocked : styles.locked}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={location.unlocked ? { scale: 1.05 } : {}}
            >
              <div className={styles.locationIcon}>{location.icon}</div>
              <h3 className={styles.locationName}>{location.name}</h3>

              {location.unlocked ? (
                <div className={styles.progressSection}>
                  <div className={styles.progressBar}>
                    <motion.div
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      animate={{ width: `${location.progress}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                  <span className={styles.progressText}>{location.progress}%</span>
                </div>
              ) : (
                <div className={styles.lockBadge}>🔒 Locked</div>
              )}
            </motion.div>
          ))}
        </div>

        <div className={styles.info}>
          <p>Complete quests to explore new locations and earn rewards!</p>
        </div>
      </div>
    </motion.div>
  )
}
