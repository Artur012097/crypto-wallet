const preregButtons = document.querySelectorAll('.prereg')
const field = document.getElementById('emailInput')
const submitButton = document.querySelectorAll('.submitButton')
// const showPasswordButton = document.getElementById('showPassword')
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const createPopup = () => {
    const div = document.createElement('div')
    div.classList.add('success-popup')

    const wrapper = document.createElement('div')
    wrapper.classList.add('success-popup-wrapper')
    div.appendChild(wrapper)

    const text = document.createElement('p')
    text.classList.add('success-popup--text')
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
    document.getElementById('formSection').scrollIntoView({ block: "center", behavior: "smooth" })
}

const changeInputState = (inputName, text) => {
    // const input = fields.find(i => i.name === inputName);
    const parent = field.parentNode
    const button = parent.nextElementSibling
    const errorSpan = parent.querySelector('span')

    if (text) {
        field.classList.add('error')
        errorSpan.innerText = text
        parent.classList.add('error')
        button.classList.add('error')
    } else {
        field.classList.remove('error')
        errorSpan.innerText = ''
        parent.classList.remove('error')
        button.classList.remove('error')
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
    const url = 'https://dev.easydev.group/api/pre_register/'
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

const strigGenerator = (len, charset) => {
    const chars = charset === "letters+numbers" ? "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" : "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!§$%&/?#+-_@"
    const arr = new Uint32Array(len);
    const maxRange = Math.pow(2, 32);
    let string = '';
    window.crypto.getRandomValues(arr);

    for (let i = 0; i < len; i++) {
        const c = Math.floor(arr[i] / maxRange * chars.length + 1);
        string += chars.charAt(c);
    }

    return string
}

const removeSuccessPopup = () => {
    const popup = document.querySelector('.success-popup')
    popup.remove()
}
// scroll to register page
preregButtons.forEach(item => item.addEventListener('click', scrollTo))

// register
submitButton.forEach(item => item.addEventListener('click', () => {
    const data = {}
    data.email = field?.value ?? ''
    
    if (!emailRegex?.test(String(field?.value).toLowerCase())) {
        changeInputState(null, 'incorrect email address')
        return false
    }
    // data.username = strigGenerator(16, "letters+numbers")
    // data.password = strigGenerator(16, "letters+numbers")
    // data.source = 1

    register(data)
        .then((data) => {
            if (typeof data?.email !== 'string') {
                // for (key of Object.keys(data)) {
                //     if (key) {
                //         changeInputState(key, data[key][0]);
                //         submitButton.disabled = true
                //     }
                // }
                changeInputState(null, data?.email?.[0])
            } else {
                createPopup()
                submitButton.disabled = true
                    field.value = ''
                    field.classList.remove('filled')
                // for (i of fields) {
                //     i.value = ''
                //     i.classList.remove('filled')
                // }
            }
        })
}))

// clear errors
field.addEventListener('input', (e) => {
    const el = e.currentTarget
    changeInputState()

    if (!el.value) {
        submitButton.forEach(item => item.disabled = true)
        
    } else {
        submitButton.forEach(item => item.disabled = false)
    }

    if (el?.value) {
        el.classList.add('filled')
    } else {
        el.classList.remove('filled')
    }
})

// show/hide password
// showPasswordButton.addEventListener('click', showHidePassword)
