import React from 'react'
import cx from 'classnames'

const _className = [
  'border',
  'py-4',
  'border-red-lighter',
  'text-center',
  'text-pink-dark',
].join(' ')

const getClassName = (_className, className, disabled) => cx(
  _className,
  className,
)

const Error = ({ children, className }) => (
  <div className={getClassName(_className, className)}>
    {children}
  </div>
)

export default Error
