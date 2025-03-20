package DesafioFinal2;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Cartao {
    private String titular;
    private float limite;
    private List<Compra> listaCompras;

    Cartao(String titular, float limite){
        this.titular = titular;
        this.limite = limite;
        this.listaCompras = new ArrayList<>();
    }

    public String getTitular() {
        return titular;
    }

    public float getLimite() {
        return limite;
    }

    public boolean atualizaLimite(float valorCompra) {
        if (valorCompra < this.limite) {
            this.limite -= valorCompra;
            return true;
        }

        return false;
    }

    public List<Compra> getListaCompras(){
        return this.listaCompras;
    }

    public void mostraCompras() {
        listaCompras.sort(Comparator.comparing(Compra::getValor));

        System.out.println("-------------------------\n\tLISTA DE COMPRAS\n");
        for (Compra compra : listaCompras) {
            System.out.println(compra);
        }
        System.out.println("-------------------------\nSaldo: %.2f".formatted(limite));

    }

}
