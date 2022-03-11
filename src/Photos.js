import "./Photos.css";

export default function Photos(props) {
    console.log(props.photos)
    if(props.photos) {
        return (
            <section className="Photos p-4 shadow mt-3 bg-white">
                <div className="row">
                    {props.photos.map((photo, index) => (
                        <div className="col-sm-4 p-2 d-flex justify-content-center" key={index} >
                            <a href={photo.largeImageURL} target="_blank" rel="noreferrer">
                                <img 
                                    src={photo.previewURL}                                    
                                    alt="realImage" 
                                    className="img-fluid shadow"
                                />
                            </a>
                        </div>                    
                    ))}
                </div>
                <small className="d-block text-center mt-4">
                    Images Sourced: 
                    <a href="https://pixabay.com/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="imageSource shadow rounded mx-2"
                    >
                        Pixabay
                    </a>
                </small>
            </section>
        )
    } else {
        return null;
    }
}