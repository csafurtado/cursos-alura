export interface Pensamento {
    id?: number;  // Deixa o ID opcional, pois o ID é gerado automaticamente pelo backend
    conteudo: string;
    autoria: string;
    modelo: string;
}