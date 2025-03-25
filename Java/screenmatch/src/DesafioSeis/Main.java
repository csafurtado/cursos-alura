package DesafioSeis;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class Main {
    public static void main(String[] args) {
        String jsonLivroInfo = """
                {
                    "NomeLivro" : "Vem brincar",
                    "CodigoISBN" : 30a45asd45as65,
                    "AutorLivro" : "Nicolas Netto",
                    "Editora" : {
                        "NomeEditora" : "Som Livre",
                        "AnoCriacao" : "1999",
                        "CodigoRegistro" : "66678",
                        "Registrada" : "nao"
                    }
                }
                """; // No campo final de um JSON, não utilizar vírgula depois dela

        Gson gsonLivro = new GsonBuilder()
                        .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)
                        .create();

        LivroRecord livroRecord = gsonLivro.fromJson(jsonLivroInfo, LivroRecord.class);
        EditoraRecord editoraRecord = livroRecord.editora();
        
        Livro livro = new Livro(livroRecord);
        Editora editora = new Editora(editoraRecord);

        System.out.println(livroRecord);
        System.out.println(livro);
        
        System.out.println("");

        System.out.println(editoraRecord);
        System.out.println(editora);
    }
}
