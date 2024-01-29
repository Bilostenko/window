const forms = ()=>{
 const form = document.querySelectorAll('.form')
 const input = document.querySelectorAll('.input')

 const message = {
   loading: "Loading...",
   success: "Thank you! We will call you soon",
   failure: "Ooops...Something gone wrong!"
 }

const postData = async (url, data) =>{
  document.querySelectorAll('.status').textContent = message.loading
  let res = await fetch(url, {
    method: "POST",
    body: data
  })
}

 form.forEach(item => {
    item.addEventListener('submit', (e)=>{
      e.preventDefault()

      let statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      item.appendChild(statusMessage)

      const formData = new FormData(item)
    })
 })
}

export default forms