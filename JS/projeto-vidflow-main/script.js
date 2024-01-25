const urlAPI = "http://localhost:3000/videos";

const containerVideos = document.querySelector(".videos__container")

const api = fetch(urlAPI).then(
    resposta => {
        return resposta.json()
    }
).then(
    videos => {
        videos.forEach(video => {
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>
            `;
        });
    }
).catch(
    erro => {
        console.log(erro);
        containerVideos.innerHTML = `<p>Erro ao carregar os vídeos: ${erro}</p>`;
    }
);