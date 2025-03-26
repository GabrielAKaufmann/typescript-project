// Definição da interface Media
interface Media {
    play(): void;
    stop(): void;
}

// Implementações dos tipos de mídia
class AudioMedia implements Media {
    play(): void {
        console.log("Reproduzindo áudio...");
    }
    stop(): void {
        console.log("Áudio pausado.");
    }
}

class VideoMedia implements Media {
    play(): void {
        console.log("Reproduzindo vídeo...");
    }
    stop(): void {
        console.log("Vídeo pausado.");
    }
}

class PodcastMedia implements Media {
    play(): void {
        console.log("Reproduzindo podcast...");
    }
    stop(): void {
        console.log("Podcast pausado.");
    }
}

// Factory Method para criar a mídia correta
class MediaFactory {
    static createMedia(type: string): Media {
        switch (type) {
            case 'audio':
                return new AudioMedia();
            case 'video':
                return new VideoMedia();
            case 'podcast':
                return new PodcastMedia();
            default:
                throw new Error('Tipo de mídia inválido.');
        }
    }
}

// Exemplo de uso
const mediaType = 'video'; // Pode ser 'audio', 'video' ou 'podcast'
const media = MediaFactory.createMedia(mediaType);
media.play();
setTimeout(() => media.stop(), 3000);