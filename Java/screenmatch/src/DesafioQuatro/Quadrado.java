package DesafioQuatro;


public class Quadrado implements Forma {
    private float lado1;
    private float lado2;
    
    Quadrado(float lado1, float lado2) {
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    @Override
    public float calcularArea() {
        return lado1 * lado2;
    }
}
