import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: black;
    padding: 20px
  }
`;

const dzbt: DefaultTheme = {
  button: {
    solid: {
      backgroundColor: 'color(srgb 0.9728 0.9928 0.1355)',
      roundness: '10px',
    },
    outlined: {
      backgroundColor: 'black',
      roundness: '0px',
      outlineColor: 'white',
    },
  },
};

const eurowinner: DefaultTheme = {
  button: {
    solid: {
      backgroundColor: 'pink',
      roundness: '5px',
    },
    outlined: {
      backgroundColor: 'black',
      roundness: '0px',
      outlineColor: 'pink'
    }
  },
};

const Main = () => {
  const [theme, setTheme] = useState(dzbt);

  return (

    <StrictMode>
      <button onClick={() => setTheme(dzbt)}>dzbt</button>
      <button onClick={() => setTheme(eurowinner)}>eurowinner</button>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(
  <Main />
)
