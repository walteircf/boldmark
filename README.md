# 📝 BoldMark – Editor de Texto com Marcadores

![GitHub repo size](https://img.shields.io/github/repo-size/walteircf/boldmark?style=flat-square)
![GitHub code size](https://img.shields.io/github/languages/code-size/walteircf/boldmark?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/walteircf/boldmark?style=flat-square)
![GitHub license](https://img.shields.io/github/license/walteircf/boldmark?style=flat-square)

> Um editor de texto leve e intuitivo com suporte a marcadores personalizados para **negrito**, _itálico_ e quebras de linha com visualização em tempo real.

---

## ✨ Demonstração

![Preview GIF](https://user-images.githubusercontent.com/00000000/preview.gif)
> ⚠️ Coloque aqui um GIF ou imagem demonstrando a aplicação em uso.

---

## 📚 Descrição

O **BoldMark** é uma aplicação web simples que permite editar textos com marcadores personalizados, substituindo `*texto*` por **negrito** e `{{italicValue@open}}texto{{italicValue@close}}` por _itálico_.

Ideal para:

- Criação de conteúdo com estilo simples
- Preparação de mensagens para sistemas que utilizam marcadores personalizados
- Treinamento ou estudo de manipulação de DOM e eventos em JavaScript

---

## 🧰 Tecnologias utilizadas

| Tecnologia | Versão |
|------------|--------|
| HTML5      | ✔️     |
| CSS3       | ✔️     |
| JavaScript | ✔️     |

---

## 🚀 Como executar o projeto

1. **Clone o repositório**:

```
git clone https://github.com/walteircf/boldmark.git
```
2. **Abra o arquivo index.html no navegador**:

Basta dar duplo clique no arquivo ou abrir com uma extensão tipo Live Server no VS Code.

---

## 🧪 Funcionalidades
✅ Digite textos e veja a pré-visualização ao vivo
✅ Aplique negrito com *texto*
✅ Aplique itálico com {{italicValue@open}}texto{{italicValue@close}}
✅ Insira quebras de linha \\n ou \\n\\n com botões
✅ Checkbox para controlar se o \\n é renderizado como <br>
✅ Interface responsiva e moderna com CSS puro

---

## 📂 Estrutura do Projeto

```
boldmark/
├── index.html        # Estrutura da interface
├── style.css         # Estilo visual
└── script.js         # Lógica interativa
```

---

## 🖼️ Layout

A interface é composta por:

- Textarea de entrada com escuta para formatação dinâmica
- Botões de formatação (negrito, itálico, quebra de linha)
- Checkbox de quebra de linha
- Preview dinâmico com renderização estilizada

---

## 💡 Exemplo de uso

Entrada:
```
*Olá*, este é um exemplo com {{italicValue@open}}itálico{{italicValue@close}}.\\n\\nNova linha!
```
Renderizado:
```
Olá, este é um exemplo com itálico.

Nova linha!
```

---

## 🤝 Contribuindo

Sinta-se à vontade para abrir issues, enviar PRs ou sugerir melhorias.
```
# Fork o repositório
# Crie uma branch: git checkout -b minha-feature
# Commit suas alterações: git commit -m 'feat: nova feature'
# Push para o seu fork: git push origin minha-feature
# Abra um Pull Request
```

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

Feito com 💙 por Walteir Freitas
