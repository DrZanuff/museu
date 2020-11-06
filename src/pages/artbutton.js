import './artbutton-style.css'

function ArtButton(props){

    return(
        <div className="img-box" onClick={props.fc()}>
            <img src="https://godotengine.org/themes/godotengine/assets/logo.svg"/>
        </div>
    )

}

export default ArtButton;