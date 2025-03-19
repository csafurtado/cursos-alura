package br.com.alura.screenmatch.calculos;

public class FiltroRecomendacao {
    private String recomendacao;

    public void filtra(Classificavel classificavel) {
        if (classificavel.getClassificacao() >= 4)
            System.out.println("Está entre os favoritos do momento!");
        else if (classificavel.getClassificacao() >= 2)
            System.out.println("Está entre os meio avaliados!");
        else
            System.out.println("Esse filme é horrível");
    }
}
