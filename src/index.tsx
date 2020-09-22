/*
Copyright 2020 Oply

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { reducers } from 'store'

import './styles/compiled/tailwind.css'

const history = createBrowserHistory()

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

let composeEnhancers
process.env.NODE_ENV === 'development' ?
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose :
    composeEnhancers = compose

const rootReducer = combineReducers({
    router: connectRouter(history),
    ...reducers,
})

const middleware = applyMiddleware(thunk)
const store = createStore(
    rootReducer,
    composeEnhancers(middleware),
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
