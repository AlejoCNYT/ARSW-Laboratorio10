const memo = new Map();

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Validación de entrada
    const nth = parseInt(req.body.nth);
    if (isNaN(nth) || nth < 0) {
        context.res = {
            status: 400,
            body: "Por favor ingrese un número entero positivo en el cuerpo de la solicitud"
        };
        return;
    }

    // Función recursiva con memoization
    function fibonacci(n) {
        if (n <= 1) return n;
        
        // Verificar si ya calculamos este valor
        if (memo.has(n)) {
            return memo.get(n);
        }
        
        // Calcular y almacenar en caché
        const result = fibonacci(n - 1) + fibonacci(n - 2);
        memo.set(n, result);
        return result;
    }

    // Calcular el resultado
    const result = fibonacci(nth);

    context.res = {
        body: JSON.stringify({
            input: nth,
            result: result.toString(),
            memoizedValues: Array.from(memo.entries())
        })
    };
};