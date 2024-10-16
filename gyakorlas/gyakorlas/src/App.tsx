import { createContext, useState } from 'react'
import FAQ from './components/FAQ'
import LightSwitch from './components/LightSwitch'
import Modal from './components/Modal'

type ModeContextType = {
  mode: boolean,
  setMode: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModeContext = createContext<ModeContextType | undefined>(undefined)

const App = () => {
  const[isDarkMode, setIsDarkMode] = useState(false)
  return (
    <ModeContext.Provider value={{mode: isDarkMode, setMode: setIsDarkMode}}>
    <div className={"main" + !isDarkMode ? " dark" : ""}>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>
    <LightSwitch/>
    <h1>{isDarkMode ? "Setít" : "Fínyes"}</h1>

      



      {/* <FAQ
        question='Miért vannak dolgok?'
        answer='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eveniet perferendis possimus molestias minima, consequatur odit quas laborum saepe voluptatibus officia voluptas ipsam, optio vel exercitationem? Dolorem, est quibusdam. Facere.'
      />
      <FAQ
        question='Hány éves a kapitány'
        answer="Jah"
      />
      <Modal/>
       */}
    </div>
    </ModeContext.Provider>
  )
}

export default App