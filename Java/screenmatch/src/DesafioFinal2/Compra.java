package DesafioFinal2;

public class Compra {
    private String nome;
    private float valor;

    public Compra(String nome, float valor) {
        this.nome = nome;
        this.valor = valor;
    }

    public String getNome() {
        return nome;
    }

    public float getValor() {
        return valor;
    }

    @Override
    public String toString() {
        return "Compra de %s - R$ %.2f".formatted(nome, valor);
    }

}
