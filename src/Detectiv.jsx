import { useState } from "react";



function Detectiv(){
    const [psihopat, setPsihopat] =useState('психопат');
    let sherlock = 'Шерлок'
    return(
        <div>
            {sherlock} - {psihopat}
        </div>
    )
}

export default Detectiv;
