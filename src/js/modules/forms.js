const forms = () => {
  const form = document.querySelectorAll('.form')
  const input = document.querySelectorAll('.input')
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]')

  // check phone input field
  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '')
    })
  })

  const message = {
    loading: "Loading...",
    success: "Thank you! We will call you soon",
    failure: "Ooops...Something gone wrong!"
  }

  const clearInputs = () => {
    input.forEach(item => {
      item.value = ''
    })
  }

  const postData = async (url, data) => {
    document.querySelectorAll('.status').textContent = message.loading
    let res = await fetch(url, {
      method: "POST",
      body: data
    })
    return await res.text()
  }

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault()

      let statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      item.appendChild(statusMessage)

      const formData = new FormData(item)
    })

    postData('assets/server.php', formData)
      .then(res => {
        console.log(res)
        statusMessage.textContent = message.success
      })
      .catch(() => statusMessage.textContent = message.failure)
      .finally(() => {
        clearInputs()
        setTimeout(() => {
          statusMessage.remove()
        }, 5000)
      })
  })
}

export default forms