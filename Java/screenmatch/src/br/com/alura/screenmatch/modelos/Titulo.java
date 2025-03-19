package br.com.alura.screenmatch.modelos;


public class Titulo {
    private String nome;
    private int anoLancamento;
    private boolean incluidoNoPlano;
    private double somaAvaliacoes;
    private int totalAvaliacoes;
    private int duracaoMinutos;
    
    public Titulo() {
    }

    public Titulo(String nome, int anoLancamento, boolean incluidoNoPlano, double somaAvaliacoes, int totalAvaliacoes,
            int duracaoMinutos) {
        this.nome = nome;
        this.anoLancamento = anoLancamento;
        this.incluidoNoPlano = incluidoNoPlano;
        this.somaAvaliacoes = somaAvaliacoes;
        this.totalAvaliacoes = totalAvaliacoes;
        this.duracaoMinutos = duracaoMinutos;
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
}
