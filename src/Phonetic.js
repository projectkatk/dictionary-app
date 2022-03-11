import "./Phonetic.css";


export default function Phonetic(props) {
    function playSound() {       
        console.log("clicked")
        let audio = new Audio(props.phonetics.audio);
        const audioPlay = () => {
            audio.play();
        }
        return <span onClick={audioPlay} className="phoneticStyle"> 🔊 </span>   
    }
   
    return (
        <span className="px-2 Phonetic">               
                {
                    (props.phonetics.audio && props.phonetics.text) ? 
                    ( 
                        <span className="mx-lg-2"> 
                        {playSound()}                                         
                        {props.phonetics.text}
                        </span> 
                    ) :
                    (<span>{props.phonetics.text}</span>)
                }
        </span>        
    ) 
}