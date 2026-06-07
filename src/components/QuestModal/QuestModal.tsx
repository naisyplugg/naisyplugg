import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './QuestModal.module.css'

interface QuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, difficulty: 'easy' | 'normal' | 'hard') => void;
}

export const QuestModal: React.FC<QuestModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState('')
  const [difficulty, setDifficulty] = useState<'easy' | 'normal' | 'hard'>('normal')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    setIsSubmitting(true)
    setTimeout(() => {
      onSubmit(title, difficulty)
      setTitle('')
      setDifficulty('normal')
      setIsSubmitting(false)
      onClose()
    }, 600)
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <motion.div
              className={styles.content}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Header */}
              <div className={styles.header}>
                <h2>✨ New Quest</h2>
                <button
                  className={styles.closeBtn}
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  ✕
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Title Input */}
                <div className={styles.formGroup}>
                  <label htmlFor="quest-title" className={styles.label}>
                    Quest Name
                  </label>
                  <input
                    id="quest-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What task awaits you?"
                    className={styles.input}
                    maxLength={50}
                    disabled={isSubmitting}
                  />
                  <span className={styles.counter}>{title.length}/50</span>
                </div>

                {/* Difficulty Selector */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>Difficulty</label>
                  <div className={styles.difficultyGrid}>
                    {(['easy', 'normal', 'hard'] as const).map((diff) => (
                      <motion.button
                        key={diff}
                        type="button"
                        className={`${styles.difficultyBtn} ${
                          difficulty === diff ? styles.active : ''
                        }`}
                        onClick={() => setDifficulty(diff)}
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className={styles.difficultyIcon}>
                          {diff === 'easy' && '🌱'}
                          {diff === 'normal' && '🪨'}
                          {diff === 'hard' && '🐉'}
                        </span>
                        <span className={styles.difficultyLabel}>
                          {diff === 'easy' && 'Simple'}
                          {diff === 'normal' && 'Medium'}
                          {diff === 'hard' && 'Hard'}
                        </span>
                        <span className={styles.difficultyExp}>
                          {diff === 'easy' && '+50 XP'}
                          {diff === 'normal' && '+150 XP'}
                          {diff === 'hard' && '+300 XP'}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className={styles.actions}>
                  <motion.button
                    type="button"
                    className={styles.cancelBtn}
                    onClick={handleClose}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={!title.trim() || isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={isSubmitting ? { opacity: 0.7 } : { opacity: 1 }}
                  >
                    {isSubmitting ? 'Creating...' : 'Create Quest'}
                  </motion.button>
                </div>
              </form>

              {/* Info Text */}
              <p className={styles.infoText}>
                Your quest will become a monster to defeat!
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
