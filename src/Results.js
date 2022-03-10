import "./Results.css";

export default function Results(props) {
    const secondWordCondition = props.data;
    console.log(secondWordCondition)
    const arrayLength = secondWordCondition.length;
    
    if(props.data.ready) {
        return (
            <section className="Results bg-white meaning-section shadow">                    
                <div className="row m-auto">
                    <div className="col-12 col-md-6 p-4">
                        <h2 className="px-2 d-inline-block">{props.keyword}</h2>
                        <span className="d-inline-block px-4 phonetic">{props.data.phonetic}</span>  
                        <span className="d-block wordType border border-2 p-1 mx-2  mt-2 text-center">{props.data.type1}</span>
                        <ul className="mt-3">
                            <li>{props.data.definition1}</li>
                        </ul>
                    </div>
                    {(secondWordCondition.length > 1) && 
                        <div className="col-12 col-md-6 second-meaning p-4">
                            <h2 className="px-2 d-inline-block">{props.keyword}</h2>
                            <span className="d-inline-block px-4 phonetic">{props.data.phonetic}</span>
                            <span className="d-block border border-2 p-1 mx-2 wordType mt-2 text-center">{secondWordCondition[arrayLength-1].partOfSpeech}</span>
                            <ul className="mt-3">
                                <li>{secondWordCondition[arrayLength-1].definitions[0].definition}</li>
                            </ul>
                        </div>
                    }
                </div>               
            </section>
        )
    } else {
        return null;
    }
    
}