import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store'
import Header from '../components/layout/header';
// styles
import { createGlobalStyle, ThemeProvider } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html{
    background-color: #282C34;
  }

  body{
  
  }
`;
const theme = {
  'primary'       : "#",
  'primary-dark'  : "#",
  'primary' : "#61DAFB",
   
  'secondary'       : "#F2622A",
  'secondary-dark'  : "#E76F51",
  'secondary-light' : "#F4A261",

  'text-color-primary' : '#b2b4b9',
  'text-color-secondary' : '#eee', 

  'back-ground'       : '#282C34',
  'background-light'  : '#282E34',
  'background-dark'   : '#20232A',
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <ThemeProvider theme = { theme }>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
