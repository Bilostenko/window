import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElem(event, elem, prop) {
      elem.forEach((item, i) => {
        item.addEventListener(event, () => {
          state[prop] = i
          console.log(state)
        })
      })
    }

}

export default changeModalState