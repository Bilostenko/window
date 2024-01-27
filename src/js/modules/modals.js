const modals = () => {
  function bindModal(trigerSelector, modalSelector, closeSelector) {

    const trigger = document.querySelectorAll(trigerSelector)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault()
        }
        modal.style.display = 'block';
        /* document.body.style.overflow = 'hidden'; */
        docyment.body.classlist.add('.modal-open')
      })
    })

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      /* document.body.style.overflow = ''; */
      docyment.body.classlist.remove('.modal-open')
    })

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        /* document.body.style.overflow = ""; */
        docyment.body.classlist.remove('.modal-open')
      }
    });
  }

  function showModalByTime(selector, time){
    setTimeout(function(){
      document.querySelector(selector).style.display = 'block'
      document.body.style.overflow = 'hidden';
    }. time)
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
  bindModal('.phone_link', '.popup', '.popup .popup_close')
  bindModal('.popup', 6000)
}



export default modals 