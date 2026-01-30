# SennaWorks---Carpintaria


# 🪚 Carpintaria Excelência - Website React

Um site moderno, profissional e totalmente responsivo para uma empresa de carpintaria, construído com React + TypeScript + CSS3.

## ✨ Características Principais

✅ **7 Componentes Completos** - Header, Hero, Services, About, Portfolio, Contact, Footer  
✅ **Totalmente Responsivo** - Desktop, Tablet e Mobile  
✅ **Design Profissional** - Cores e layout inspirados em madeira  
✅ **TypeScript** - Tipagem forte para segurança  
✅ **CSS Modular** - Cada componente tem seu próprio CSS  
✅ **Formulário Funcional** - Com validação e estado  
✅ **Performance Otimizada** - Carregamento rápido  
✅ **Documentação Completa** - 5 guias inclusos  

## 🚀 Quick Start

### Instalação (Primeira Vez)
```bash
cd "C:\Users\ryans\Documents\Devs Work\meu-site-carpintaria"
npm install
npm start
```

### Executar (Próximas Vezes)
```bash
npm start
```

Ou simplesmente **double-click** em `start.bat`

O site abrirá em http://localhost:3000

## 📁 Estrutura de Projeto

```
src/
├── components/          # 7 componentes React
│   ├── Header.tsx/.css
│   ├── Hero.tsx/.css
│   ├── Services.tsx/.css
│   ├── About.tsx/.css
│   ├── Portfolio.tsx/.css
│   ├── Contact.tsx/.css
│   └── Footer.tsx/.css
├── App.tsx             # Componente raiz
├── App.css
├── index.tsx
└── index.css
```

## 🎨 Seções do Site

| Seção | Descrição |
|-------|-----------|
| **Header** | Menu de navegação sticky com links |
| **Hero** | Banner inicial com CTA button |
| **Services** | 3 serviços em cards responsivos |
| **About** | Sobre a empresa (2 colunas) |
| **Portfolio** | Galeria de 6 projetos em grid |
| **Contact** | Formulário + informações de contacto |
| **Footer** | Links e rodapé |

## 🛠️ Tecnologias Usadas

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem de dados
- **CSS3** - Styling e responsividade
- **Flexbox/Grid** - Layouts modernos
- **React Hooks** - State management (useState)

## 📱 Responsividade

Totalmente responsivo com breakpoint em **768px**:
- Desktop (>1024px): Layout completo
- Tablet (768px-1024px): 2 colunas
- Mobile (<768px): 1 coluna, stack vertical

## 📚 Documentação

4 guias inclusos no projeto:

1. **DOCUMENTACAO.md** - Guia completo e detalhado
2. **GUIA_RAPIDO.md** - Quick start de 3 passos
3. **ESTRUTURA_PROJETO.md** - Visualização da arquitetura
4. **VISUALIZACAO.md** - Screenshots textuais do site
5. **CHECKLIST.md** - Checklist de implementação

## 🎯 Personalizar o Site

### Mudar Cores
Edite os valores em qualquer arquivo `.css`:
- `#8B4513` = Marrom (madeira)
- `#f39c12` = Laranja (destaque)
- `#2c3e50` = Azul (texto)

### Adicionar Mais Serviços
Edite o array `services` em `src/components/Services.tsx`

### Editar Projectos
Edite o array `projects` em `src/components/Portfolio.tsx`

### Adicionar Imagens
1. Coloque imagens em `public/`
2. Use: `<img src="/imagem.jpg" alt="descrição" />`

## 🧪 Verificar Erros

```bash
# Verificar erros TypeScript
npm run build

# Testar (gerar coverage)
npm test
```

## 🚀 Deploy (Colocar Online)

### Build para Produção
```bash
npm run build
```

### Opções de Deploy
- **Netlify**: Drag & drop pasta `build/`
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Configuração no package.json

## 🔄 Próximas Melhorias

- [ ] Adicionar imagens reais
- [ ] Integrar WhatsApp
- [ ] Backend para emails
- [ ] Blog/Testimonios
- [ ] Admin painel
- [ ] Animações (AOS)

## 🆘 Troubleshooting

### "npm não é reconhecido"
→ Reinstale Node.js de https://nodejs.org

### "Porta 3000 em uso"
→ `npm start -- --port 3001`

### "Erros no console"
→ Abra DevTools (F12) e verifique Console tab

## 📊 Estatísticas

- **Componentes**: 7
- **Ficheiros CSS**: 7
- **Linhas de Código**: ~800
- **Responsividade**: 100%
- **Documentação**: 5 guias

## 📖 Documentação React

- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

**Desenvolvido com ❤️ para Carpintaria Excelência**

Pronto para decolar! 🚀
