import { ThemeProvider } from 'styled-components'
import { Input } from './components/Input'
import { Link } from './components/Link'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <p>hello world</p>
        <Input placeholder="Teste" />
        <Link withIcon href="#oi">
          Link
        </Link>
        <button>Teste</button>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  )
}
