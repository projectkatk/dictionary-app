import "./Meaning.css"

export default function Meaning(props) {
    console.log(props.meaning)
    return (
        <div className="col-12 col-md-6 p-4 Meaning" key={props.id}>
            <h2 className="px-2 d-inline-block fw-bolder" >{props.data.word}</h2>
            { 
                (props.data.phonetics.length > 0) && 
                <span className="d-inline-block px-4 phonetic">
                    { props.data.phonetics[0].text ? props.data.phonetics[0].text : props.data.phonetics[1].text }
                </span>
            }  
            <span className="d-block wordType mt-2 text-left px-2 fw-bold text-secondary">{ props.meaning.partOfSpeech }</span>
            <ul className="mt-3 definition px-2">
                <li>{ props.meaning.definitions[0].definition }</li>
            </ul>
            { 
                props.meaning.definitions[0].example && 
                <small className="example px-2 text-secondary">e.g. { props.meaning.definitions[0].example }</small> 
            } 

            {
                (props.meaning.synonyms.length > 1) &&
                <small className="synonym px-2 mt-4 d-block"> 
                    <span className="fw-bold">Similar Word:</span> { props.meaning.synonyms.map(synonym => (` [${synonym}] `)) }
                </small>
            }
        </div>

    )
}