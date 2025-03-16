import java.util.Scanner;

public class DesafioDois {
    public static void main(String[] args) throws Exception {
        int escolha;
        Scanner leitor = new Scanner(System.in);

        printaMenu();
        escolha = leitor.nextInt();

        switch (escolha) {
            case 1:
                positivoOuNegativo(leitor);
                break;
            case 2:
                compararNumeros(leitor);
                break;
            
            case 3:
                calcularArea(leitor);
                break;

            case 4:
                mostrarTabuada(leitor);
                break;

            case 5:
                parOuImpar(leitor);
                break;

            case 6:
                calcularFatorial(leitor);
                break;

            default:
                System.err.println("Valor fora das opções! Encerrando o programa.");
                break;
        }

        leitor.close();
    }

    private static void printaMenu() {
        System.out.println("Bem vindo ao menu de atividades!\nEscolha Uma para fazer");
        
        String ativadeString = """
                -----------------------------------
                | 1- Positivo ou Negativo         |
                | 2- Comparar dois numeros        |
                | 3- Calcular área de poligono    |
                | 4- Mostrar tabuada de numero    |
                | 5- Par ou Impar                 |
                | 6- Calcular fatorial de numero  |
                -----------------------------------
                """;
        
        System.out.println(ativadeString);
    }

    private static void positivoOuNegativo(Scanner leitor) {
        System.out.print("Digite o número: ");
        int numero = leitor.nextInt();

        if (numero >= 0)
            System.out.println("Número é positivo!");
        else
            System.out.println("Número é negativo!");
    }

    private static void compararNumeros(Scanner leitor) {
        System.out.print("Digite o primeiro número: ");
        int primNumero = leitor.nextInt();
        
        System.out.print("Digite o segundo número: ");
        int segNumero = leitor.nextInt();

        if (primNumero == segNumero)
            System.out.println("Os números são iguais!");
        else 
            if (primNumero > segNumero) 
                System.out.println("O primeiro numero é maior que o segundo");
            else
                System.out.println("O segundo numero é maior que o primeiro");

    }

    private static void calcularArea(Scanner leitor) {
        System.out.println("Escolha o tipo de área a calcular:\n");
        System.out.println("1- Quadrado\n2- Círculo\n");

        int escolha = leitor.nextInt();

        float numero, resultado;

        if (escolha == 1) {
            System.out.print("Digite o tamanho do lado do quadrado: ");
            numero = leitor.nextFloat();
            resultado = numero*numero;
        }
        else if (escolha == 2) {
            System.out.print("Digite o tamanho do raio do circulo: ");
            numero = leitor.nextFloat();
            resultado = (numero*numero)*3.14f;
        }
        else {
            System.out.println("Nada será calculado, pois a opção foi incorreta");
            return;
        }

        System.out.println("O resultado é: " + resultado);

    }

    private static void mostrarTabuada(Scanner leitor) {
        System.out.print("Coloque o número do qual deseja a tabuada: ");
        int numero = leitor.nextInt();

        for(int i=1; i<=10; i++){
            String infoFormatada = """
                    | %d*%d = %d | 
                    """.formatted(numero, i, numero*i);
            System.out.println(infoFormatada);
        }
    }

    private static void parOuImpar(Scanner leitor) {
        System.out.print("Coloquie um numero aqui: ");
        int numero = leitor.nextInt();

        if (numero <= 0) {
            System.out.println("Números de 0 para baixo não são válidos");
            return;
        }

        if (numero % 2 == 0) 
            System.out.println("O numero eh par!");
        else
            System.out.println("O numero eh impar!");
    }

    private static void calcularFatorial(Scanner leitor) {
        System.out.print("Coloque um numero para calcular seu fatorial: ");
        int numero = leitor.nextInt();

        if (numero < 0){
            System.out.println("Não eh possível calcular fatorial de numeros abaixo de 0");
            return;
        }

        if (numero == 0 || numero == 1)
            System.out.println("Resultado: 1");
        else {
            int resultado = numero;
            for(int i=numero-1; i>1; i--){
                resultado *=i;
            }

            System.out.println("Resultado: " + resultado);
        }
    }
}
