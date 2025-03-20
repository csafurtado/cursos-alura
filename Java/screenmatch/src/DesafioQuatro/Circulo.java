package DesafioQuatro;


public class Circulo implements Forma {
    private float raio;

    Circulo(float raio) {
        this.raio = raio;
    }
    
    @Override
    public float calcularArea() {
        return raio * 3.1415f;
    }
}
