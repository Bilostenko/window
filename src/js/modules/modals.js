const modals = () => {
  function bindModal(triger, modal, close) {
    triger.addEventListener('click', (e) => {

      if (e.target) {
        e.preventDefault()
      }
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    })

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    })

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });

  }

  const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
    modalEngineer = document.querySelector('.popup_engineer'),
    modalEnginnerClose = document.querySelector('.popup_engineer .popup_close');

  bindModal(callEngineerBtn, modalEngineer, modalEnginnerClose)

}



export default modals 