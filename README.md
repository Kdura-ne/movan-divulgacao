# Movan — site de divulgação

Página única de apresentação do transporte escolar, baseada na área `/divulgação` do projeto Figma do Movan. Layout responsivo, com as imagens fornecidas e fontes locais compartilhadas com o projeto principal.

## Rodar localmente

Requer Node.js 22.12+ ou 24+ e npm.

```sh
npm install
npm run dev
```

Acesse **http://127.0.0.1:5174**. A porta é fixa para não conflitar com o servidor do sistema principal.

## Build estático

```sh
npm run build
npm run preview
```

O build é gerado em `dist/`. A prévia de produção fica em **http://127.0.0.1:4174**.

## Organização

- `src/App.jsx`: marcação da página e componentes de apresentação.
- `src/styles.css`: todos os estilos e adaptações para celular.
- `src/main.jsx`: montagem do React.
- `public/assets/`: fotos, elemento gráfico do cabeçalho e fontes locais.

O React serve apenas para renderizar o HTML. Não há estados, eventos JavaScript, API, cadastro ou backend. Navegação por âncoras e galeria de fotos funcionam com HTML e CSS.

## Conteúdo e dados de referência

O motorista é Renê. A apresentação foi preenchida com uma descrição do atendimento, sem inventar tempo de experiência, certificações ou características não informadas do veículo.

- Regiões: Jardim Ângela, Jardim Nakamura, Jardim Capela, Jardim Vera Cruz, Parque do Lago e Vila Calu.
- Turnos escolares de referência: manhã, 07:00–12:00; tarde, 13:30–18:30; noite, 19:00–23:00. A tabela usa entrada e saída da escola; embarques e retornos devem ser combinados conforme cada rota.
- Vagas: cenário ilustrativo de 15 por turno, com aviso para consultar a disponibilidade. É uma referência da configuração Minibus de 15 passageiros e motorista, e não uma confirmação de lotação ou vagas reais.
- Telefone placeholder: **(11) 90000-0000**. Os botões **WhatsApp** e **Garantir vaga** continuam levando à área de contato da própria página. Depois de receber um número real, seus destinos podem ser substituídos por um link `https://wa.me/55DDDNUMERO`.

### Referências dos dados

- [Fiat: configurações da Ducato Minibus e Escolar](https://www.media.stellantis.com/br-pt/fiat/press/fiat-apresenta-novo-uno-furgao-e-novo-fiorino-na-fenatran-2013).
- [Prefeitura de São Paulo: organização escolar de 2026, art. 23](https://legislacao.prefeitura.sp.gov.br/instrucao-normativa-secretaria-municipal-de-educacao-sme-56-de-18-de-dezembro-de-2025/consolidado).
- [Subprefeitura M’Boi Mirim: bairros do distrito Jardim Ângela](https://prefeitura.sp.gov.br/web/m_boi_mirim/w/noticias/37852).

As fotos do motorista e da van foram fornecidas para este projeto. A foto da van substitui a paisagem do banner da referência. O conector do Figma não concedeu acesso ao arquivo; a captura de tela enviada foi usada como referência visual.

A galeria usa fotos ilustrativas de uma Fiat Ducato escolar branca da mesma geração da imagem do banner, incluindo duas vistas do interior do mesmo veículo. Não são fotos confirmadas do veículo do Renê. Origem e arquivos estão documentados em `public/assets/galeria/FONTES.md`.

O banner usa as fontes locais [Racing Sans One](https://github.com/google/fonts/tree/main/ofl/racingsansone) e [Just Another Hand](https://github.com/google/fonts/tree/main/apache/justanotherhand). As respectivas licenças estão em `public/assets/fonts/`.

O ícone do WhatsApp é uma imagem PNG local em `public/assets/whatsapp.png`, obtida do [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:WhatsApp.svg).
