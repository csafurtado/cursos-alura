package br.com.alura.screenmatch.modelos;

import com.google.gson.annotations.SerializedName;

import br.com.alura.screenmatch.excecoes.ErroDeConversaoDeAnoException;

public class Titulo implements Comparable<Titulo> {     // Para comparar objetos da mesma classe
// public class Titulo { 

    // @SerializedName("Title")     // Não é muito interessante usar
    private String nome;
    // @SerializedName("Year")      // Não é muito interessante usar
    private int anoLancamento;
    private boolean incluidoNoPlano;
    private double somaAvaliacoes;
    private int totalAvaliacoes;
    private int duracaoMinutos;
    
    public Titulo(TituloOmdb meuTituloOmdb) {
        this.nome = meuTituloOmdb.title(); // Assim é um get de um record
        
        if (meuTituloOmdb.year().length() > 4){
            throw new ErroDeConversaoDeAnoException("Ano veio com formato diferente, com mais de quatro dígitos!");
        }
        this.anoLancamento = Integer.valueOf(meuTituloOmdb.year()); // A classe Wrapper de inteiros irá tentar traduzir o String para o tipo int
        this.duracaoMinutos = Integer.valueOf(meuTituloOmdb                                       .runtime().replace(" min", ""));
    }

    public Titulo(String nome, int anoLancamento) {
        this.nome = nome;
        this.anoLancamento = anoLancamento;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAnoLancamento() {
        return anoLancamento;
    }

    public void setAnoLancamento(int anoLancamento) {
        this.anoLancamento = anoLancamento;
    }

    public boolean isIncluidoNoPlano() {
        return incluidoNoPlano;
    }

    public void setIncluidoNoPlano(boolean incluidoNoPlano) {
        this.incluidoNoPlano = incluidoNoPlano;
    }

    public double getSomaAvaliacoes() {
        return somaAvaliacoes;
    }

    public int getTotalAvaliacoes() {
        return totalAvaliacoes;
    }

    public int getDuracaoMinutos() {
        return duracaoMinutos;
    }

    public void setDuracaoMinutos(int duracaoMinutos) {
        this.duracaoMinutos = duracaoMinutos;
    }

    public void exibeFichaTecnica() {
        System.out.println("Nome: " + nome);
        System.out.println("Ano de lançamento: " + anoLancamento);
    }
    
    public void avalia(double notaAvaliacao) {
        somaAvaliacoes += notaAvaliacao;
        totalAvaliacoes++;
    }

    public double pegaMedia() {
        return somaAvaliacoes/totalAvaliacoes;
    }

    @Override
    public int compareTo(Titulo outroTitulo) {    // Para comparar objetos da mesma classe
        return this.getNome().compareTo(outroTitulo.getNome());
    }

    @Override
    public String toString() {
        return "Titulo: %s (%d) - %d min".formatted(this.nome, getAnoLancamento(), getDuracaoMinutos());
    }
}
