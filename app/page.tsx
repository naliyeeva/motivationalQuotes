'use client'
import HomePage from "@/components/HomePage";
import {useEffect, useState} from "react";
import {Quote} from "@/types";

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
      const fetchQuote = async () => {
        try {
          const response = await fetch('https://type.fit/api/quotes');
          const quoteData: Quote[] = await response.json();
          const randomQuote = quoteData[Math.floor(Math.random() * quoteData.length)];
          setQuote(randomQuote);
        } catch (error) {
          console.error("Failed to fetch quote:", error);
        }
      }
      fetchQuote();
  }, []);
  return (
    <>
        {quote && <HomePage quote={quote}/>}
    </>
  )
}
