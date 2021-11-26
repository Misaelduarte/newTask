const ButtonDelete = () => {
  const buttonDelete = document.createElement('button')
  
  buttonDelete.innerText = 'deletar'
  buttonDelete.addEventListener('click', taskDelete)

  return buttonDelete
}

const taskDelete = (event) => {
  const buttonDelete = event.target

  const taskCompleted = buttonDelete.parentElement

  taskCompleted.remove()

  return buttonDelete
}

export default ButtonDelete