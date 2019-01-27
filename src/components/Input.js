import React from 'react'

const inputClassName = [
  'appearance-none',
  'block',
  'w-full',
  'bg-grey-lighter',
  'text-grey-darker',
  'border',
  'border-grey-lighter',
  'rounded',
  'py-3',
  'px-4',
  'mb-3',
  'leading-tight',
  'focus:outline-none',
  'focus:bg-white',
  'focus:border-grey',
].join(' ')

const Input = (props) => (
  <div>
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor={props.id || props.label}>
      {props.label}
    </label>
    <input
      className={inputClassName}
      id={props.id || props.label}
      {...props}
    />
  </div>
)

export default Input
