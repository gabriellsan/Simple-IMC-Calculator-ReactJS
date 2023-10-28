function Peso(props) {
    return(
        <div>
            <label>Peso: </label>
            <input type="text" value={props.name} onChange={(p) => props.setPeso(p.target.value)}/>
        </div>
    )
}

export default Peso