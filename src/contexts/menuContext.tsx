import { createContext, ReactNode, useState } from "react";

interface MenuContextData {
    menuIsActive: boolean,
    handleActiveMenu: () => void,
}

interface MenuProviderProps { 
    children: ReactNode
}

export const menuContext = createContext({} as MenuContextData);

export function MenuProvider({ children }: MenuProviderProps) {

    const [ menuIsActive, setMenuIsActive ] = useState(false);

    function handleActiveMenu() {
        if(!menuIsActive){
            setMenuIsActive(true);
        } else {
            setMenuIsActive(false);
        }
    }

    return (
        <menuContext.Provider value={{
            menuIsActive,
            handleActiveMenu
        }}>
            { children }
        </menuContext.Provider>
    )
}