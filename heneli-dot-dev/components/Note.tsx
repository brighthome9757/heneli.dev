import React from 'react'

const known = new Set(['info', 'legacy', 'important'])

export function Note(props) {
  const { type, children } = props
  const className = ['note']

  if (known.has(type)) className.push(type)
  else {
    throw new Error('Unknown note type `' + type + '`')
  }

  return <div className={className.join(' ')}>{children}</div>
}
