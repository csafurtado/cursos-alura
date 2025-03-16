import java.util.Random;
import java.util.Scanner;

public class DesafioUm {
    public static void main(String[] args) throws Exception {
        int numeroMisterioso = new Random().nextInt(100);
        int tentativas = 5;
        Scanner leitor = new Scanner(System.in);

        System.out.println("Tenta acertar esse número aqui mano\n");

        while(tentativas > 0){
            System.out.println("Tentativa numero " + tentativas);
            int chute = leitor.nextInt();

            if (chute == numeroMisterioso) {
                System.out.println("Parabéns! vc acertou o número!");
                leitor.close();
                return;
            } else if (chute < numeroMisterioso) {
                System.out.println("O número misterioso eh maior que o que vc digitou!");
            } else {
                System.out.println("O número misterioso eh menor que o que vc digitou!");
            }

            tentativas--;

        }

        leitor.close();
        System.out.println("Que pena! O número era: " + numeroMisterioso + " :c");

    }
}
