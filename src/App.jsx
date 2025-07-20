import { useState } from 'react'
import 'leaflet/dist/leaflet.css';
import './App.css'
import Heading from './components/Heading.jsx'
import Input from './components/Input.jsx'
import Content from './components/Content.jsx'

export default function App() {

  const [location, setLocation] = useState("Delhi");

  return (
    <div className='App'>
      <Heading />
      <Input setLocation={setLocation} />
      <Content location={location} />
    </div>
  )
}
