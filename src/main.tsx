import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'react-redux';
import store from '../src/redux/store.ts'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import axios from "axios"

axios.defaults.baseURL = "https://petmatchbeapi.up.railway.app/"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
