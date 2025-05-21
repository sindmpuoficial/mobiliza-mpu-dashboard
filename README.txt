# Dashboard #MobilizaMPU

Sistema de monitoramento da adesão à mobilização nacional dos servidores do Ministério Público da União (MPU), do Conselho Nacional do Ministério Público (CNMP) e da Escola Superior do Ministério Público da União (ESMPU).

![Dashboard #MobilizaMPU](https://via.placeholder.com/1200x600?text=Dashboard+MobilizaMPU)

## 📋 Sobre o Projeto

O Dashboard #MobilizaMPU é uma ferramenta desenvolvida para o SindMPU (Sindicato Nacional dos Servidores do MPU) para monitorar e gerenciar a adesão à mobilização nacional em todos os estados e unidades do MPU no Brasil.

### Principais Funcionalidades

- **Mapa Interativo**: Visualização da adesão à mobilização por estado com sistema de cores
- **Detalhamento por Unidade**: Dados de adesão para cada unidade do MPU em todo o país
- **Estatísticas e Gráficos**: Visualização de dados agregados, médias e comparativos
- **Gerenciamento de Dados**: Interface para atualização dos índices de adesão
- **Exportação de Relatórios**: Geração de relatórios em Excel e CSV

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js 14+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/sindmpu/mobiliza-mpu-dashboard.git
   cd mobiliza-mpu-dashboard
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   # ou
   yarn start
   ```

4. Acesse o aplicativo em:
   ```
   http://localhost:3000
   ```

### Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

## 📖 Guia de Uso

### Navegação

- **Modo Mapa**: Visualize a adesão por estado em um mapa interativo do Brasil
- **Modo Unidades**: Explore os dados específicos de cada unidade do MPU 
- **Modo Estatísticas**: Acesse gráficos e análises estatísticas da mobilização

### Atualização de Dados

1. Clique em um estado ou unidade específica
2. Clique no botão "Editar Dados"
3. Atualize o percentual de adesão e adicione observações relevantes
4. Clique em "Salvar" para atualizar os dados

### Exportação de Relatórios

1. Navegue até a aba "Estatísticas"
2. Escolha uma das opções de exportação:
   - Dados dos Estados (Excel)
   - Dados dos Órgãos (Excel)
   - Relatório Completo (Excel com múltiplas planilhas)

### Salvamento de Dados

Todos os dados são automaticamente salvos no navegador via localStorage. Para exportar os dados permanentemente, utilize a funcionalidade de exportação.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface
- **Recharts**: Biblioteca para criação de gráficos responsivos
- **TailwindCSS**: Framework CSS utilitário
- **XLSX**: Biblioteca para manipulação de arquivos Excel
- **LocalStorage**: API para armazenamento local de dados

## 📱 Responsividade

O dashboard é totalmente responsivo e pode ser acessado de dispositivos móveis, tablets e desktops.

## ⚙️ Personalização

O dashboard utiliza as cores oficiais do SindMPU e pode ser personalizado conforme necessário. As principais configurações de cores estão em:

- `src/data/constants.js`
- `src/utils/colorUtils.js`
- `tailwind.config.js`

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

SindMPU - [www.sindmpu.org.br](https://www.sindmpu.org.br)