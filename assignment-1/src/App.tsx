import WebWrapper from "./components/Wrappers/WebWrapper"
import QuoteGenerator from "./components/QuoteGenerator/QuoteGenerator"
import NavBar from "./components/NavBar/NavBar"
function App() {
  return (
    <>
    <WebWrapper>
       <NavBar/>
       <QuoteGenerator/>

    </WebWrapper>
    </>
  )
}

export default App
