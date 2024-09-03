const express = require('express')
const app = express()
const port = 3000
 
app.get('/calculadora', (req, res) => {
//Nota: req.query permite que os valores para...
//...as variáveis operacao, n1 e n2 sejam extraídos da URL de certa forma.
const operacao = String(req.query.operacao)
const n1 = parseFloat(req.query.n1)
const n2 = parseFloat(req.query.n2)
let resultado

if (!operacao || isNaN(n1) || isNaN(n2)) {
    return res.status(400).send('Erro código 400 - Bad request.')
}
if (operacao === 'soma') {
    resultado = n1 + n2
}
else if (operacao === 'subtracao') {
    resultado = n1 - n2
}
else if (operacao === 'multiplicacao') {
    resultado = n1 * n2
}
else if (operacao === 'divisao') {
    if (n2 === 0) {
        return res.status(400).send('Erro código 400 - Bad request.')
    }
    resultado = n1 / n2
}
else {
    return res.status(400).send('Erro código 400 - Bad request.')
}
res.send(`Resultado: ${resultado}`)
})

app.listen(port, () => {
    console.log(`Calculadora: http://localhost:${port}`)
})