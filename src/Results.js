import Meaning from "./Meaning"


export default function Results(props) {       
    console.log(props.data)
    if(props.keyword) {
            return (
                <section className="Results bg-white meaning-section shadow"> 
                    <div className="row m-auto">                    
                        {props.data.meanings.map((meaning, index) => {
                            return (
                                <Meaning 
                                    meaning={meaning}
                                    key={index}
                                    data={props.data}
                                    id={index}
                                />                                
                            );
                        })}                        
                    </div>               
                </section>
            )             
    } else {
        return null;
    }       
}

