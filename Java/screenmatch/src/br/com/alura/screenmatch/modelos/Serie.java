package br.com.alura.screenmatch.modelos;


public class Serie extends Titulo {
    private int temporadas;
    private int epsPorTemporada;
    private boolean ativa;
    private int minutosPorEpisodio;
    
    public Serie(String nome, int anoLancamento) {
        super(nome, anoLancamento);
    }

    public int getTemporadas() {
        return temporadas;
    }

    public void setTemporadas(int temporadas) {
        this.temporadas = temporadas;
    }

    public int getEpsPorTemporada() {
        return epsPorTemporada;
    }

    public void setEpsPorTemporada(int epsPorTemporada) {
        this.epsPorTemporada = epsPorTemporada;
    }

    public boolean isAtiva() {
        return ativa;
    }

    public void setAtiva(boolean ativa) {
        this.ativa = ativa;
    }

    public int getMinutosPorEpisodio() {
        return minutosPorEpisodio;
    }

    public void setMinutosPorEpisodio(int minutosPorEpisodio) {
        this.minutosPorEpisodio = minutosPorEpisodio;
    }

    @Override
    public int getDuracaoMinutos() {
        return minutosPorEpisodio * epsPorTemporada * temporadas;
    }

    @Override
    public String toString() {
        String infoFormatada = "Serie: %s (%d)".formatted(this.getNome(), this.getAnoLancamento());
        return infoFormatada;
    }

    
}
