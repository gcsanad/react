import { useContext, useState } from "react"
import { ModeContext } from "../App"


const LightSwitch = () => {
    const ctx = useContext(ModeContext)
    
  return (
    <>
    {ctx ? 
        <div className="switch" onClick={() => ctx.setMode(!ctx.mode)}>
        <div className={ctx.mode ? "isDark" : undefined}>

        </div>
    </div>:
    <></>
    }
</>
  )
}

export default LightSwitch