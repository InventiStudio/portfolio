import eventBus from 'services/eventBus'

export function openModal(modalName) {
  eventBus.$emit('open-modal', modalName)
}

export function openContactModal() {
  openModal('contact')
}

export function closeModal() {
  eventBus.$emit('close-modal')
}
