document.addEventListener('DOMContentLoaded', () => {

    
    const compChoiceDisplay = document.getElementById('computer-choice')
    const userChoiceDisplay = document.getElementById("user-choice")
    const resultDisplay = document.getElementById('result')
    const resetBtn = document.getElementById('reset');

    // Buttons
    const choices = document.querySelectorAll('.btn')

    // Useful Variables
    let userChoice
    let result
    let compChoice

    // Result output
    const botWin = 'You Lost, JS Bot wins! Better luck next time'
    const playerWin = 'You win!'

    // Disable Reset btn
    // Reset btn should be disabled on page load
    // its basic sense(I think)
    resetBtn.disabled = true;
    resetBtn.classList.add('disabled')


    // You used data attr. to display user choice
    // by looping through each btn n listening for clicks

    choices.forEach(choice => choice.addEventListener('click', (e) => {
        // this targets each btn data=attr. value
        userChoice = e.target.dataset.choice
        // this converts the values(strings) to uppercase
        userChoiceDisplay.textContent = userChoice.toUpperCase()

        compChoiceDisplay.textContent = 'thinking........'
        setTimeout(getComputerChoice, 1000)
        resultDisplay.textContent = 'Calculating.....'
        setTimeout(getResult, 1500)
        disableBtn()
        setTimeout(() => {
            resetBtn.disabled = false;
            resetBtn.classList.remove('disabled')

        }, 1600);


        // choices.disabled= true
    }))


    // Reset Everything
    function reset() {

        userChoiceDisplay.innerHTML = ''
        compChoiceDisplay.innerHTML = ''
        resultDisplay.innerHTML = ''
        resetBtn.classList.add('disabled')
        resetBtn.disabled = true;
        enableBtn()


    }

    // Disable RPS buttons after player selection

    function disableBtn() {
        document.getElementById('rock').disabled = true
        document.getElementById('paper').disabled = true

        document.getElementById('scissors').disabled = true
        choices.forEach(choice => {
            choice.classList.add('disabled')
        })

    }
    // ==============================================

    // Enable RPS buttons when Reset button's clicked
    function enableBtn() {
        document.getElementById('rock').disabled = false
        document.getElementById('paper').disabled = false

        document.getElementById('scissors').disabled = false
        choices.forEach(choice => {
            choice.classList.remove('disabled')
        })

    }
    // =============================================

    // mouse hover effect for RPS buttons
    // using forEach loop, add an event listenner to each button

    choices.forEach(choice => choice.addEventListener('mouseover', (e) => {
        e.target.textContent = e.target.dataset.choice + "?"
    }))

    choices.forEach(choice => choice.addEventListener('mouseleave', (e) => {
        e.target.textContent = e.target.dataset.choice

    }))
    choices.forEach(choice => choice.addEventListener('click', (e) => {
        e.target.textContent = e.target.dataset.choice + '!'
        setTimeout(() => {
            e.target.textContent = e.target.dataset.choice
        }, 1000);

    }))
    // ==================================================

    // get n returns a random choice from RPS array

    function getComputerChoice() {
        let myArr = []
        choices.forEach(choice => {
            myArr.push(choice.dataset.choice)
        })
        compChoice = myArr[Math.floor(Math.random() * myArr.length)]
        compChoiceDisplay.textContent = compChoice.toUpperCase()

    }
    // ======================================

    // here's where the magic happens
    // Rock beats Scissors,Paper beats Rock,Scissors beats Paper
    function getResult() {
        if (compChoice === userChoice) {
            result = 'Its a Tie!'
        }

        if (compChoice === 'rock' && userChoice === 'paper') {
            result = playerWin
        }

        if (compChoice === 'rock' && userChoice === 'scissors') {
            result = botWin
        }

        if (compChoice === 'paper' && userChoice === 'scissors') {
            result = playerWin

        }

        if (compChoice === 'paper' && userChoice === 'rock') {
            result = botWin
        }

        if (compChoice === 'scissors' && userChoice === 'paper') {
            result = botWin
        }

        if (compChoice === 'scissors' && userChoice === 'rock') {
            result = playerWin

        }

        resultDisplay.innerHTML = result

    }

    // =========================================

})

