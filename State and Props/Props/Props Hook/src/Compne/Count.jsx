import React, { useState } from "react";

function Count({No,inc,dec}){
  
    return(
        <div align="center">
            <h1>Counter :-{No}</h1>
            <input type="button" onClick={()=> inc()} value="+"/>
            {
                No==0 ?  <input type="button" disabled onClick={()=> dec()} value="-"/>
                : <input type="button" onClick={()=> dec()} value="-"/>
            }
           
        </div>)
}
export default Count;