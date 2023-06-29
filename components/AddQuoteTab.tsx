'use client';
import {useState} from "react";
import CustomQuote from "@/components/CustomQuote";
import AddQuoteLandingPage from "@/components/AddQuoteLandingPage";

const AddQuoteTab = () => {
    const [addQuoteBtn, setAddQuoteBtn] = useState<boolean>(false);

    const handleAddQuote = () => {
        setAddQuoteBtn(true);
    }

    return (
        <>
            {addQuoteBtn ? <CustomQuote /> : <AddQuoteLandingPage handleAddQuote={handleAddQuote}/>}
        </>
    )
}

export default AddQuoteTab;