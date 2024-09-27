import { createContext, useState } from "react";


// Create the context
//     SomeContextVariable = createContext(defaultValue);
const JournalEntriesContext = createContext([]);


// Create custom hooks to access the context data
export function useJournalEntriesData(){
    console.log("Passing dara around!");
    let currentJournalData = useContext(JournalEntriesContext);
    if (currentJournalData.length == 0){
        console.log("No entries to show!");
    }
    
    return currentJournalData;
}



//Create the context provider


export default function JournalEntriesProvider(props){
    let [journalEntries, setJournalEntries] = useState([]);


    return(
        <JournalEntriesContext.Provider value={journalEntries}>
        {props.children}
        </JournalEntriesContext.Provider>
    );
}
