import CategoryDetail from "@/components/CategoryDetail";
import {MongoClient} from "mongodb";

export default async function Category({params}) {
    const uri = 'mongodb+srv://nazrinaliyeva2002:gKnl60gSEp7Yxznw@cluster0.thubz9o.mongodb.net/categories?retryWrites=true&w=majority';
    const dbName = 'categories';

    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('quotes');

    const quotes = await collection.find().toArray();

    const selectedCategory = quotes.filter(
        (category) => category.type === params.categoryType
    );

    return (
        <>
            <div>
                {selectedCategory.length > 0 && (
                    <CategoryDetail quotes={selectedCategory} />
                )}
            </div>
        </>
    )
}