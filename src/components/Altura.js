function Altura(props) {
    return(
        <div>
            <label>Altura: </label>
            <input type="text" value={props.name} onChange={(a) => props.setAltura(a.target.value)}/>
        </div>
    )
}

export default Altura