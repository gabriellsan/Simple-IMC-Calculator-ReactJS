function Calcular(props) {
    const calc = () => {
        // const nome = props.sr(props.p / (props.a**2))
        // props.sr(nome)
        // console.log(nome)
        parseInt(props.sr(props.p / (props.a*props.a).toFixed(2)))
      }
    return(
        <div>
            <button onClick={() => calc()}>Calcular</button>
        </div>
    )

}

export default Calcular