package DesafioQuatro;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Circulo c1 = new Circulo(12.4f);
        Circulo c2 = new Circulo(2.4f);
        Circulo c3 = new Circulo(1.42f);
        Quadrado q1 = new Quadrado(12.3f,10.0f);
        Quadrado q2 = new Quadrado(2.31f,1.0f);
        Quadrado q3 = new Quadrado(1.32f,10.0f);

        ArrayList<Forma> listaFormas = new ArrayList<>();
        listaFormas.add(c1);
        listaFormas.add(c2);
        listaFormas.add(c3);
        listaFormas.add(q1);
        listaFormas.add(q2);
        listaFormas.add(q3);

        for (Forma forma : listaFormas) {
            if (forma instanceof Circulo)
                System.out.println("Área do Círculo: " + forma.calcularArea());
            else
                System.out.println("Área do Quadrado" + forma.calcularArea());
        }
    }
}
