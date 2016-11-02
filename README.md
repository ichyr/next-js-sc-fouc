
## Getting started

```
clone this repository and cd into the directory
npm install
npm run dev
```

Hit refresh and notice the black background-color takes much longer to appear than the red or green color styles.
See a further description of the problem below.

I have hard coded my next and styled components versions into my package.json and included my .next directory
in the event that it might be useful.

## The problem

When using styled-components with next.js you get a FOUC (flash of unstyled content).

If you use either react's built in styles or use glamor (which next recommends using) then you do not get this issue.

I am thinking that this is a problem with styled-components not being bundled into the server rendered example perhaps? Not quite sure but at least for now it would keep me using glamor over styled components.

## Steps to reproduce this repo

```
mkdir next-styled-components-fouc
cd next-styled-components-fouc
git init
npm init
npm install --save next styled-components
mkdir pages
touch pages/index.js
```

Copy the following to pages/index.js

```
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

```

Add a script to the package.json like this:

```
{
  "scripts": {
    "dev": "next"
  }
}
```

and run:

```
npm run dev
```
