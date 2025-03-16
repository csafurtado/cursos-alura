import java.util.Scanner;

public class DesafioFinal {

    public static void main(String[] args) {
        float saldo = 1000.0f;
        int escolha;
        Scanner leitor = new Scanner(System.in);

        while (true){
            printaMenu();

            System.out.println("Digite a opção desejada:");
            escolha = leitor.nextInt();

            switch (escolha) {
                case 1:
                    System.out.println("Seu saldo é de: " + saldo);
                    break;

                case 2:
                    System.out.println("Informe o valor que deseja receber: ");
                    float valorRecebido = leitor.nextFloat();

                    saldo += valorRecebido;

                    System.out.println("Saldo atualizado: " + saldo);
                    break;

                case 3:
                    System.out.println("Informe o valor que deseja transferir: ");
                    float valorTransferido = leitor.nextFloat();

                    if (valorTransferido > saldo){
                        System.out.println("Não é possível transferir! Valor é maior que o saldo!");
                        break;
                    }
                    
                    saldo -= valorTransferido;

                    System.out.println("Saldo atualizado: " + saldo);
                    break;

                case 4:
                    System.out.println("Saindo do programa...\n\n");
                    leitor.close();
                    return;
            
                default:
                    System.out.println("INSIRA UMA OPÇÃO VÁLIDA!!!!!!!!!!!");
                    break;
            }
        }
    }
    
    private static void printaMenu() {
        String ativadeString = """
            -------------------------
            | 1- Consultar Saldos   |
            | 2- Receber Valor      |
            | 3- Transferir valor   |
            | 4- Sair               |
            -------------------------
            """;

        System.out.println("Operações\n");
        System.out.println(ativadeString);
    }
}
