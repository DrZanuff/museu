import ArtButton from "./artbutton"
import './main-style.css'

function MainPage(props){

    return(
    <div className="main-body">

        <div className="title">
            <div>
                <p>Galeria de Arte</p>
            </div>
            
        </div>

        <div className="sub-title">
            <div className="el selector">
                Obras de Arte
            </div>
            
            <div className="el unset">

            </div>
        </div>

        <div className="img-grid">
            <ArtButton fc={props.fc}></ArtButton>
            <ArtButton fc={props.fc}></ArtButton>
            <ArtButton fc={props.fc}></ArtButton>
            <ArtButton fc={props.fc}></ArtButton>
        </div>

        <div className="footer">
            <div className="footer-el title">
                <span>Tema Dark</span>
            </div>
            
            <div className="footer-el button">
                <input class="apple-switch" type="checkbox"></input>
            </div>
            
        </div>

    </div>
    )

}

export default MainPage;