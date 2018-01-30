## TLTR

I've took ( https://github.com/jimthedev/next-styled-components-fouc ) and applied changes from official example of next-with-styled-components ( https://github.com/zeit/next.js/tree/master/examples/with-styled-components )

![PErformance tab](./static/01_performanceTab.png)

## Getting started

```
clone this repository and cd into the directory
npm install
npm run dev
```

Hit refresh and notice the black background-color takes much longer to appear than the green color styles.
See a further description of the problem below.

Please see my package-lock.json for specific version used, including:

- next @ 4.2.3
- styled-components @ 2.4.0
- babel-plugin-styled-components @ 1.5.0

## The problem

When using styled-components with next.js you get a FOUC (flash of unstyled content).

If you use react's built in styles then you do not get this issue.

I am thinking that this is a problem with styled-components not being bundled into the server rendered example perhaps?

## Based on repo 

https://github.com/jimthedev/next-styled-components-fouc
