import { useState, useEffect } from "react";
import "./Dictionary.css";
import Results from "./Results"
import Photos from "./Photos"
import axios from "axios"


export default function Dictionary () {
    const [keyword, setKeyword] = useState("");
    const [wordData, setWordData] = useState({ready: false});
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        setLoaded(false)
    },[]);

    function handleKeywordChange(e) {
        setKeyword(e.target.value);
        setLoaded(false)
    }

    function handleDictResponse(response) {
        const data = response.data[0];
        setWordData(data);        
        setLoaded(true);         
    }

    function handlePexelResponse(response) {
        console.log(response)
        setPhotos(response.data.hits)

    }

    function search(e) {
        e.preventDefault();
        load();
        loadPhotos();        
    }    

    function load() {
        if(keyword) {
            axios
                .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
                .then(handleDictResponse)            
        }
        
    }    

    function loadPhotos() {
        if(keyword) {
            const photoApi = '26093005-0fe8d48f6f005795a5f321700';
            let pixaBayUrl = `https://pixabay.com/api/?key=${photoApi}&q=${keyword}&image_type=photo&pretty=true&per_page=9&min_height=80`;
            
            axios
                .get(pixaBayUrl)
                .then(handlePexelResponse);      
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
                    placeholder="Search a word -  e.g. table, kitchen" 
                    autoFocus={true} 
                    onChange={handleKeywordChange}
                />
                <button className="btn text-dark form-control m-2 searchBtn shadow fw-bold text-white">Search</button>                
            </form>
            { 
                loaded && 
                <div>
                    <Results 
                    keyword={keyword}
                    data={wordData}
                    key={1}                    
                    />
                    <Photos 
                        photos={photos}
                    />    
                </div>
            }       
        </div>
    )    
}