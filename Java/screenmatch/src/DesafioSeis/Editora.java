package DesafioSeis;

public class Editora {
    private String nome;
    private String codigoRegistro;
    private int anoCriacao;

    public Editora (EditoraRecord editoraRecord) {
        this.nome = editoraRecord.nomeEditora();
        this.codigoRegistro = editoraRecord.codigoRegistro();
        this.anoCriacao = Integer.valueOf(editoraRecord.anoCriacao());
    }

    public Editora(String nome, String codigoRegistro, int anoCriacao) {
        this.nome = nome;
        this.codigoRegistro = codigoRegistro;
        this.anoCriacao = anoCriacao;
    }

    public String getNome() {
        return nome;
    }

    public String getCodigoRegistro() {
        return codigoRegistro;
    }

    public int getAnoCriacao() {
        return anoCriacao;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "EDITORA\nNome: %s  codigoRegistro: %s".formatted(nome, codigoRegistro);
    }

}
