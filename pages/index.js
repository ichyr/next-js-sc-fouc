import React from 'react'
import style from 'styled-components'


// Example of a component styled by styled-components
const StyledComponent = style.div`
  background-color: #000000;
  color: white;
`;


export default () => {
  return (
    <div>
      <div style={{color:'green'}}>I am being styled by React's built in styling</div>
      <StyledComponent>I am being styled by styled components</StyledComponent>
    </div>
  )
}
