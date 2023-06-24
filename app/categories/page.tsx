import ReactHtmlParser from 'html-react-parser';
import {Category} from "@/types";
import {categoryTypes} from "@/categoryTypesStorage";

export default function Categories() {
    return (
        <div>
            <ul>
                {categoryTypes.map((category: Category) => (
                    <li key={category.id}>{category.type} {ReactHtmlParser(category.unicode)}</li>
                ))}
            </ul>
        </div>
    )
}