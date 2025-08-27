# Tarefas do Portfólio Danillo (Plano A)

## Objetivo
Criar e manter um portfólio estilo *Active Theory light* para **Analista de Infraestrutura (Redes e Segurança)**.

## Stack
- HTML
- CSS
- JavaScript (Three.js via CDN)
- Deploy: GitHub Pages (branch `main`, pasta raiz)

## Estrutura de arquivos obrigatória

```
.
├─ index.html        # Estrutura base do site
├─ styles.css        # Estilo global
├─ main.js           # Lógica Three.js e carregamento de projetos
├─ /assets/
│   ├─ logo.svg
│   └─ Curriculo-Danillo.pdf
├─ /projects/
│   └─ index.json    # Lista de projetos (JSON)
└─ README.md
```

## Regras de implementação

1. **Canvas WebGL (`<canvas id="bg">`)**
   - Renderizar uma topologia de rede:
     - Nós (switch, firewall, servidor).
     - Links com partículas animadas representando tráfego.
   - Labels em **HTML** sobrepostos, para melhor acessibilidade.
   - Reduzir partículas em mobile (para performance).
2. **Conteúdo HTML semântico fora do canvas**
   - **Header fixo** com nome e navegação.
   - **Hero**: título + breve resumo (Infra, Redes, Firewalls, Segurança).
   - **Seções**: Sobre, Projetos, Contato.
   - **Projetos** carregados de `projects/index.json` e renderizados em cards.
   - **Footer** com © e ano automático.
3. **Estilo**
   - Tema dark.
   - Cores controladas por variáveis CSS (`--bg`, `--fg`, `--accent` etc.).
   - Layout responsivo (desktop/mobile).
4. **Boas práticas**
   - Código limpo e comentado.
   - SEO: `<title>`, `<meta description>`.
   - Acessibilidade: contraste suficiente, uso de headings (`h1`, `h2`, etc.), labels visíveis.
   - Performance: limitar `devicePixelRatio` a 2, geometria simples.
5. **Publicação**
   - Configurar Pages em `Settings → Pages → Deploy from branch (main / root)`.
   - O site deve funcionar diretamente abrindo `index.html` no navegador.

## Próximas tarefas sugeridas

- [ ] Preencher `projects/index.json` com base no meu CV (TRT23 Wi-Fi, Fortinet Firewall, Hyper-V, etc).
- [ ] Criar variantes de topologias em `main.js` (ex.: adicionar mais switches, balanceadores).
- [ ] Implementar versão **mobile light** (menos partículas).
- [ ] Criar um script opcional para trocar tema (dark/light).

