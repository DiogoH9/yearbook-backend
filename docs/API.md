Cursar Ciência da Computação na UFMG"
}
{
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "cidade": "Salinas",
  "frase": "Aqui começa o futuro.",
  "planosFuturos": "Cursar Ciência da Computação na UFMG",
  "fotoUrl": null,
  "role": "USER",
  "criadoEm": "2026-04-03T10:30:00.000Z"
}
## Mensagens

### GET /mensagens

Lista todas as mensagens do mural.

- **Autenticação:** Não
- **Body:** Nenhum

- **Resposta de sucesso:** `200 OK`

```json
[
  {
    "id": 1,
    "conteudo": "Boa sorte a todos! 🎓",
    "criadoEm": "2026-04-03T12:00:00.000Z",
    "autor": {
      "id": 1,
      "nome": "Maria Silva",
      "fotoUrl": null
    }
  }
]# API do Yearbook — Documentação de Endpoints

Base URL (produção): `https://yearbook-backend.vercel.app`

## Convenções

- Todas as respostas são em JSON
- Rotas protegidas exigem header `Authorization: Bearer <token>`
- O campo `senhaHash` nunca é retornado em nenhuma resposta
- Erros seguem o formato `{ "erro": "mensagem descritiva" }`

## Auth

### POST /auth/register

Cria uma nova conta de aluno.

- **Autenticação:** Não
- **Body:**

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "senha": "minhasenha123",
  "cidade": "Salinas",
  "frase": "Aqui começa o futuro.",
  "planosFuturos": "