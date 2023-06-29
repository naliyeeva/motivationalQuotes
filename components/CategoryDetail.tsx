import React from "react";

const CategoryDetail: React.FC = ({quotes}) => {
    return (
        <div>{quotes.map((quote) => (
            // eslint-disable-next-line react/jsx-key
            <p>{quote.quote}</p>
        ))}</div>
    )
}

export default CategoryDetail;