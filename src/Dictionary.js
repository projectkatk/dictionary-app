import { useState, useEffect } from "react";
import "./Dictionary.css";
import Results from "./Results"
import axios from "axios"


export default function Dictionary () {

    const [keyword, setKeyword] = useState("");
    const [wordData, setWordData] = useState({ready: false})
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false)
    },[])

    function handleKeywordChange(e) {
        setKeyword(e.target.value);
        setLoaded(false)
    }

    function handleResponse(response) {
        console.log(response.data[0])
        const data = response.data[0];
        setWordData(data);
            // ready: true,
            // rawData: data,
            // phonetic: data.phonetics.length > 0 ? (!data.phonetics[0].text ? data.phonetics[1].text : data.phonetics[0].text) : "",
            // type1: data.meanings[0].partOfSpeech,
            // definition1: data.meanings[0].definitions[0].definition,            
            // synonym1Array: data.meanings[0].synonyms,
            // antonym1Array: data.meanings[0].antonyms,
            // meaning2: data.meanings[1],
            // meaning3: data.meanings[2]
        
        setLoaded(true);         
    }

    function search(e) {
        e.preventDefault();
        load();
    }

    function load() {
        if(keyword) {
            axios
                .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
                .then(handleResponse)            
        }
    }    
     
    return (
        <div className="Dictionary">
            <form 
                className="d-flex flex-column align-items-center p-4 flex-sm-row Form"
                onSubmit={search}
            >
                <input 
                    type="search" 
                    className="form-control m-2 border-0 shadow" 
                    placeholder="Search word" 
                    autoFocus={true} 
                    onChange={handleKeywordChange}
                />
                <button className="btn text-dark form-control m-2 searchBtn shadow fw-bold text-dark">Search</button>                
            </form>
            { loaded && 
                <Results 
                keyword={keyword}
                data={wordData}                    
                />    
            }       
        </div>
    )    
}