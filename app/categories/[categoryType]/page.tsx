'use client';
import {useParams} from "next/navigation";
import {Category} from "@/types";
import {categoryTypes} from "@/categoryTypesStorage";
import CategoryDetail from "@/components/CategoryDetail";

export default function Category() {
    const params = useParams();

    const decodedCategoryType = decodeURIComponent(params.categoryType);

    const selectedCategory = categoryTypes.filter(
        (category: Category) => category.type === decodedCategoryType
    );

    return (
        <>
            <h1>Category: {decodedCategoryType}</h1>
            <p>{selectedCategory.length > 0 && <CategoryDetail chosenCategory={selectedCategory[0].content} />}</p>
        </>
    )
}