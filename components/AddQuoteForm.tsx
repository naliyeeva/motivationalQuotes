'use client';
import '../styles/AddQuoteForm.scss';
import {useState} from "react";

const AddQuoteForm = () => {
    const [yourQuote, setYourQuote] = useState<string>('');
    const [active, setActive] = useState<boolean>(false);

    const handleQuote = (event: React.FormEvent<HTMLTextAreaElement>) => {
        setYourQuote(event.target.value);
    }

    const handleFocus = () => {
        setActive(true);
    }

    const handleBlur = () => {
        setActive(false);
    }

    return (
        <>
            <div className="share-text-container">
                <h2 className="share-text">Share Your Wisdom With Us</h2>
                <section className="text-section-wrapper">
                    <p className="text-in-section">Do not keep your wisdom to yourself. Share it with us and help us create a collective wellspring of knowledge and inspiration.</p>
                </section>
                <button className="add-quote-button">Add Your Quote</button>
            </div>
        </>
        // <div className="add-quote-container">
        //     <form className="add-quote-form">
        //         <div className="input-container">
        //             <label className="your-quote-label">Your Quote</label>
        //             <textarea
        //                 className={`quote-textarea ${active ? "active" : ""}`}
        //                 onChange={handleQuote}
        //                 onFocus={handleFocus}
        //                 onBlur={handleBlur}
        //                 value={yourQuote}
        //                 maxLength="50"
        //             />
        //         </div>
        //         <div className="quote-preview">
        //             {yourQuote && <b>❝ {yourQuote} ❞</b>}
        //         </div>
        //         <button className="save-quote-btn">Save Your Quote</button>
        //     </form>
        // </div>
    )
}

export default AddQuoteForm;