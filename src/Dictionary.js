import { useState } from "react";
import "./Dictionary.css";
import axios from "axios"


export default function Dictionary () {

    const [keyword, setKeyword] = useState("");

    function handleKeywordChange(e) {
        setKeyword(e.target.value);
    }


    function handleResponse(response) {
        console.log(response.data[0])
    }

    function search(e) {
        e.preventDefault();
        if(keyword) {
            axios
                .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
                .then(handleResponse)
        }
        document.querySelector('.meaning-section').style.visibility = 'visible';
    }
    return (
        <div>
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
            <section className="p-4 bg-white meaning-section">
                <div className="row py-2 px-md-4 h-auto d-flex flex-column inner-border mx-md-2">
                    <div className="col d-flex align-items-center">
                        <h1 className="px-2">{keyword}</h1>
                        <span className="d-block px-4">phonetic</span>                        
                    </div>
                    <span className="border border-2 p-1 mx-3 wordType mt-2 text-center">adjective</span>
                    <div className="col">

                    </div>

                    

                </div>
                
                
            </section>
        </div>
    )
}