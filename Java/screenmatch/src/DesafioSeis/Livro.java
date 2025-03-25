package DesafioSeis;

public class Livro {
    private String nome;
    private String autor;
    private Editora editora;

    public Livro(LivroRecord livroRecord) {
        this.nome = livroRecord.nomeLivro();
        this.autor = livroRecord.autorLivro();
        this.editora = new Editora(livroRecord.editora());
    }

    public Livro(String nome, String autor, Editora editora) {
        this.nome = nome;
        this.autor = autor;
        this.editora = editora;
    }

    public String getNome() {
        return nome;
    }

    public String getAutor() {
        return autor;
    }

    public Editora getEditora() {
        return editora;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "LIVRO\nNome:%s  Autor: %s".formatted(nome, autor);
    }
}
