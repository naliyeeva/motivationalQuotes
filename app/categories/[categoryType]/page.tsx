'use client';
import {useParams} from "next/navigation";

export default function Category() {
    const params = useParams();

    return <h1>Category: {params.categoryType}</h1>
}