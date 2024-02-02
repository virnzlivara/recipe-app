 
import { createContext,  useEffect, useState } from "react";

  

 const SpecialContext = createContext({
    data: []
})


export const SpecialProvider = ({children}: any) => {
    const [data, setData] = useState<any>([]); 
    useEffect(()=> { 

        async function fetchData() {
            try {
              const data = await fetch("http://localhost:3001/specials"); 
              const res = await data.json();
              debugger
              setData(res);
            } catch (error) {
            //   setError(error.message);
            }
          }
          fetchData();
         
      }, [])
    

    return( 
        <SpecialContext.Provider value={{data}}>
            {children}
        </SpecialContext.Provider>
    )
}
export default SpecialContext;
