import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './context/theme-context';
import { ModalProvider } from './context/modal-context';
import App from './App';
import './index.css'


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <ThemeProvider>
    <ModalProvider>
        <App/>
    </ModalProvider>
    </ThemeProvider>
);