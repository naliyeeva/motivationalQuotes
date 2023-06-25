'use client';
import {useParams} from "next/navigation";
import {Category} from "@/types";
import {categoryTypes} from "@/categoryTypesStorage";
import CategoryDetail from "@/components/CategoryDetail";

export default function Category() {
    const params = useParams();

    const selectedCategory = categoryTypes.filter(
        (category: Category) => category.type === params.categoryType
    );

    return (
        <>
            <h1>Category: {params.categoryType}</h1>
            <p>{selectedCategory.length > 0 && <CategoryDetail chosenCategory={selectedCategory[0].content} />}</p>
        </>
    )
}