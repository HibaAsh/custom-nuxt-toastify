import { ref } from 'vue'

// reactive state
const message = ref<string>('')       // message text
const visible = ref<boolean>(false)   // dialog visibility

export function useAlert() {
  // method to show alert
  function show(msg: string): void {
    message.value = msg
    visible.value = true
  }

  // method to hide alert (optional helper)
  function hide(): void {
    visible.value = false
  }

  return {
    message,
    visible,
    show,
    hide,
  }
}
