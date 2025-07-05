import React, { useEffect, useState } from "react"
import {Input} from "../ui/input"
import {ShadButton} from "../ui/ShadButton"
import quotes from "./quotes.json"

type Quote = {
    topic : string,
    text: string
}
const QuoteGenerator: React.FC = () => {
    const [userInput, setUserInput] =useState("");
    const [matchedQuotes, setMatchedQuotes] =useState<Quote[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        setUserInput("");
        setMatchedQuotes([]);
        setHasSearched(false);
    }, []);
    const QuoteGenerate= (input: string) => {
        const trimmedinput = input.trim().toLowerCase();
        if (trimmedinput === "") {
            setMatchedQuotes([]);
            setHasSearched(false);
            return;
        }
        const filtered = quotes.filter((quote) => quote.topic.toLowerCase().includes(trimmedinput.toLowerCase()));
        setMatchedQuotes(filtered);
        setHasSearched(true);
    };
    return (
        <div className="mx-auto w-full max-w-xl flex flex-col items-center gap-4 p-4">        
        <div className="mx-auto w-full flex flex-col items-center gap-4 border border-blue-500 rounded-md shadow-sm p-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-4 text-center">Quote Generator</h1>
            <Input placeholder="Search by topic..." className="text-white text-center placeholder:text-white text-base sm:text-lg w-full max-w-md 
           focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-70 border border-blue-400"
            value={userInput} onChange={(e)=> setUserInput(e.target.value)} ></Input >
            <ShadButton className="border border-transparent bg-[#181818] text-white hover:border-blue-400 transition-colors duration-200" onClick={() => QuoteGenerate(userInput)}>Generate</ShadButton>
            
        </div>
        <div>
            {hasSearched && matchedQuotes.length===0 ? (
                <p className="text-red-500">No quotes found</p>
            ) : (
                matchedQuotes.map((quote,index) => (
                    <>
                    <div className="bg-white text-blue-600 font-serif border border-blue-300 shadow-md rounded-xl p-4 max-w-xl w-full my-2"
                    key={index} > {quote.text}
                    <button className="!bg-white relative">📋</button>
                    </div>
                    </>
                ))
            )
             }
        </div>


    </div>)

}
export default QuoteGenerator