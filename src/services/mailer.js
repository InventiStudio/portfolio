import constants from 'src/constants'
import api from 'services/api'

export default async function sendMail({ template_id, email, substitution_data, name = '' }) {
  return api.post(constants.api.mailer, {
    template_id,
    recipients: [{ address: { email, name } }],
    substitution_data,
  })
}
