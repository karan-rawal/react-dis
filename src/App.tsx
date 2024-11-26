import { PrimaryButton } from "./components/buttons"
import { SecondaryButton } from "./components/buttons/SecondaryButton.component"

function App() {
  return (
    <>
      <div>
        <PrimaryButton label='Primary Button' onClick={() => {
          alert("Clicked")
        }} />
        &nbsp;
        &nbsp;
        &nbsp; 
        <SecondaryButton label='Primary Button' onClick={() => {
          alert("Clicked")
        }} />
      </div>
    </>
  )
}

export default App
