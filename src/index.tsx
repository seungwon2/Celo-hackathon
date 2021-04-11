import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { App_2 } from 'src/app/nana_App'
import { persistor, store } from 'src/app/store'
import 'src/styles/fonts.css'
import 'src/styles/normalize.css'
import 'src/styles/scrollbar.css'
import 'static/App.css'
const mountNode = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App_2 />
    </PersistGate>
  </Provider>,
  mountNode
)
