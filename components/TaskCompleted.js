const ButtonFinish = () => {
  const buttonFinish = document.createElement('button')
  buttonFinish.classList.add('check-button')
  buttonFinish.innerText = 'concluir'

  buttonFinish.addEventListener('click', taskFinish)

  return buttonFinish
}

const taskFinish = (event) => {
  const buttonFinish = event.target

  const taskCompleted = buttonFinish.parentElement

  taskCompleted.classList.toggle('done')
}

export default ButtonFinish