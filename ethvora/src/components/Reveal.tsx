'use client'
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
}

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
  /** Stagger direct children instead of animating the wrapper */
  stagger?: boolean
  staggerDelay?: number
  as?: 'div' | 'section' | 'li' | 'span' | 'article' | 'header' | 'footer'
}

/**
 * Shared scroll-triggered reveal. Animates once when the element enters the viewport.
 * Use `stagger` to cascade direct children with a rising fade.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  style,
  stagger = false,
  staggerDelay = 0.1,
  as = 'div',
}: RevealProps) {
  const offset = offsets[direction]

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
    },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: [0.22, 0.61, 0.36, 1] },
    },
  }

  if (stagger) {
    const MotionTag = motion[as] as typeof motion.div
    return (
      <MotionTag
        className={className}
        style={style}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {children}
      </MotionTag>
    )
  }

  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      variants={childVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

/** Child item for use inside a <Reveal stagger> wrapper. */
export function RevealItem({
  children,
  className,
  style,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  as?: 'div' | 'li' | 'span' | 'article'
}) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      variants={fadeUp}
    >
      {children}
    </MotionTag>
  )
}
