import React from 'react'

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

const Button = ({ onClick, children, className }) => (
  <button onClick={onClick} className={`${_className} ${className}`}>
    {children}
  </button>
)

export default Button
