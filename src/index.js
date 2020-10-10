

import HangmanGame from './Hangman'
import getPuzzle from './request'


let game 

const puzzleElement = document.querySelector('#get-puzzle')

const remainingGuessesElement = document.querySelector('#remaining-guesses')


window.addEventListener('keypress' , function(ev) {

   const guess = String.fromCharCode(ev.charCode)
   game.makeGuess(guess)
   render()
   

})


const render = () => {

   puzzleElement.innerHTML = ''

   const puzzle = game.puzzle.split('')

   puzzle.forEach( letter => {
   
      const letterElement = document.createElement('span')
      if(letter === ' '){
         letterElement.setAttribute('style','border:0')
      }
      letterElement.textContent = letter
      puzzleElement.appendChild(letterElement)
      
      /*puzzleElement.innerHTML += `<span>${letter}</span>`*/

   })

   remainingGuessesElement.innerHTML = game.statusMessage
}


const startGame = async () => {

   const puzzle = await getPuzzle('2')

   game = new HangmanGame(puzzle, 5)

   render()

}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()