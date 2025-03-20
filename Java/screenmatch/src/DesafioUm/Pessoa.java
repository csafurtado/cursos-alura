package DesafioUm;

public class Pessoa {
    private String nome;
    private int idade;

    private Pessoa(){
        
    }

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

    public void metodoTal() {
        System.out.println("Rélou Uordi!");
    }

    @Override
    public String toString() {
        return "PESSOA:\nNome: " + this.nome + "\nIdade: " + this.getIdade();
    }
}
