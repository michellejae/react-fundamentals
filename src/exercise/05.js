// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

// MAIN
// const smallBox = <div style={{backgroundColor:'lightblue', fontStyle: 'italic'}} className="box--small box">small lightblue box</div>
// const mediumBox = <div style={{backgroundColor:'pink', fontStyle: 'italic'}} className="box--medium box">medium pink box</div>
// const largeBox = <div style={{backgroundColor:'orange', fontStyle: 'italic'}} className="box--large box">large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

function Box({style, className = '', ...otherProps}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}




// EXTRA CREDIT PART 1 & 2

// part two is adding in sizeClassName

// function Box({style, size, className = '', ...otherProps}) {
//   const sizeClassName = size ? `box--${size}` : ''
//   return (
//     <div 
//     className={`box ${className} ${sizeClassName}`} 
//     style={{fontStyle:'italic', ...style}} 
//     {...otherProps}
//     />
//   )
// }
// function App() {
//   return (
//     <div>
//       <Box size="small"  style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
//       <Box size ="medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
//       <Box size="large" style={{backgroundColor: 'orange'}}>large orange box</Box>
//       <Box>sizeless box</Box>
//     </div>
//   )
// }

export default App
