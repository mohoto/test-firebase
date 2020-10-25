import React, {createContext, useState} from 'react';

export const TitreContext = createContext();

const TitreContextProvider = (props) => {

    const [titre, setTitre] = useState('Hello word');

    return (
        <TitreContextProvider value={{titre}}>
            {props.children}
        </TitreContextProvider>
    )
}

export default TitreContextProvider;
