package br.com.alura.screenmatch.principal;

import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.Scanner;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import br.com.alura.screenmatch.excecoes.ErroDeConversaoDeAnoException;
import br.com.alura.screenmatch.modelos.Titulo;
import br.com.alura.screenmatch.modelos.TituloOmdb;

public class PrincipalComBusca {
    public static void main(String[] args) throws IOException, InterruptedException {
        Properties prop = new Properties();
        String fileName = "Java/screenmatch/config.properties";
        String apiKeyOMDBVar, urlBuscaVar;

        // Cria um objeto personalizado a partir do Builder da classe para manipular dados JSON
        Gson gson = new GsonBuilder()
                .setPrettyPrinting()            // Define a configuração de printar JSONs gerados de forma mais legível para pessoas, ou mais "bonito"
                .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE) // Nomes dos campos começam com maiúscula e seguem o camelCase
                .create();          // Cria de fato o objeto

        // Usa um arquivo para poder ler a variável de ambiente da apikey
        try (FileInputStream input = new FileInputStream(fileName)) {
            prop.load(input);
            apiKeyOMDBVar = prop.getProperty("omdb_api_key");
            urlBuscaVar = prop.getProperty("url_busca");
        }

        Scanner leitor = new Scanner(System.in);
        String filmeBuscado = "";
        List<Titulo> titulos = new ArrayList<>();

        // Classe que Escreve em arquivos. Precisa ser fechada que nem o Scanner.
        FileWriter escritaTexto = new FileWriter("titulosTexto.txt");

        while (!filmeBuscado.equalsIgnoreCase("sair")) {
            System.out
                    .println("Por qual filme vc deseja pesquisar?\nDigite \'Sair\' caso não queira mais fazer buscas.");
            filmeBuscado = leitor.nextLine();

            if (filmeBuscado.equalsIgnoreCase("sair"))
                break;

            String urlRequsicao = urlBuscaVar + apiKeyOMDBVar + "&t=" + filmeBuscado.replace(" ", "+");

            // Cria Cliente e requisição para as operações de solicitação de dados na Web
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(urlRequsicao)).build();

            // Cria a resposta e faz a requisição
            HttpResponse<String> response = client
                    .send(request, HttpResponse.BodyHandlers.ofString());

            String jsonResposta = response.body();
            System.out.println(jsonResposta);

            TituloOmdb tituloVindoJSONRecord = gson.fromJson(jsonResposta, TituloOmdb.class);

            try {
                Titulo tituloReal = new Titulo(tituloVindoJSONRecord); // Foi criado um construtor específico para este tipo
                System.out.println("\n\nRECORD:\n" + tituloVindoJSONRecord + "\nREAL:\n" + tituloReal);
                System.out.println("\n\n");

                titulos.add(tituloReal);
                escritaTexto.write(tituloReal.toString() + "\n");    // Escreve no arquivo

            } catch (NumberFormatException e) {
                System.err.println("Ops. Deu erro rs" + "\n" + e.getMessage());
            } catch (IllegalArgumentException e) {
                System.err.println("Erro no argumento da URL, está incorreta " + e.getMessage());
            } catch (ErroDeConversaoDeAnoException e) {
                System.err.println(e.getMessage());
            }
        }
        
        System.out.println("Lista:\n" + titulos);
        FileWriter escritaJson = new FileWriter("titulosJSON.json");
        escritaJson.write(gson.toJson(titulos));
        
        leitor.close();
        escritaJson.close();
        escritaTexto.close();
    }
}
