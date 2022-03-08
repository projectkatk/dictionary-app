import { useState } from "react";
import "./Dictionary.css";


export default function Dictionary () {

    const [keyword, setKeyword] = useState("");

    function handleKeywordChange(e) {
        setKeyword(e.target.value);
    }

    function search(e) {
        e.preventDefault();
        if(keyword) {
            alert('you are searching "' + keyword + '" right now.');
        }
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
        </div>
    )
}