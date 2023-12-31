const { obterPessoas } = require("./service");

async function main() {
  try {
    const { results } = await obterPessoas("a");
    const pesos = results.map((item) => parseInt(item.height));
    console.log(pesos);
    const total = pesos.reduce((anterior, proximo) => {
      return anterior + proximo;
    },0);

    console.log("total", total);
  } catch (error) {
    console.error("Deu ruim", error);
  }
}

main();
