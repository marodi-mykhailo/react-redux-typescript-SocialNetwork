import React from "react";
import {StoreType} from "./redux/store";

const StoreContext = React.createContext({} as StoreType
)

type ProviderType = {
    store: any
    children: any
}

export const Provider = (props: ProviderType) =>{
    return <StoreContext.Provider value={props.store}>
        {props.children}
        </StoreContext.Provider>
}

export default StoreContext;
