import {Module} from '../core/module'

export class ClicksModule extends Module {
  constructor(text) {
    super("clicks", text)
    }

    static countClicks(ms = 3000) {
        let score = 0
        const mainBody = document.querySelector('body')
        const toShowScore = document.createElement('h1')

        setTimeout(() => {
            toShowScore.innerHTML = ''
            window.removeEventListener("click", clickOnScreen)
            alert('Молодец! у тебя ' + score + ' очков')
            this.alreadyRunning = false
        }, ms)

        function clickOnScreen(event) {
            score++
            toShowScore.textContent = 'Ты нажал ' + score + ' раз'
            mainBody.append(toShowScore)
        }
        window.addEventListener("click", clickOnScreen)
    }

    trigger() {
        const clickgame = ClicksModule.countClicks()
    }
}
