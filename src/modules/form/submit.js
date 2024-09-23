import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = inputToday

// Definindo a data mínima como sendo a data atual
selectedDate.min = inputToday


form.onsubmit = (event) => {
  event.preventDefault()

  try {
    // Recuperando o nome do client.
    const name = clientName.value.trim()
    
    if (!name) {
      return alert("Informe o nome do cliente")
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione um horário.")
    }

    // Recupera somente a hora.
    const [hour] = hourSelected.innerText.split(":")
    
    // Insere a hora na data.
    const when = dayjs(date.value).add(hour, "hour")

    // Gera um ID
    const id = new Date().getTime()

    console.log({
      id,
      name,
      when,
    })

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}