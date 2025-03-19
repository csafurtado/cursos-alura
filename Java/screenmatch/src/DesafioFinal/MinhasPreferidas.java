package DesafioFinal;

public class MinhasPreferidas {

    public void inclui(Audio audio) {
        if (audio.getClassificacao() >= 9) {
            System.out.println(audio.getTitulo() + "é considerado excelente para ser escutado agora!");
        } else {
            System.out.println(audio.getTitulo() + "é boa também, mas nem tanto!");
        }
    }
}
