const preregButtons = document.querySelectorAll('.prereg')
const fields = [...document.querySelectorAll('input')]
const submitButton = document.getElementById('submitButton')
const showPasswordButton = document.getElementById('showPassword')
let error = false

const createPopup = () => {
    const div = document.createElement('div')
    div.classList.add('success-popup')

    const wrapper = document.createElement('div')
    wrapper.classList.add('success-popup-wrapper')
    div.appendChild(wrapper)

    const text = document.createElement('p')
    text.classList.add('success-popup--text')
    text.classList.add('f-semi')
    text.classList.add('text-lg2')
    text.innerText = 'Congratulations, you have successfully registered in the system!'
    wrapper.appendChild(text)

    const button = document.createElement('button') 
    button.setAttribute('id', 'successPopupClose')
    button.classList.add('password')
    wrapper.appendChild(button)

    document.body.appendChild(div)

    // remove popup
    const closeButton = document.getElementById('successPopupClose')
    closeButton.addEventListener('click', removeSuccessPopup)
}

const scrollTo = () => {
    document.getElementById('formSection').scrollIntoView({block: "center", behavior: "smooth"})
}

const changeInputState = (inputName, text) => {
    const input = fields.find(i => i.name === inputName);
    const parent = input.parentNode
    const errorSpan = parent.querySelector('span')

    if (text) {
        input.classList.add('error')
        errorSpan.innerText = text
        parent.classList.add('error')
    } else {
        input.classList.remove('error')
        errorSpan.innerText = ''
        parent.classList.remove('error')
    }
}

const showHidePassword = (e) => {
    e.preventDefault()
    const input = e.currentTarget.parentNode.querySelector('input')
    const icon = e.currentTarget.querySelector('img')
    
    if (input?.type === 'password') {
        input.type = 'text'
        icon.src = './assets/images/icons/eye-off.svg'
    } else {
        input.type = 'password'
        icon.src = './assets/images/icons/eye-on.svg'
    }
    
}

const register = async (data) => {
    const url = 'https://dev.easydev.group/api/register/'
    const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

    const response = await fetch(url, config)
    return await response.json();
    
}

const removeSuccessPopup = () => {
    const popup = document.querySelector('.success-popup')
    popup.remove()
}

// scroll to register page
preregButtons.forEach(item => item.addEventListener('click', scrollTo))

// register
submitButton.addEventListener('click', () => {
    const data = {}
    for (i of fields) {
        data[i.name] = i.value
    }
    register(data)
    .then((data) => {
        if (!data?.id) {
            for (key of Object.keys(data)) {
                if (key) {
                    changeInputState(key, data[key][0]);
                    submitButton.disabled = true
                }
            }
        } else {
            createPopup()
            for (i of fields) {
                i.value = ''
            }
        }
    })
})

// clear errors
fields.forEach(item => item.addEventListener('input', (e) => {
    const el = e.currentTarget.name
    changeInputState(el)

    if (fields.some(i => !i.value)) {
        submitButton.disabled = true
    } else {
        error = false
        submitButton.disabled = false
    }
}))

// show/hide password
showPasswordButton.addEventListener('click', showHidePassword)
