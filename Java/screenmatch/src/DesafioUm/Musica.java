package DesafioUm;

public class Musica {
    String titulo;
    String artista;
    int anoLancamento;
    float avaliacao;
    int numAvaliacoes;

    public void exibeFichaTecnica() {
        String infoFormatada = """
                FICHA TÉCNICA
                ==============
                Título: %s
                Artista: %s
                Ano Lançamento: %d
                Avaliação: %.2f
                """.formatted(titulo, artista, anoLancamento, avaliacao);

        System.out.println(infoFormatada);
    }

    public void avaliaMusica(float nota) {
        avaliacao += nota;
    }

    public float mediaAvaliacoes() {
        return avaliacao / numAvaliacoes;
    }
}
