const lista = [
	"APC BR1200SI",
	"Fractal Torrent",
	"Corsair RM850x SHIFT",
	"Asus ROG Strix X570-F",
	"AMD Ryzen 5900x",
	"Noctua NH-D15 Chromax",
	"Crucial Ballistix 2x16GB C16 3600MT/s",
	"RTX 3080 12gb",
	"Samsung 980 Pro 2TB",
	"Samsung Odissey Neo G9",
	"Asus VG279Q",
	"Hitachi CM815+",
	"Steelseries Apex Pro",
	"Logitech G502 Proteus Spectrum",
	"Focusrite Scarlett 2i4 2nd Gen",
	"Rode Video Mic Pro",
	"Logitech Brio 4K",
	"Sennheiser HD599",
	"Fiio BTR5"
];

const listaElement = document.querySelector("ul");

/*************************** Attraverso l'array e stampo ogni item ***************************/
console.log("Itero gli elementi con for");
for (let i = 0; i < lista.length; i++) {

	const element = lista[i];
	console.log(i, element);

	// const liElement = document.createElement("li");
	// liElement.innerText = element;
	// listaElement.append(liElement);

	listaElement.innerHTML += `<li>${element}</li>`;
	
}
// console.log(i); //errore (scope)


/***************************  Attraverso di nuovo l'array, ma col while ***********************/
console.log("Itero gli elementi con while");
let i = 0;
while (i < lista.length) {

	const element = lista[i];
	console.log(i, element);

	i++;
}
console.log("Contatore ancora esistente dopo il while: ", i);


/*************************** Esempio di ricerca in un array + break **************************/
// Esempio di ricerca in un array (con break)
// // Creo un variabile d'appoggio esterna al ciclo per conservare il risultato della ricerca
// let hoTrovato = false;

// // Itero sull'array
// for (let i = 0; i < lista.length; i++) {
// // Stampo l'elemento corrente, solo per debuggin
// 	const element = lista[i];
// 	console.log(i, element);
	
// // Quando ho trovato l'elemento giusto, me lo scrivo nella variabile e stoppo (break)
// 	if(element == "Case") {
// 		hoTrovato = true;
// 		break;
// 	}
	
// }

// console.log( hoTrovato );
