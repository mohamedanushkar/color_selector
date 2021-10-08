import React from 'react'

const Buttons = ({onClick, color , id}) => {
    return (
        <>           
           <div key={id} onClick={ () => onClick (color)} style={{backgroundColor: color}} className="Ball" ></div>                        
            
        </>
    )
}


Buttons.defaultProps = {   
        id: 1,
        color: 'red'
};
export default Buttons
