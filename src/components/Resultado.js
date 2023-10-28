
function Resultado(props) {
    // const result = () => {
    //     const dec = (d) => {
    //         Number(d).toFixed(2)
    //     }
    //     return(
    //         <div>
    //           <p>Resultado:{dec}</p>
    //         </div>
    //       )
    // }
    return(
        <div>
            <p>Resultado: {props.name}</p>
        </div>
    )
}

export default Resultado