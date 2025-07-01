import React, { useEffect, useState } from "react"
import {Input} from "../ui/input"
import {Button} from "../ui/button"
import quotes from "../../../src/quotes.json"

const QuoteGenerator:React.FC = () => {
    console.log(quotes)
    useEffect(() => {
        setUserInput("")
        setMatchedQuotes([])
    },[])
    type Quote = {
        topic:string,
        text:string
    }
    const [userInput, setUserInput] = useState("");
    const [matchedQuotes, setMatchedQuotes] = useState<Quote[]>([])
    const QuoteGeneration = (userInput:string) => {
                const filteredQuotes = quotes.filter((quote) =>
        quote.topic.toLowerCase().includes(userInput.trim().toLowerCase())
        );
        setMatchedQuotes(filteredQuotes)
    }
    return (
        <>
        <div className="flex flex-col  justify-center items-center-safe gap-32 bg-[#232323] text-center h-screen w-screen" >
            <div className="heading text-blue-400 text-4xl font-bold mask-t-from-neutral-900">Quote Generator</div>
            <Input placeholder="Enter a quote" className="text-white placeholder:text-white text-2xl text-center border-solid border-red-500 h-[200px] w-[600px]" onChange={(e) => setUserInput(e.target.value)}></Input>
            <Button className="text-blue-300 mt-[-100px]" onClick={() => QuoteGeneration(userInput)}>Generate Quote</Button>
            
        <div>
            {matchedQuotes.length > 0 ? (
                console.log("Matchings for ",userInput,"are: ",matchedQuotes),
                matchedQuotes.map((quote) => (
                    <div key={quote.text}>
                        <p className="text-white text-[10px] font-bold"> {quote.text}</p>
                    </div>
                ))
            ) : (
                <p className="text-white text-[10px] font-bold">No matching quotes found.</p>
            )}
        </div>
        </div>
        
        </>
    )
}

export default QuoteGenerator