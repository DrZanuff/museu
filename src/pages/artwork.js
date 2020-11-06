import "./artwork-style.css"

function ArtworkPage(props){
    return(
        <div className="artwork-body">

            <div className="image-top">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gustave_Courbet_auto-retrato.jpg/732px-Gustave_Courbet_auto-retrato.jpg"/>
            </div>

            <div className="info">
                <p>Nome da Obra</p>
                <p>Ano</p>
                <p>Nome do Autor</p>
            </div>

            <hr></hr>

            <div className="descript">
                <p>Descrição</p>
            </div>

            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum rem voluptate animi eum quos et sequi error ad facilis impedit, perferendis molestias iure! Porro placeat velit autem consectetur sequi!
            </div>

            <div className="footer-app" >
                <div onClick={ ()=> props.setPage("Main") } >
                    <div>Voltar</div>
                </div>
            </div>

        </div>
    )
}

export default ArtworkPage;