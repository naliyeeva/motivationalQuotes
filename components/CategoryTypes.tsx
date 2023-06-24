import ReactHtmlParser from 'html-react-parser';
import {Category} from "@/types";
import {categoryTypes} from "@/categoryTypesStorage";
import '../styles/CategoryTypes.scss';

const CategoryTypes = () => {
    return (
        <div className="categories-container">
            <ul className="categories-list">
                {categoryTypes.map((category: Category) => (
                    <li className="category-item" key={category.id}>{category.type} {ReactHtmlParser(category.unicode)}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryTypes;