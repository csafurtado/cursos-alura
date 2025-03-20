package br.com.alura.screenmatch.principal;
import java.util.ArrayList;

import br.com.alura.screenmatch.calculos.CalculadoraDeTempo;
import br.com.alura.screenmatch.calculos.FiltroRecomendacao;
import br.com.alura.screenmatch.modelos.Episodio;
import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;


public class Main {
    public static void main(String[] args) throws Exception {
        Filme filmeUno = new Filme("A volta dos que não foram 2", 2010);
        filmeUno.setDiretor("Mark Wahlberg");
        filmeUno.setDuracaoMinutos(240);

        Filme filmeDos = new Filme("O diagonal", 2025);
        filmeDos.setDiretor("Banana Fraser");
        filmeDos.setDuracaoMinutos(15);

        Serie serieTal = new Serie("Aggretsuko", 2019);
        serieTal.setMinutosPorEpisodio(20);

        CalculadoraDeTempo calculadora = new CalculadoraDeTempo();
        calculadora.inclui(filmeUno);
        calculadora.inclui(filmeDos);

        System.out.println("Tempo total calculadora: " + calculadora.getTempoTotal());

        Episodio episodio = new Episodio();
        episodio.setNumetro(1);
        episodio.setSerie(serieTal);
        episodio.setTotalVisualizacoes(1334);

        FiltroRecomendacao filtro = new FiltroRecomendacao();
        filtro.filtra(filmeUno);
        filtro.filtra(episodio);

        var filmeTres = new Filme("Fajuto: o cara que não tem nada", 2023);
        filmeTres.setAnoLancamento(2023);
        
        ArrayList<Filme> listaFilmes = new ArrayList<>();
        listaFilmes.add(filmeUno);  // Adiciona na estrutura de lista ArrayList
        listaFilmes.add(filmeDos);
        listaFilmes.add(filmeTres);

        System.out.println("Primeiro do Filme: " + listaFilmes.get(0).getNome());   // o get() retorna o objeto da lista na posição 0 da lista
        System.out.println(listaFilmes);  // Imprime os objetos que estão na lista
        System.out.println("Qtd filmes: " + listaFilmes.size());
    }
}
