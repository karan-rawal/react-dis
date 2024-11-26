import BaseButton from './components/BaseButton.component'

function App() {
  return (
    <>
      <div>
        <BaseButton label='Click me' onClick={() => {
          alert("Clicked")
        }} />
      </div>
    </>
  )
}

export default App
