var lista = [
	"https://media.fstatic.com/Rfi25MvsNZV5NX1YV_xr-uUh71c=/290x478/smart/media/movies/covers/2011/11/f8863358f61d8d09dd653d22e8ba60f2.jpg",
	"https://br.web.img2.acsta.net/medias/nmedia/18/95/60/14/20417708.jpg",
	"https://upload.wikimedia.org/wikipedia/pt/e/ed/Footloose2011Poster.jpg",
	"https://br.web.img3.acsta.net/medias/nmedia/18/95/48/11/20407384.jpg",
	"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/32/63/20028692.jpg",
	"https://br.web.img3.acsta.net/medias/nmedia/18/87/36/47/19874736.jpg",
	"https://s2.glbimg.com/tOCl4JIpu1pJfb35a5f7fCm1aks=/362x536/https://s2.glbimg.com/a7JUIkOuS0Hike-wiZCrdxrNWfw=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/F/m/pFqgnATtq3m4dhaLXBDQ/2020-cartoes-de-natal-poster.jpg",
	"https://br.web.img3.acsta.net/pictures/14/12/11/15/29/051042.jpg",
	"https://br.web.img3.acsta.net/medias/nmedia/18/87/91/33/20028720.jpg",
	"https://i.pinimg.com/originals/8a/f9/70/8af9709decf58663c1370490baff4fb5.jpg",
	"https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27151706.jpeg%27&ImageUrl=%27151706.jpeg%27&EntityType=%27Item%27&EntityId=%276760%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
	"http://4.bp.blogspot.com/_DFg-zI0hy8U/TE3AOOYYHkI/AAAAAAAABuE/UVbUaqNnEm0/s1600/AUTOGRAFADOS+023.jpg",
	"https://br.web.img3.acsta.net/c_310_420/pictures/18/05/15/18/48/1999967.jpg",
	"https://clarovideocdn3.clarovideo.net/PELICULAS/UGLYTRUTHTHE/EXPORTACION_WEB/PT/UGLYTRUTHTHEWHORIZONTAL.jpg?size=675x380",
	"https://br.web.img2.acsta.net/medias/nmedia/18/87/01/04/19871068.jpg",
	"https://br.web.img2.acsta.net/medias/nmedia/18/87/13/77/19872396.jpg",
	"https://filmesmega.org/wp-content/uploads/2021/09/Fugindo-do-Amor-1-300x450.jpg",
	"https://1.bp.blogspot.com/-lAyjiibDa6o/XhYiEHrX2UI/AAAAAAAArPg/cI473MTlo0kgC9pdSLSkQ_3kNCf-8LVxgCLcBGAsYHQ/s1600/hqdefault%2B%25282%2529.jpg",
	"https://upload.wikimedia.org/wikipedia/pt/c/cc/Step_Up.jpg",
	"https://br.web.img2.acsta.net/medias/nmedia/18/93/75/86/20275816.jpg",
	"https://m.media-amazon.com/images/I/61qVePAtfPL._AC_SX522_.jpg",
	"https://www.partes.com.br/wp-content/uploads/CINEMA-TODOS-OS-CAMINHOS-LEVAM-A-ROMA-POSTER-338x500.jpg",
	"https://br.web.img3.acsta.net/pictures/20/09/30/07/28/0926795.jpg",
	"https://1.bp.blogspot.com/-dFn7NO6rRII/X9EOqN482SI/AAAAAAAALFo/RCvV3nYtPPgb0FCTf1PjZpPN6xw8ee5OwCLcBGAsYHQ/s512/AAAABSjdoI524Wkh2US3t_p1Y2Js1zrJAD2iSAMU-YJeB7SX9YVJaKgQ03km4RsSgVoKMCMhAOM1A9fiTzHQb1lmo0A7sTTm.jpg",
	"https://cdn.fstatic.com/media/movies/covers/2021/01/LOVE_JACKED_-__Release_Poster__2018.jpg",
	"https://br.web.img3.acsta.net/medias/nmedia/18/87/37/11/19874800.jpg",
	"https://br.web.img3.acsta.net/pictures/21/11/16/12/35/4355865.jpg",
	"https://br.web.img3.acsta.net/pictures/21/02/23/08/05/1824339.jpg",
	"https://lojasaraiva.vteximg.com.br/arquivos/ids/12117913/1009219138.jpg?v=637142280378500000",
	"https://m.media-amazon.com/images/M/MV5BMWFhMzFjYjktMmJkNy00YTVmLWI1ZWUtYjI3MTgxZmYyNzZiXkEyXkFqcGdeQXVyMTEyMDQwNDQw._V1_FMjpg_UX1000_.jpg"
];
var listaNomes = [
	"Um dia",
	"Uma linda mulher",
	"Footloose",
	"O amor não tira férias",
	"Cartas para Julieta",
	"Amizade colorida",
	"Cartões de Natal",
	"Simplesmente acontece",
	"Amor e outras drogas",
	"Amor em obras",
	"Muito bem acompanhada",
	"Casa comigo?",
	"O plano imperfeito",
	"A verdade nua e crua",
	"Como perder um homem em 10 dias",
	"O melhor amigo da noiva",
	"Fugindo do amor",
	"Resgate do coração",
	"Se ela dança eu danço",
	"De repente 30",
	"Sexo sem compromisso",
	"Todos os caminhos levam a Roma",
	"Amor com data marcada",
	"Sintonizados no amor",
	"O estranho noivo de Maya",
	"Qual seu número?",
	"Um castelo para o natal",
	"A semana da minha vida",
	"Deixe a neve cair",
	"Love Tatics"
];

function escolher() {
	var i = Math.floor(Math.random() * lista.length);
	var escolhido = lista[i];
	var escolha = "<img src=" + escolhido + ">";
	var resultado = document.getElementById("escolhido");
	resultado.innerHTML = escolha;
	var nomeFilme = document.getElementById("nomeFilme");
	nomeFilme.innerHTML = listaNomes[i];
}
function catalogo() {
	for (var i = 0; i < lista.length; i++) {
		var catalogoFilme = "<img src=" + lista[i] + ">";
		var aparecer = document.getElementById("catalogo");
		aparecer.innerHTML = aparecer.innerHTML + catalogoFilme;
	}
	document.getElementById("btnCatalogo").disabled = true;
}
function adicionar() {
	var novo = document.getElementById("novos").value;
	var adicionar = lista.push(novo);
	document.getElementById("novos").value = "";
	var novoNome = document.getElementById("novoNome").value;
	var adcNome = listaNomes.push(novoNome);
	document.getElementById("novoNome").value = "";
}