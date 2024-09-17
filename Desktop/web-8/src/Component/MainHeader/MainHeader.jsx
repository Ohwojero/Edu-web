import React from 'react'
import '../../styles/MainHeader.css'
    const header = [
        {
            subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo provident",
            
        }
    ]

const MainHeader = ({ subtitle, children}) => {
  return (
    <div className='mainheader'>
        {
            header.map(({item, index})=>{
                    return(
                        <div key={index}>
                            <h2>{subtitle}</h2>
                            <p>{children}</p>
                        </div>
                    )
            })
        }
          
    </div>
  )
}

export default MainHeader