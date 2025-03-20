package br.com.alura.screenmatch.principal;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;
import br.com.alura.screenmatch.modelos.Titulo;

public class MainComListas {
    public static void main(String[] args) {
        Filme filmeUno = new Filme("Formiga Z", 2024);
        Filme filmeDos = new Filme("Auto do Drift",1999);
        Filme filmeTres = new Filme("Toyotaro: Missao Impossivel",2024);
        Serie serieUno = new Serie("Aggretsuko", 2019);
        
        filmeUno.avalia(8.8);
        filmeDos.avalia(6.7);
        filmeTres.avalia(7.7);
        serieUno.avalia(9.7);

        List<Titulo> listaAssistidos = new ArrayList<>();
        listaAssistidos.add(filmeUno);
        listaAssistidos.add(filmeDos);
        listaAssistidos.add(filmeTres);
        listaAssistidos.add(serieUno);

        // Lista desordenada
        for (Titulo titulo : listaAssistidos)
            System.out.println(titulo);

        // Lista Ordenada
        // Collections.sort(listaAssistidos);   // Usar a classe para ordenar
        listaAssistidos.sort(Comparator.comparing(Titulo::getAnoLancamento));   // Usar uma classe de comparador como argumento para ordenar  
        for (Titulo titulo : listaAssistidos)
            System.out.println(titulo);


    }
}
