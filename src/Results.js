import "./Results.css";


export default function Results(props) {
   
   function addMoreWords(meaning) {
    if(meaning) {
        return (            
            <div className="col-12 col-md-6 second-meaning p-4">
                <h2 className="px-2 d-inline-block fw-bolder">{props.keyword}</h2>
                 {props.data.phonetic && <span className="d-inline-block px-4 phonetic">{props.data.phonetic}</span>}
                <span className="d-block wordType mt-2 text-left px-2 fw-bold text-secondary">{meaning.partOfSpeech}</span>
                <ul className="mt-3 definition px-2">
                    <li>{meaning.definitions[0].definition}</li>
                </ul>
            </div>
        )
    }
   }
       
    if(props.keyword) {
            return (
                <section className="Results bg-white meaning-section shadow"> 
                    <div className="row m-auto">                    
                        <div className="col-12 col-md-6 p-4">
                            <h2 className="px-2 d-inline-block fw-bolder" >{props.keyword}</h2>
                            {props.data.phonetic && <span className="d-inline-block px-4 phonetic">{props.data.phonetic}</span>}  
                            <span className="d-block wordType mt-2 text-left px-2 fw-bold text-secondary">{props.data.type1}</span>
                            <ul className="mt-3 definition px-2">
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

