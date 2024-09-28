import { useEffect, useState } from "react";
import JournalEntriesProvider, { useJournalEntriesData } from "../contexts/EntriesContexts";


export default function LastestXPosts({limit}){
    let journalEntries = useJournalEntriesData();

    let [sortedAndTrimmedPostList, setProcessedPostList] = useState([]);

    useEffect(() => {
        let tempListCopy = [...journalEntries];

        tempListCopy.sort((a, b) => {
            if (a.lastEdited < b.lastEdited){
                return 1;
            } else if (a.lastEdited > b.lastEdited){
                return -1;
            } else {
                return 0;
            }
        });

        if (limit && limit > 0 && tempListCopy.length > limit){
            tempListCopy.length = limit;
        }
    }, [journalEntries]);

    return(
        <>
            {sortedAndTrimmedPostList.map((entry) => {
                return <JournalEntriesContainer key={entry.id} entryId={entry.id} />
            })}
        </>
    );
}