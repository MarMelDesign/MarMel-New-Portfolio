import { motion } from 'motion/react'
import { ArrowIcon } from './Icons'
import './Button.css'

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 3, y: -3, transition: { duration: 0.2, ease: 'easeOut' } },
}

export default function Button({
  children,
  variant = 'primary',
  showArrow = true,
  href,
  className = '',
  ...rest
}) {
  const classes = `mh-btn mh-btn--${variant} ${className}`.trim()

  const content = (
    <>
      <span className="mh-btn__label">{children}</span>
      {showArrow && (
        <motion.span className="mh-btn__icon" variants={arrowVariants}>
          <ArrowIcon size={variant === 'talk' ? 17 : 15} />
        </motion.span>
      )}
    </>
  )

  const Component = href ? motion.a : motion.button

  return (
    <Component
      className={classes}
      href={href}
      type={href ? undefined : 'button'}
      initial="rest"
      whileHover="hover"
      animate="rest"
      {...rest}
    >
      {content}
    </Component>
  )
}
