import React from 'react'
import styled from 'styled-components'
import { previous, next } from 'mdx-deck'

const Button = styled.div([], {
  cursor: 'pointer',
  width: '64px',
  height: '100vh'
})
const Previous = styled(Button)([], {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
})
const Next = styled(Button)([], {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
})

export default class Provider extends React.Component {
  render () {
    const {
      children,
      mode,
      index,
      length,
      update,
    } = this.props

    return (
      <React.Fragment>
        {children}
        <Previous
          role='button'
          title='Previous Slide'
          onClick={e => {
            update(previous)
          }}
        />
        <Next
          role='button'
          title='Next Slide'
          onClick={e => {
            update(next)
          }}
        />
      </React.Fragment>
    )
  }
}