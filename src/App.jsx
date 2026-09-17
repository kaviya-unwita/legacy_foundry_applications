import { useState } from 'react'
import SSAApp from './SSAApp'
import VeeyesApp from './VeeyesApp'

export default function App() {
  const [application, setApplication] = useState('ssa')
  return application === 'veeyes'
    ? <VeeyesApp onSwitch={setApplication} />
    : <SSAApp onSwitch={setApplication} />
}