let monthsBlock
let daysBlock
let hoursBlock
let minutesBlock
let secondesBlock

const getEndDate = async (data) => {
    const url = 'https://dev.easydev.group/api/to_start/'
    const config = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(url, config)
    return await response.json();
}

const timer = (endTime) => {
    const dateNow = new Date().getTime()
    const month = new Date(endTime - dateNow).getMonth();
    const days = new Date(endTime - dateNow).getDay();
    const hours = new Date(endTime - dateNow).getHours();
    const minutes = new Date(endTime - dateNow).getMinutes();
    const seconds = new Date(endTime - dateNow).getSeconds();

    monthsBlock.innerText = month

    daysBlock.innerText = days

    hoursBlock.innerText = `${hours < 10 ? `0${hours}` : hours}`

    minutesBlock.innerText = `${minutes < 10 ? `0${minutes}` : minutes}`

    secondesBlock.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`
}

const createTimer = async () => {

    const timerBlock = document.getElementById('timer')
    const endTime = await getEndDate() * 1000 + new Date().getTime()
    let interval

    const timerContent = `
    <h2 class="">
    Starting at:
        </h2>
        <!-- timer -->
        <div class="main-timer">
            <div>
                <span class="value" id="months">
                    0
                </span>
                <span class="mean">
                    months
                </span>
            </div>
            <div>
                <span class="value" id="days">
                    0
                </span>
                <span class="mean">
                    days
                </span>
            </div>
            <div>
                <span class="value hours" id="hours">
                    0
                </span>
                <span class="mean">
                    hours
                </span>
            </div>
            <div>
                <span class="value minutes" id="minutes">
                    0
                </span>
                <span class="mean">
                    minutes
                </span>
            </div>
            <div>
                <span class="value secondes" id="secondes">
                    0
                </span>
                <span class="mean">
                    seconds
                </span>
            </div>
        </div>
        <!-- button -->
        <div class="main-content-timer--button">
            <button class="prereg filled big">
                begin pre-registration
            </button>
            <img class="image" src="./assets/images/arrow.svg" alt="Arrow">
            <img class="image-sm" src="./assets/images/arrow_sm.svg" alt="Arrow">
        </div>
    `

    if (window.innerWidth < 1024) {
        timerBlock.innerHTML = timerContent
        
        monthsBlock = document.getElementById('months')
        daysBlock = document.getElementById('days')
        hoursBlock = document.getElementById('hours')
        minutesBlock = document.getElementById('minutes')
        secondesBlock = document.getElementById('secondes')

        interval = await setInterval(() => {
            timer(endTime)
        }, 1000);

        return
    }

    clearInterval(interval)
    timerBlock.innerHTML = ''
}

document.addEventListener('DOMContentLoaded', async () => {

    if (window.innerWidth < 1024) {
        await createTimer()
        await window.addEventListener('resize', createTimer)
    } else {
        await window.addEventListener('resize', () => {
            createTimer()
        })
    }
});


