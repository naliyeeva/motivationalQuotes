import '../styles/CustomQuote.scss';
import Image from 'next/image';

const CustomQuote = () => {
    return (
        <div className="page-container">
            <section className="left-section">
                <div className="custom-options">
                    <div className="option-wrapper image">
                        <Image
                            src="icon.svg"
                            alt="Image icon"
                            width={35}
                            height={25}
                        />
                        <p className="option-name">Image</p>
                    </div>
                    <div className="option-wrapper color">
                        <Image
                            src="icon.svg"
                            alt="Image icon"
                            width={35}
                            height={25}
                        />
                        <p className="option-name">Color</p>
                    </div>
                    <div className="option-wrapper effects">
                        <Image
                            src="icon.svg"
                            alt="Image icon"
                            width={35}
                            height={25}
                        />
                        <p className="option-name">Effects</p>
                    </div>
                </div>
            </section>

            <section className="center-section">
                <div className="background">
                    <Image
                        src="start-quotation.svg"
                        alt="Quotation icon"
                        width={76}
                        height={66}
                        className="quotation start"
                    />
                    <div className="your-quote-container-extra">
                        <div className="your-quote-container">
                            <p className="your-quote">Your first quote is here</p>
                        </div>
                    </div>
                    <Image
                        src="end-quotation.svg"
                        alt="Quotation icon"
                        width={76}
                        height={66}
                        className="quotation end"
                    />
                </div>
            </section>

            <section className="right-section">
                <div className="save-options">
                    <div className="save-option-wrapper download">
                        <Image
                            src="icon.svg"
                            alt="Image icon"
                            width={35}
                            height={25}
                        />
                        <p className="option-name">Download</p>
                    </div>
                    <div className="save-option-wrapper share">
                        <Image
                            src="icon.svg"
                            alt="Image icon"
                            width={35}
                            height={25}
                        />
                        <p className="option-name">Share</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CustomQuote;