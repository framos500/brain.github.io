import java.io.FileWriter;
import java.io.IOException;

public class SalvarArquivo {
    public static void main(String[] args) {
        try {
            // Abra um FileWriter
            FileWriter escritor = new FileWriter("nome_do_arquivo.txt");

            // Escreva no arquivo
            escritor.write("Conteúdo a ser salvo no arquivo\n");

            // Feche o FileWriter
            escritor.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
