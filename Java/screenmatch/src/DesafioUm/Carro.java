package DesafioUm;

import java.time.LocalDateTime;
import java.util.Date;


public class Carro {
    String modelo;
    int ano;
    String cor;

    public void exibeFichaTecnica() {
        String infoFormatada = """
                CARRO
                =============
                Modelo: %s
                Ano: %d
                Cor: %s
                """;

        System.out.println(infoFormatada);
    }

    public int calculaIdadeCarro(int anoAtual) {
        return anoAtual - ano;
    }
}
