import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import App from './App/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'style/plugins/mdb/sass/mdb'
import 'style/'
import registerServiceWorker from './app/registerServiceWorker'

export const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

render(<Root />, document.querySelector('react'))

