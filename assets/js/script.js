class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (url) => _url = url;
    }
    get url() {
        return this.getUrl;
    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        const _id = id;
        this.getId = () => _id;
        this.setId = (id) => _id = id;
    }
    playMultimedia = () => {
        //Validación
        document.querySelectorAll('iframe').forEach(
            function(elem) {
                elem.parentNode.removeChild(elem);
            });


        //Media.mostrar(this.getUrl(), this.getId());
    }
    setInicio = (tiempo) => {
        if (tiempo != '') {
            // console.log(tiempo)
            // console.log(`${this.getUrl()}?start=${tiempo}`)
            // return `${this.getUrl()}?start=${tiempo}`
            const direccion = 'https://www.youtube.com/embed/'
            Media.mostrar(`${direccion}${this.getUrl()}?start=${tiempo}`, this.getId())
        } else {
            // console.log(`${this.getUrl()}`)
            // return `${this.getUrl()}`
            Media.mostrar(`https://www.youtube.com/embed/${this.getUrl()}`, this.getId())
        }


    };
}

//Función IIFE (auto-ejecutable)
const Media = (() => {
    const agregarVideo = (url, id) => {
        let ifrm = document.createElement('iframe');
        elem = document.getElementById(id);
        //console.log(elem)
        elem.appendChild(ifrm);
        ifrm.setAttribute('src', url);
        ifrm.setAttribute('width', 580);
        ifrm.setAttribute('height', 315);
    }

    return {
        mostrar: (url, id) => agregarVideo(url, id)
    }
})();

const activar = (url, tipo, tiempo) => {
    const video = new Reproductor(url, tipo);
    video.playMultimedia();
    video.setInicio(tiempo);
}

document.getElementById('btnMusica').onclick = () => activar('sAFiSr7iSEc', 'musica', '')
document.getElementById('btnPeliculas').onclick = () => activar('szby7ZHLnkA', 'peliculas', '0')
document.getElementById('btnSeries').onclick = () => activar('Z9G1Mf6TZRs', 'series', '50')