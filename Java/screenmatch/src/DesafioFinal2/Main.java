package DesafioFinal2;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        String nomeTitular; float limiteMaximo;

        System.out.print("Digite o nome do Titular do cartão: ");
        nomeTitular = leitor.nextLine();

        System.out.print("Digite o limite máximo do cartão: ");
        limiteMaximo = leitor.nextFloat();

        Cartao novoCartao = new Cartao(nomeTitular, limiteMaximo);

        // limpa tela
        for (int i=0;i<50;i++) {System.out.println("");}
        
        System.out.println("Deseja comprar algo com seu cartão?\n1- Sim\n0- Nao\n");
        int iniciarCompras = leitor.nextInt();

        if (iniciarCompras != 0) {
            String nomeCompra;
            float valorCompra;
            int escolha;

            while (true) {
                leitor.nextLine();
                System.out.print("Digite o nome da compra: ");
                nomeCompra = leitor.nextLine();

                System.out.print("Digite o valor da compra: R$ ");
                valorCompra = leitor.nextFloat();

                if (novoCartao.atualizaLimite(valorCompra)) {
                    novoCartao.getListaCompras().add(new Compra(nomeCompra,valorCompra));
                    System.out.println("\n Compra realizada com sucesso!\nLimite disponível: R$ %.2f".formatted(novoCartao.getLimite()));
                } else {
                    System.out.println("Limite foi excedido! Compra não realizada!\n");
                    break;
                }

                System.out.println("\n\nDeseja realizar outra compra?\n1- Sim\n0- Nao");

                escolha = leitor.nextInt();

                if (escolha == 0)
                    break;
            }

        }

        novoCartao.mostraCompras();

    }
}
