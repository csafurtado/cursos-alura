import br.com.alura.screenmatch.calculos.CalculadoraDeTempo;
import br.com.alura.screenmatch.calculos.FiltroRecomendacao;
import br.com.alura.screenmatch.modelos.Episodio;
import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;


public class Main {
    public static void main(String[] args) throws Exception {
        Filme filmeUno = new Filme("Mark Wahlberg");
        filmeUno.setNome("A volta dos que não foram 2");
        filmeUno.setDuracaoMinutos(240);
        filmeUno.setAnoLancamento(2010);

        Filme filmeDos = new Filme("Banana Fraser");
        filmeDos.setNome("O diagonal");
        filmeDos.setDuracaoMinutos(15);
        filmeDos.setAnoLancamento(2025);

        Serie serieTal = new Serie();
        serieTal.setNome("Aggretsuko");
        serieTal.setMinutosPorEpisodio(20);
        serieTal.setAnoLancamento(2019);

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
    }
}
