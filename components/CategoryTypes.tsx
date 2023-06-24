import ReactHtmlParser from 'html-react-parser';
import {Category} from "@/types";
import {categoryTypes} from "@/categoryTypesStorage";
import '../styles/CategoryTypes.scss';
import Link from "next/link";

const CategoryTypes = () => {
    return (
        <div className="categories-container">
            <ul className="categories-list">
                {categoryTypes.map((category: Category) => (
                    <li className="category-item" key={category.id}>
                        <Link href={`/categories/${category.type}`} className="category-type">
                            {category.type} {ReactHtmlParser(category.unicode)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryTypes;