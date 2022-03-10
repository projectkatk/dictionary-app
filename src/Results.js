import "./Results.css";


export default function Results(props) {

   function addMoreWords(meaning) {
    if(meaning) {
        return (
            <div className="col-12 col-md-6 second-meaning p-4">
            <h2 className="px-2 d-inline-block">{props.keyword}</h2>
                <span className="d-inline-block px-4 phonetic">{props.data.phonetic}</span>
                <span className="d-block border border-2 p-1 mx-2 wordType mt-2 text-center">{meaning.partOfSpeech}</span>
                <ul className="mt-3">
                    <li>{meaning.definitions[0].definition}</li>
                </ul>
            </div>
        )
    }
   }

   const displayStyle = {
       visibility: "hidden"
   }
    if(props.keyword) {
        return (
            <section className="Results bg-white meaning-section shadow"> 
                <div className="row m-auto">
                    <div className="col-12 col-md-6 p-4">
                        <h2 className="px-2 d-inline-block" >{props.keyword}</h2>
                        <span className="d-inline-block px-4 phonetic" style={displayStyle} >{props.data.phonetic}</span>  
                        <span className="d-block wordType border border-2 p-1 mx-2  mt-2 text-center">{props.data.type1}</span>
                        <ul className="mt-3">
                            <li>{props.data.definition1}</li>
                        </ul>
                    </div>
                    {addMoreWords(props.data.meaning2)}
                    {addMoreWords(props.data.meaning3)}
                    
                </div>               
            </section>
        )
    } else {
        return null;
    }       
}

