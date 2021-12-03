import {useEffect, useState} from 'react'
import blueCandy from './images/bluecandy.jpg'
import greenCandy from './images/greencandy.jpg'
import orangeCandy from './images/orangecandy.jpg'
import purpleCandy from './images/purplecandy.png'
import redCandy from './images/redcandy.jpg'
import yellowCandy from './images/yellowcandy.png'
import blank from './images/blank.png'

const width=8
const candyColors =[
  blueCandy, greenCandy, orangeCandy, purpleCandy, redCandy, yellowCandy, ]
const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);

// Checking for Columns of Three of the Same color 
  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
        const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
        const decidedColor = currentColorArrangement[i]
        
            if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor )) {
            if(columnOfFour.every(square => currentColorArrangement[square] === decidedColor)) {
            columnOfFour.forEach(square => currentColorArrangement[square] = blank)
            return true
        }
    }
}
}

// Checking for Rows of Four of the Same color 
const checkForRowofFour = () => {
  for (let i = 0; i <= 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3]
      const decidedColor = currentColorArrangement[i]
      const notValid=[5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55,  62, 63, 64]
    if(notValid.includes(i)) continue
        if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor )) {
        if(rowOfFour.every(square => currentColorArrangement[square] === decidedColor )) {
          rowOfFour.forEach(square => currentColorArrangement[square] = blank)
          return true
    }
}
}
}

// Checking for Columns of Four of the Same color 
const checkForColumnOfThree = () => {
  for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + 1, i + 2]
      const decidedColor = currentColorArrangement[i]
    
        if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor )) {
        if(columnOfThree.every(square => currentColorArrangement[square] === decidedColor )) {
          columnOfThree.forEach(square => currentColorArrangement[square] = blank)
          return true
    }
}
}
}

// Checking for Rows of Three of the Same color 
const checkForRowofThree = () => {
  for (let i = 0; i <= 64; i++) {
      const rowOfThree = [i, i + width, i + width * 2]
      const decidedColor = currentColorArrangement[i]
      const notValid=[6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 63, 64]
    if(notValid.includes(i)) continue
        if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor )) {
        if(rowOfThree.every(square => currentColorArrangement[square] === decidedColor )) {
          rowOfThree.forEach(square => currentColorArrangement[square] = blank)
          return true
    }
}
}
}

const moveIntoSquarebelow = () => {
  for (let i = 0; i <= 55; i++ ) {
    //Defining the First Row of the Board.
    const firstRow = [0,1,2,3,4,5,6,7]
    const thisisFirstrow= firstRow.includes(i) 
    // If we are in the first row and Number is blank (empty string) then we generate a random color.
    if(thisisFirstrow & currentColorArrangement[i] === blank) {
    let randomNumber = Math.floor(Math.random() * candyColors.length)
    currentColorArrangement[i] = candyColors[randomNumber]
}
  if((currentColorArrangement[i + width]) === blank) {
      currentColorArrangement[i + width] = currentColorArrangement[i]
      currentColorArrangement[i]= blank
    }
  }
}
// Funcs-actions for Dragging Elements.
const dragStart = (e) => {
  console.log(e.target)
  console.log('drag start')
  setSquareBeingDragged(e.target)
}
const dragDrop = (e) => {
  console.log(e.target)
  console.log('drag drop')
  setSquareBeingReplaced(e.target)
}
const dragEnd = (e) => {
  // Getting the Attributes and replacing-draggin the sqaures in the board
  console.log(e.target)
  console.log('drag end')
  const squareBeingDraggedId =  parseInt(squareBeingDragged.getAttribute('data-id'))
  const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))

  currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
  currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

  const validMoves = [
    squareBeingDraggedId - 1,
    squareBeingDraggedId - width,
    squareBeingDraggedId + 1,
    squareBeingDraggedId + width
]
  // Settign Valid moves to drag on board

  const validMove = validMoves.includes(squareBeingReplacedId)

  const isColumnOfFour = checkForColumnOfFour()
  const isRowOfFour    = checkForRowofFour()
  const isColumnOfThree= checkForColumnOfThree()
  const isRowOfThree   = checkForRowofThree()

  // if the id being replaced is a valid move AND a row of three of four OR Column of three OR four 
  // then replace and set to null 
  if(squareBeingReplacedId && validMoves && 
    (isRowOfThree || isColumnOfThree  || isRowOfFour || isColumnOfFour  )) {
      setSquareBeingDragged(null)
      setSquareBeingReplaced(null)
} 
// Else leave it as the way it is 
else {
  currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
  currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
  setCurrentColorArrangement([...currentColorArrangement])
}
}

// Creating the Game Board (64 items)
const createBoard = () => {
  const randomColorArrangement = []
  for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
  }
  setCurrentColorArrangement(randomColorArrangement)
}

// Calling Function but only once (on load) using ,[]
useEffect(() => {
  createBoard()
}, [])

useEffect(() => {
 const timer = setInterval(() => {
  checkForColumnOfFour()
  checkForRowofFour()
  checkForColumnOfThree()
  checkForRowofThree()
  moveIntoSquarebelow()
  setCurrentColorArrangement([...currentColorArrangement])
  }, 100)
  return () => clearInterval(timer)
}, [checkForColumnOfFour, checkForRowofFour, checkForColumnOfThree, checkForRowofThree, moveIntoSquarebelow, currentColorArrangement])

console.log(currentColorArrangement)

return (
  <div className="app">
      <div className="game">
          {currentColorArrangement.map((candyColor, index) => (
              <img
      key = {index}
      src= {candyColor}
      alt = {candyColor}
      data-id = {index}
      draggable = {true}
      onDragStart={dragStart}
      onDragOver= {(e) => e.preventDefault()}
      onDragEnter ={(e) => e.preventDefault()}
      onDragLeave ={(e) => e.preventDefault()}
      onDrop={dragDrop}
      onDragEnd={dragEnd}
      />
    ))}
      </div>
    </div>
  )
}
export default App
