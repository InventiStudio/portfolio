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

export function setEstimationScope(estimationScope) {
  eventBus.$emit('set-estimation-scope', estimationScope)
}

export function resetEstimationScope() {
  eventBus.$emit('reset-estimation-scope')
}
