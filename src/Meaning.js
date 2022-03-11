import "./Meaning.css"
import Phonetic from "./Phonetic"


export default function Meaning(props) {
    console.log(props.meaning)
    return (
        <div className="col-12 col-md-6 p-4 Meaning">
            <h2 className="px-2 d-inline-block fw-bolder" >{props.data.word}</h2>
            { props.data.phonetics.length > 0 && 
                props.data.phonetics.map((phonetic, index) => (
                <Phonetic 
                phonetics={phonetic}
                key={index}
                />
                ))
            }
            
            <span className="d-block wordType mt-2 text-left px-2 fw-bold text-secondary">
                { props.meaning.partOfSpeech }
            </span>
            <ul className="mt-3 definition px-2">
                <li>{ props.meaning.definitions[0].definition }</li>
            </ul>
            { 
                props.meaning.definitions[0].example && 
                <small className="example px-2 text-secondary d-block">e.g. { props.meaning.definitions[0].example }</small> 
            } 

            {
                (props.meaning.synonyms.length > 1) &&
                <small className="synonym px-2 mt-3 d-block border py-1"> 
                    <span className="fw-bold d-block mb-2">Similar Word </span> { props.meaning.synonyms.map(synonym => (
                        <span className="badge mb-1">{synonym}</span>)) }
                </small>
            }
        </div>

    )
}