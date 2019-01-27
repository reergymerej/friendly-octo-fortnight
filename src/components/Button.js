import React from 'react'
import cx from 'classnames'

const _className = [
  'bg-transparent',
  'hover:bg-blue',
  'text-blue-dark',
  'font-semibold',
  'hover:text-white',
  'py-2',
  'px-4',
  'border',
  'border-blue',
  'hover:border-transparent',
  'rounded',
].join(' ')

const getClassName = (_className, className, disabled) => cx(
  _className,
  className,
  {
    'opacity-50 cursor-not-allowed': disabled,
  }
)

const Button = ({ onClick, disabled, children, className }) => (
  <button onClick={onClick} disabled={disabled} className={getClassName(_className, className, disabled)}>
    {children}
  </button>
)

export default Button
