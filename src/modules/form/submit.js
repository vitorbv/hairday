import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = inputToday

// Definindo a data mínima como sendo a data atual
selectedDate.min = inputToday


form.onsubmit = async (event) => {
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

    // Faz o agendamento.
    await scheduleNew({
      id,
      name,
      when,
    })

    // Recarrega a lista de agendamentos.
    await schedulesDay()

    // Limpa o campo de nome após o submit
    clientName.value = ""

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}