import ReactDOM from 'react-dom'

import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://hello.studiohuit.xyz/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        F1 2020 Screenshot Art Gallery - Studio Huit
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '48px' }}>Studio Huit</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>04-2023</div>
    </div>
  )
}

ReactDOM.render(
  <>
    <App />
    <Overlay />
    {/* <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} /> */}
  </>,
  document.getElementById('root')
)
