package DesafioCinco;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException, InterruptedException {
        int escolha = -1;
        Scanner leitura = new Scanner(System.in);

        while (escolha != 0) {
            printaMenu();
            escolha = leitura.nextInt();
            leitura.nextLine();

            switch (escolha) {
                case 0:
                    break;
                case 1: {
                    System.out.println("Insira o nome da criptomoeda (ex. bitcoin):");
                    String nomeCripto = leitura.nextLine();
                    String uriBusca = "https://api.coingecko.com/api/v3/simple/price?ids=" + nomeCripto + "&vs_currencies=usd"; 

                    HttpClient cliente = HttpClient.newHttpClient();
                    HttpRequest req = HttpRequest.newBuilder(URI.create(uriBusca)).build();
                    HttpResponse<String> res = cliente.send(req, HttpResponse.BodyHandlers.ofString());

                    System.err.println(res.body());
                    break;
                }
                case 2: {
                    System.out.println("Insira o nome da receita:");
                    String nomeReceita = leitura.nextLine();
                    String uriBusca = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + nomeReceita; 

                    HttpClient cliente = HttpClient.newHttpClient();
                    HttpRequest req = HttpRequest.newBuilder(URI.create(uriBusca)).build();
                    HttpResponse<String> res = cliente.send(req, HttpResponse.BodyHandlers.ofString());

                    System.err.println(res.body());
                    break;
                }

                default:
                    System.out.println("Insira uma opção válida!!\n\n");
                    break;
            }

        }
        
        leitura.close();
    }

    public static void printaMenu() {
        String infoFormatada = """
                \n\n================API================
                Insira a API que você deseja verificar:

                1- CoinGecko: Cotação de criptomoeda
                2- TheMealDB: Nome de receitas
                0- Sair

                ===================================\n\n
                """;

        System.out.println(infoFormatada);
    }
}
