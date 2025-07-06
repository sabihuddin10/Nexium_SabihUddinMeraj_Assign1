import React, { useEffect, useState } from "react"
import {Input} from "../ui/input"
import {ShadButton} from "../ui/ShadButton"
import quotes from "./quotes.json"
import { Tooltip } from "react-tooltip"
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
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] mx-auto w-full max-w-xl flex flex-col items-center gap-4 p-4">        
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
                    <div key={index} className="my-2">
                    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-blue-400 font-serif border border-blue-300 shadow-md shadow-blue-200 rounded-xl gap-2 p-3 max-w-xl w-full flex justify-between items-start relative">
                        <span className="pr-8">{quote.text}</span>
                        <button
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                        data-tooltip-id="copy-tooltip"
                        data-tooltip-content="Copy to clipboard"
                        onClick={() => navigator.clipboard.writeText(quote.text)}
                        >
                        📋
                        </button>
                    </div>
                </div>

                ))
            )}
             <Tooltip id="copy-tooltip" place="top"></Tooltip>
        </div>
    </div>
    )

}
export default QuoteGenerator