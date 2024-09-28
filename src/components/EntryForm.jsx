/*
<HomePage>
    <EntryForm />
    <LatestPosts limit={5} />
</HomePage>

<JournalEntryContainer>
    //Toggle between <EntryForm /> and <ViewForm />
    <EntryForm entryId={4398j1r43p9mrx8jmp13}
</JournalEntryContainer>

*/

import { useState } from "react";
import { useJournalEntriesData, useJournalEntriesSetter } from "../contexts/EntriesContexts";

export default function EntryForm({entryId}){
    let journalEntriesData = useJournalEntriesData();
    let setJournalEntries = useJournalEntriesSetter();

    let [localId, setLocalId] = useState(entryId ?  entryId.toString() : crypto.randomUUID());
    let [localType, setLocalType] = useState("journal");
    let [localName, setLocalName] = useState("Default Post Name");
    let [localContent, setLocalContent] = useState("Write your journal entry here.");
    let [localAuthor, setLocalAuthor] = useState("Super Cool Author");
    let [localLastEdited, setLocalLastEdited] = useState(Date.now);

    const handleSubmission = () => {
        setJournalEntries(currentJournalEntries => {
            let newEntry = {
                lastEdited: Date.now(),
                author: localAuthor,
                content: localContent,
                name: localName,
                type: localType,
                id: localId
            }

            return [...currentJournalEntries, newEntry];
        })
    }

    return(
            <> 
                <label htmlFor="localType">Entry Type:</label>
                <input 
                    type="text" 
                    name="localType" 
                    value={localType} 
                    defaultValue={localType} 
                    onChange={(event) => setLocalType(event.target.value)}
                />
                <label htmlFor="localName">Entry Title:</label>
                <input 
                    type="text" 
                    name="localName" 
                    value={localName} 
                    defaultValue={localName} 
                    onChange={(event) => setLocalName(event.target.value)}
                />
                <label htmlFor="localAuthor">Entry Author:</label>
                <input 
                    type="text" 
                    name="localAuthor" 
                    value={localAuthor} 
                    defaultValue={localAuthor} 
                    onChange={(event) => setLocalAuthor(event.target.value)}
                />
                <label htmlFor="localContent">Entry Content:</label>
                <input 
                    type="text" 
                    name="localContent" 
                    value={localContent} 
                    defaultValue={localContent} 
                    onChange={(event) => setLocalContent(event.target.value)}
                />

                <button onClick={handleSubmission}>
                    Submit new entry
                </button>

        </>
    );
}