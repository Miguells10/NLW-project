# NLW Agents

## Tecnologias e Bibliotecas Utilizadas
### Backend
- Node.js
- TypeScript
- Fastify
- Drizzle ORM
- PostgreSQL (com extensão pgvector)
- Zod (validação de schema)
- dotenv (variáveis de ambiente)
- fastify-type-provider-zod
- @fastify/cors

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS

## Padrões de Projeto
- Organização em camadas (rotas, banco, schema no backend)
- Validação de ambiente e dados com Zod
- Separação de variáveis sensíveis em `.env`
- Componentização no frontend

## Setup do Projeto

### Backend
1. **Clone o repositório:**
   ```sh
   git clone <repo-url>
   cd NLW-project
   ```

2. **Configuração do banco de dados:**
   - O projeto utiliza Docker. Certifique-se de ter Docker instalado.
   - Edite o arquivo `.env` na raiz com a URL do banco, exemplo:
     ```env
     DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
     PORT=3333
     ```
   - Suba o banco:
     ```sh
     docker-compose up -d
     ```

3. **Instale as dependências:**
   ```sh
   npm install
   ```

4. **Rode as migrações:**
   ```sh
   npx drizzle-kit migrate
   ```

5. **Inicie o servidor:**
   ```sh
   npm run dev
   ```

### Frontend
1. **Acesse a pasta do frontend:**
   ```sh
   cd web
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

## Observações
- O backend roda por padrão na porta 3333.
- O frontend roda por padrão na porta 5173.
- As rotas principais do backend estão em `src/http/routes`.
- O schema do banco está em `src/db/schema`.
- Os componentes do frontend estão em `web/src/components`.

