import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { ShadButton } from "../ui/ShadButton";
import quotes from "./quotes.json";
import QuoteCard from "./QuoteCard";

type Quote = {
  topic: string;
  text: string;
};

const QuoteGenerator2: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [matchedQuotes, setMatchedQuotes] = useState<Quote[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setUserInput("");
    setMatchedQuotes([]);
    setHasSearched(false);
  }, []);

  const QuoteGeneration = (input: string) => {
    const filtered = quotes.filter((quote) =>
      quote.topic.toLowerCase().includes(input.trim().toLowerCase())
    );
    setMatchedQuotes(filtered);
    setHasSearched(true);
  };

  return (
    <div className="mx-auto w-max flex flex-col items-center gap-2 border border-blue-500 p-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Quote Generator</h1>

      <QuoteCard />

      <Input
        placeholder="Search by topic..."
        className="text-white placeholder:text-white text-lg text-center border border-red-500 h-14 w-full max-w-md my-6"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <ShadButton
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded mb-8"
        onClick={() => QuoteGeneration(userInput)}
      >
        Generate Quote
      </ShadButton>

      <div className="w-full max-w-2xl space-y-4">
        {hasSearched && matchedQuotes.length === 0 ? (
          <p className="text-center text-lg text-gray-300">No quotes found.</p>
        ) : (
          matchedQuotes.map((quote, index) => (
            <p
              key={index}
              className="text-center text-xl border-b border-gray-700 pb-4"
            >
              {quote.text}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default QuoteGenerator2;
