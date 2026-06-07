import React from 'react'
import { motion } from 'framer-motion'
import { Quest } from '../../data/types'
import { MONSTERS } from '../../data/constants'
import {
  ForestSlime,
  StoneGolem,
  SleepyDragon,
} from '../../assets/illustrations'
import styles from './QuestCard.module.css'

interface QuestCardProps {
  quest: Quest;
  onAttack: (questId: string, damage: number) => void;
  onComplete: (questId: string) => void;
}

const DAMAGE_AMOUNTS = {
  easy: 10,
  normal: 25,
  hard: 50,
}

export const QuestCard: React.FC<QuestCardProps> = ({
  quest,
  onAttack,
  onComplete,
}) => {
  const healthPercentage = (quest.hp / quest.maxHp) * 100
  const isDefeated = quest.hp <= 0
  const monster = MONSTERS[quest.monsterType.id]
  const damage = DAMAGE_AMOUNTS[quest.difficulty]

  const handleAttack = () => {
    if (!isDefeated) {
      const newHp = quest.hp - damage
      onAttack(quest.id, damage)
      
      if (newHp <= 0) {
        setTimeout(() => onComplete(quest.id), 500)
      }
    }
  }

  const getMonsterIcon = () => {
    switch (quest.monsterType.id) {
      case 'forest_slime':
        return <ForestSlime className={styles.monsterImage} />
      case 'stone_golem':
        return <StoneGolem className={styles.monsterImage} />
      case 'sleepy_dragon':
        return <SleepyDragon className={styles.monsterImage} />
      default:
        return null
    }
  }

  return (
    <motion.div
      className={`${styles.card} ${isDefeated ? styles.defeated : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.3 }}
      layout
    >
      {/* Monster Area */}
      <motion.div
        className={styles.monsterArea}
        animate={isDefeated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.monsterContainer}>
          {getMonsterIcon()}
        </div>
      </motion.div>

      {/* Defeat Effect */}
      {isDefeated && (
        <motion.div
          className={styles.defeatedEffect}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.victoryText}>VICTORY!</div>
        </motion.div>
      )}

      {/* Content */}
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{quest.title}</h3>
            <p className={styles.monsterName}>{monster.name}</p>
          </div>
          <div className={styles.difficulty}>
            {quest.difficulty === 'easy' && '⭐'}
            {quest.difficulty === 'normal' && '⭐⭐'}
            {quest.difficulty === 'hard' && '⭐⭐⭐'}
          </div>
        </div>

        {/* HP Bar */}
        <div className={styles.hpSection}>
          <div className={styles.hpLabel}>
            <span>HP</span>
            <span className={styles.hpValue}>
              {Math.max(0, quest.hp)} / {quest.maxHp}
            </span>
          </div>
          <div className={styles.hpBar}>
            <motion.div
              className={styles.hpFill}
              initial={{ width: '100%' }}
              animate={{ width: `${Math.max(0, healthPercentage)}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                background:
                  healthPercentage > 50
                    ? 'linear-gradient(90deg, #4CAF50 0%, #66BB6A 100%)'
                    : healthPercentage > 25
                    ? 'linear-gradient(90deg, #FFB84D 0%, #FFC66D 100%)'
                    : 'linear-gradient(90deg, #FF6B6B 0%, #FF8787 100%)',
              }}
            >
              <div className={styles.hpShine}></div>
            </motion.div>
          </div>
        </div>

        {/* Rewards Preview */}
        <div className={styles.rewards}>
          <div className={styles.rewardItem}>
            <span className={styles.rewardIcon}>⚔️</span>
            <span className={styles.rewardText}>+{monster.rewards.exp} XP</span>
          </div>
          <div className={styles.rewardItem}>
            <span className={styles.rewardIcon}>💰</span>
            <span className={styles.rewardText}>+{monster.rewards.gold} Gold</span>
          </div>
        </div>

        {/* Attack Button */}
        <motion.button
          className={`${styles.attackBtn} ${isDefeated ? styles.disabled : ''}`}
          onClick={handleAttack}
          disabled={isDefeated}
          whileHover={!isDefeated ? { scale: 1.05 } : {}}
          whileTap={!isDefeated ? { scale: 0.95 } : {}}
        >
          <span className={styles.attackIcon}>⚔️</span>
          <span className={styles.attackText}>
            {isDefeated ? 'Defeated' : 'Attack'}
          </span>
        </motion.button>
      </div>

      {/* Damage Feedback */}
      {quest.damage > 0 && (
        <motion.div
          className={styles.damageFeedback}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
        >
          -{quest.damage}
        </motion.div>
      )}
    </motion.div>
  )
}
