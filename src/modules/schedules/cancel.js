import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Gera evento de click para cada período da lista de agendamento.
periods.forEach((period) => {
  //Captura o evento de click na lista.
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li")

      // Pega o id do agendamento para remover.
      const { id } = item.dataset

      // Confirma que o id foi selecionado.
      if(id){
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        if(confirm) {
          await scheduleCancel({ id })
          schedulesDay()
        }
      }
    }
  })
})