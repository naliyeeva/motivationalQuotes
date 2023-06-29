// 'use client';
import {useParams} from "next/navigation";
import {Category} from "@/types";
import {categoryTypes} from "@/categoryTypesStorage";
import CategoryDetail from "@/components/CategoryDetail";
import {MongoClient} from "mongodb";

export default async function Category() {
    const uri = 'mongodb+srv://nazrinaliyeva2002:gKnl60gSEp7Yxznw@cluster0.thubz9o.mongodb.net/categories?retryWrites=true&w=majority';
    const dbName = 'categories';

    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('quotes');

    const quotes = await collection.find().toArray();

    // const params = useParams();
    //
    // const decodedCategoryType = decodeURIComponent(params.categoryType);

    const selectedCategory = quotes.filter(
        (category) => category.type === "Love"
    );


    return (
        <>
            {/*<h1>Category: {decodedCategoryType}</h1>*/}
            {/*<p>{selectedCategory.length > 0 && <CategoryDetail chosenCategory={selectedCategory[0].content} />}</p>*/}
            <div>
                {selectedCategory.length > 0 && (
                    <CategoryDetail quotes={selectedCategory} />
                )}
            </div>
        </>
    )
}