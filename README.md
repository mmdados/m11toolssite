# M11 Tools - Distribuidora Gedore & Tekbond

Site institucional e catálogo comercial digital da **M11 Tools**, distribuidora especializada em toda a linha de ferramentas manuais e pneumáticas **Gedore** (Gedore Red, Gedore Blue Industrial) e soluções químicas de fixação, adesivos e selantes **Tekbond**.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack, TypeScript)
- **Estilização:** Vanilla CSS & CSS Moderno (Design System Dark Industrial inspirado na marca M11)
- **Ícones:** Lucide Icons
- **Gestão de Cotações:** Context API com persistência local (`localStorage`)
- **Integração Comercial:** Gerador dinâmico de links para WhatsApp (`wa.me`)

---

## 🚀 Funcionalidades

1. **Vitrine & Catálogo Interativo:**
   - Filtro por marca (Gedore Red, Gedore Blue Industrial, Tekbond Químicos).
   - Filtro por categoria (Chaves & Soquetes, Torquímetros, Alicates, Carrinhos/Maletas, Adesivos, Silicones, Sprays).
   - Busca instantânea por nome do produto, código SKU de fábrica ou aplicação técnica.
   - Modal com especificações técnicas completas de cada produto.

2. **Carrinho / Gaveta de Cotação Rápida:**
   - Adicione múltiplos produtos com controle de quantidade.
   - Envio da lista formatada com 1 clique direto para o WhatsApp do atendimento: **(11) 97293-1840**.
   - Botão para copiar lista para e-mail ou ordens de compra corporativas.

3. **Atendimento Direto & Faturamento B2B:**
   - Informações de faturamento em boleto para empresas (PJ) com NF-e.
   - Formulário de proposta comercial e botão flutuante de atendimento no WhatsApp.

---

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor local
npm run dev

# Gerar build de produção
npm run build
```

---

## 🌐 Deploy na Vercel e Configuração de Domínio na Hostinger

### 1. Importar no Vercel
1. Acesse o painel da [Vercel](https://vercel.com).
2. Clique em **Add New...** -> **Project**.
3. Selecione o repositório **mmdados/m11toolssite**.
4. Mantenha o framework como **Next.js** e clique em **Deploy**.

### 2. Apontar o Domínio na Hostinger
Na Vercel, acesse **Project Settings > Domains** e adicione o seu domínio:
- Exemplo: `m11tools.com.br` e `www.m11tools.com.br`.

No painel de DNS da **Hostinger**, crie ou edite os registros:
| Tipo | Nome / Host | Valor / Destino | TTL |
|---|---|---|---|
| **A** | `@` | `76.76.21.21` | 3600 (ou automático) |
| **CNAME** | `www` | `cname.vercel-dns.com` | 3600 (ou automático) |
