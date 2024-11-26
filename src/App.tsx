import styled from "styled-components"
import { SolidButton } from "./components/buttons"
import { OutlinedButton } from "./components/buttons"

const CustomSolidButton = styled(SolidButton)`
  background-color: green;
`;

function App() {
  return (
    <>
      <div>
        <SolidButton label='Solid Button' onClick={() => {
          alert("Clicked")
        }} />
        <CustomSolidButton label='Cutom Solid Button' onClick={() => {
          alert("Clicked")
        }} />
        <OutlinedButton label='Outlined Button' onClick={() => {
          alert("Clicked")
        }} />
      </div>
    </>
  )
}

export default App
