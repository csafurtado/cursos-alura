package DesafioFinal;


public class Musica extends Audio {
    private String artista;
    private String album;
    private int AnoLancamento;

    public String getArtista() {
        return artista;
    }

    public void setArtista(String artista) {
        this.artista = artista;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public int getAnoLancamento() {
        return AnoLancamento;
    }

    public void setAnoLancamento(int anoLancamento) {
        AnoLancamento = anoLancamento;
    }

    @Override
    public int getClassificacao() {
        if (this.getTotalCurtidas() > 2000) {
            return 10;
        } else {
            return 7;
        }
    }
}
