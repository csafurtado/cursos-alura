package DesafioDois;

public class IdadePessoa {
    private String nome;
    private int idade;

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public int getIdade() {
        return idade;
    }
    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String verificaIdade(){
        return this.idade < 18 ? "Menor de Idade" : "Maior de Idade"; 
    }
}
