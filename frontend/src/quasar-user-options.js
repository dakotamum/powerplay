import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'

import { Quasar, QCard, QBtn, Notify, Loading } from 'quasar'

export default {
  config: {
    dark: false // or true if you want the default to be dark
  },
  plugins: {
    Notify,
    Loading
  },
  components: {
    QCard,
    QBtn
  }
}
