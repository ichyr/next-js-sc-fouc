import React from 'react'
import style from 'styled-components'
import css from 'next/css'

// Example of a component styled by styled-components
const StyledComponent = style.div`
  background-color: #000000;
  color: white;
`;

// Example from Next's home page
const glamorStyle = css({
  color: 'red',
  ':hover': {
    color: 'blue'
  },
  '@media (max-width: 500px)': {
    color: 'rebeccapurple'
  }
})

export default () => {
  return (
    <div>
      <div style={{color:'green'}}>I am being styled by React's built in styling</div>
      <StyledComponent>I am being styled by styled components</StyledComponent>
      <div className={glamorStyle}>I am being styled by next & glamor</div>
    </div>
  )
}
