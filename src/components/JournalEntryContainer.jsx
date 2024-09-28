import { useEffect, useState } from "react"

export default function JournalEntryContainers({entryId}){


    let [isEditing, setIsEditing] = usestate(false);
    let journalEntriesData = useJournalEntriesData();

    let [currentJournalEntry, setCurrentJournalEntry] = useState({});

    useEffect(() => {
        // On componentDidMount, retrieve enry with is of {entryId}

        // from {journalEntriesData}

        // And set that into {currentJournalEntry}
        let currentEntry = journalEntriesData.find((event) => entryId.id == entryId);
        setCurrentJournalEntry(currentEntry);
    }, []);

    if (isEditing){
        return(
            <>
            <EntryForm entryId={currentJournalEntry.id} />
            <button onClick={() => setIsEditing(false)}>
                Finish Editing
            </button>
            </>
        )
    } else {
        return(
            <>
            <ViewEntry journalEntry={currentJournalEntry} />
            <button onClick={() => setIsEditing(true)}>
                Finish Editing
            </button>
            </>
        )
    }

    // return(
    //     <>
    //         {isEditing ?
    //         <EntryForm entryId={currentJournalEntry.id} />
    //         :
    //         <ViewEntry entryId={currentJournalEntry.id} />
    //         }
    //     </>
    // )


}