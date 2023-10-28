import styles from './Form.module.css'

function Form() {
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do peso normal</td>
                    <td>menor do que 18,5</td>
                </tr>
                <tr>
                    <td>Peso normal</td>
                    <td>18,5 - 24,9</td>
                </tr>
                <tr>
                    <td>Excesso de peso</td>
                    <td>25,0 - 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade grau I</td>
                    <td>30,0 - 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade grau II</td>
                    <td>35,0 - 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade grau III</td>
                    <td>Maior ou igual a 40,0</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Form