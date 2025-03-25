package DesafioFinal3;


public class Endereco {
    private String cep;
    private String logradouro;
    private String complemento;
    private String bairro;
    private String localidade;
    private char[] uf;
    private String regiao;
    private String codigoIBGE;

    public Endereco(String cep, String logradouro, String complemento,
                    String bairro, String localidade, char[] uf, String regiao, String codigoIBGE) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.complemento = complemento;
        this.bairro = bairro;
        this.localidade = localidade;
        this.uf = uf;
        this.regiao = regiao;
        this.codigoIBGE = codigoIBGE;
    }

    public Endereco(EnderecoRecord enderecoJSON) {
        this.cep = enderecoJSON.cep();
        this.logradouro = enderecoJSON.logradouro();
        this.complemento = enderecoJSON.complemento();
        this.bairro = enderecoJSON.bairro();
        this.localidade = enderecoJSON.localidade();
        this.uf = enderecoJSON.uf().toCharArray();
        this.regiao = enderecoJSON.regiao();
        this.codigoIBGE = enderecoJSON.ibge();
    }

    public String getCEP() {
        return cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public String getComplemento() {
        return complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public String getLocalidade() {
        return localidade;
    }

    public char[] getUF() {
        return uf;
    }

    public String getRegiao() {
        return regiao;
    }

    public String getCodigoIBGE() {
        return codigoIBGE;
    }

}
