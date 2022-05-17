const monthsBlock = document.getElementById('months')
const daysBlock = document.getElementById('days')
const hoursBlock = document.getElementById('hours')
const minutesBlock = document.getElementById('minutes')
const secondesBlock = document.getElementById('secondes')

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

document.addEventListener('DOMContentLoaded', async () => {
    const endTime = await getEndDate() * 1000 + new Date().getTime()

    interval = await setInterval(() => {
        timer(endTime)
    }, 1000);
});


