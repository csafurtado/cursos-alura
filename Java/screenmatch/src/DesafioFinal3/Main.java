package DesafioFinal3;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class Main {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        Gson gsonEndereco = new GsonBuilder()
                                .setPrettyPrinting()
                                .create();
        List<Endereco> enderecos = new ArrayList<>();

        String resultadoPesquisa = "";
        short totalCEPs = 0;
        
        // Realiza pesquisa pelo CEP
        while (totalCEPs != 3) {
            try {
                System.out.println("Digite o CEP do endereco sem tracos");
                String cepPesquisa = leitor.nextLine();
                resultadoPesquisa = retornaDadosPorCep(cepPesquisa);
                System.out.println("============INFO CEP============\n");
                System.out.println(resultadoPesquisa);
                System.out.println("================================");

                EnderecoRecord enderecoJSON = gsonEndereco.fromJson(resultadoPesquisa, EnderecoRecord.class);
                Endereco enderecoReal = new Endereco(enderecoJSON);

                enderecos.add(enderecoReal);

                totalCEPs++;
                
            } catch (IOException | InterruptedException e) {
                System.err.println("Deu erro ao tentar resgatar infos do CEP solicitado. Tente novamente");
                System.out.println(e.getMessage());
            }
            
        }
        
        // Transforma em arquivo .json
        try {
            geraArquivoJSON(enderecos, gsonEndereco);
        } catch (Exception e) {
            System.err.println("Deu erro ao tentar gerar arquivo JSON.");
            System.out.println(e.getMessage());
        }

        leitor.close();
    }

    private static void geraArquivoJSON(List<Endereco> enderecos, Gson gson) throws IOException {
        FileWriter escritor = new FileWriter("enderecos.json");
        
        escritor.write(gson.toJson(enderecos));

        escritor.close();
    }

    private static String retornaDadosPorCep(String cep) throws IOException, InterruptedException{
        // Já cria um objeto URI para ser utilizado na requisição
        URI urlBusca = URI.create("https://viacep.com.br/ws/%s/json/".formatted(cep));

        System.out.println(urlBusca);

        HttpClient cliente = HttpClient.newHttpClient();
        HttpRequest req = HttpRequest.newBuilder().uri(urlBusca).build();
        HttpResponse<String> res = cliente
                    .send(req, HttpResponse.BodyHandlers.ofString());

        return res.body();
    }
}
