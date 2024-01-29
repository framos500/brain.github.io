# Abra um arquivo para escrita (w = write)
with open('nome_do_arquivo.txt', 'w') as arquivo:
    # Escreva no arquivo
    arquivo.write("Conteúdo a ser salvo no arquivo\n")

# O arquivo será automaticamente fechado ao sair do bloco "with"
