import '../styles/AddQuoteLandingPage.scss';

interface Props {
    handleAddQuote: () => void
}

const AddQuoteLandingPage = (props: Props) => {
    return (
        <div className="share-text-container">
            <h2 className="share-text">Share Your Wisdom With Us</h2>
            <section className="text-section-wrapper">
                <p className="text-in-section">Do not keep your wisdom to yourself. Share it with us and help us create a collective wellspring of knowledge and inspiration.</p>
            </section>
            <button className="add-quote-button" onClick={props.handleAddQuote}>Add Your Quote</button>
        </div>
    )
}

export default AddQuoteLandingPage;