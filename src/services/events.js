import eventBus from 'services/eventBus'

export function openModal(modalName) {
  eventBus.$emit('open-modal', modalName)
}

export function openContactModal() {
  openModal('contact')
}

export function openSuccessModal() {
  openModal('success')
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

export function stopRootLoader() {
  eventBus.$emit('stop-root-loader')
}

export function updateAlternateLink(links) {
  eventBus.$emit('updateAlternateLink', links)
}
