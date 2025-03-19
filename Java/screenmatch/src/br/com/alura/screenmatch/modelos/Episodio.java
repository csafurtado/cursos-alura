package br.com.alura.screenmatch.modelos;

import br.com.alura.screenmatch.calculos.Classificavel;


public class Episodio implements Classificavel{
    private int numetro;
    private String nome;
    private Serie serie;
    private int totalVisualizacoes;

    public int getNumetro() {
        return numetro;
    }

    public void setNumetro(int numetro) {
        this.numetro = numetro;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Serie getSerie() {
        return serie;
    }

    public void setSerie(Serie serie) {
        this.serie = serie;
    }

    public int getTotalVisualizacoes() {
        return totalVisualizacoes;
    }

    public void setTotalVisualizacoes(int totalVisualizacoes) {
        this.totalVisualizacoes = totalVisualizacoes;
    }

    @Override
    public int getClassificacao() {
        return totalVisualizacoes > 100 ? 4 : 2;
    }
}
