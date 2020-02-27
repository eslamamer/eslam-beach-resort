import React from 'react'

function Hero({hero,children}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
export default Hero    
Hero.defaultProps={  //defaultProps ensure that we have defaulte props assign even forgeting to or not assign props
    hero:"defaultHero"
}