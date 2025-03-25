package br.com.alura.screenmatch.modelos;

// Sendo um record, esta classe precisa ter os campos que o JSON de resposta tem
public record TituloOmdb(String title, String year, String runtime) {
}
