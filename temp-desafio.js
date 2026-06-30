import prisma from './prisma/client.js';

// Busca um aluno inexistente
const alunoInexistente = await prisma.aluno.findUnique({
  where: {
    id: 999,
  },
});

console.log(alunoInexistente);

// Lista alunos
const alunos = await prisma.aluno.findMany({
  select: {
    id: true,
    nome: true,
    email: true,
    cidade: true,
    frase: true,
    planosFuturos: true,
    fotoUrl: true,
    role: true,
    criadoEm: true,
  },
});

console.log(alunos);

// Cria uma mensagem (CORRIGIDO: alunoId)
const mensagem = await prisma.mensagem.create({
  data: {
    texto: 'Salve turma!',
    alunoId: 1,
  },
});

console.log(mensagem);

// Lista mensagens com o autor (CORRIGIDO: aluno)
const mensagens = await prisma.mensagem.findMany({
  include: {
    aluno: {
      select: {
        nome: true,
        fotoUrl: true,
      },
    },
  },
});

console.log(JSON.stringify(mensagens, null, 2));

await prisma.$disconnect();