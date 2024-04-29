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

let i = 0;
while(i < lista.length) {

	console.log( lista[i] );

	let element = lista[i];
	listaElement.innerHTML += `<li>${element}</li>`;
	i++;
}


/************************ Gestisco il click sul pulsante di aggiunta *************************/
							 
document.getElementById("btnAdd").addEventListener("click", addElementToList);

function addElementToList() {
	//Recupero il valore dal'input
	let nuovoComponente = document.getElementById("new").value;
	//Aggiungo il nuovo elemento all'array
	lista.push(nuovoComponente);
	//Aggiungo il nuovo elemento anche nel DOM
	listaElement.innerHTML += `<li>${nuovoComponente}</li>`;
	//Svuoto l'input
	document.getElementById("new").value = "";
}

