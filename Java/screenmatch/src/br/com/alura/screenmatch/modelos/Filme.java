package br.com.alura.screenmatch.modelos;

import br.com.alura.screenmatch.calculos.Classificavel;


public class Filme extends Titulo implements Classificavel {
    private String diretor;
    
    public Filme() {
    }

    public Filme(String diretor) {
            super();    // Utiliza o construtor da classe Pai
            this.diretor = diretor;
    }

    public String getDiretor() {
        return diretor;
    }

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }

    @Override
    public int getClassificacao() {
        return (int) pegaMedia() / 2;
    }
    
}
