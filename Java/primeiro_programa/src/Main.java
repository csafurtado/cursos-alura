import java.util.Scanner;

public class Main {
    // Foi usado static aqui para poder ser usado dentro da main()
    private static void printaInfoFilme(String nomeFilme, int anoLancamento, float notaFilme, String descricaoFilme, String descricaoDetalhadaFilme) {
        String infosFormatadas = """
        INFO DO FILME:
        
        Nome: %s
        Ano lancamento: %d
        Nota Filme: %2f
        Sinopse: %s
        Sinopse Detalhada: %s
        Temperatura atual em F: %.2f
        """.formatted(nomeFilme, anoLancamento, notaFilme, descricaoFilme, descricaoDetalhadaFilme, converteTemperatura(26));
        
        System.out.println(infosFormatadas);
    }
    
    private static float converteTemperatura(float celsius) {
        return (celsius * 1.8f) + 32;
    }

    public static void main(String[] args) throws Exception {
        System.out.println("Esse é o Screen Match\n");

        // Cria classe para leitor de entrada de dados, neste caso, pelo teclado
        Scanner leitura = new Scanner(System.in);
        
        System.out.print("Digite o filme aí mano: ");
        String nomeFilme = "Filme: " + leitura.nextLine(); // Tipo de leitura para Stringd;
        
        System.out.print("Digite o ano de lançamento: ");
        int anoLancamento = leitura.nextInt();

        System.out.print("Coloque a avaliação do filme: ");
        float notaFilme = leitura.nextFloat();

        String descricaoFilme = "Eh um filme qualquer como qualquer outro. Muito bom!";
        String sinopseAvancada = """
                Esta eh uma descricao mais complexa do filme
                pq esse descricao tem mais de uma linha
                apenas por isso mesmo.\
                """;

        // Imprime valores diretamente
        // System.out.println("Filme: " + nomeFilme);
        // System.out.println("Ano de lancamento: " + anoLancamento);
        // System.out.println("Nota do filme: " + notaFilme);
        // System.out.println(descricaoFilme);
        // System.out.println("Sinopse avançada: " + sinopseAvancada + "%s");

        printaInfoFilme(nomeFilme, anoLancamento, notaFilme, descricaoFilme, sinopseAvancada);

        leitura.close();
    }
}
