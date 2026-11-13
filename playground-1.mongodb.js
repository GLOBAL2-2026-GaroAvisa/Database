//GaroAvisa Global - MongoDB
//Enzo Vieira Bernardini
//Eduardo Batista Locaspi
//Liana Lyumi Morisita Fujisima
//Victor Alves Lopes

use('GaroAvisa');

//limpeza
db.alertas.drop();
db.locais.drop();

//criando collections
use('GaroAvisa');
db.createCollection('alertas');
db.createCollection('locais');

//testando criacao
use('GaroAvisa');
db.getCollectionNames();

//inserindo dados nas collections

//collection alertas
use('GaroAvisa');

db.alertas.insertMany([
  {
    idAlerta: 1, tipo: 'CHUVA', titulo: 'Chuva forte prevista',
    descricao: 'Probabilidade de chuva de 85% e 12 mm/h previstos para as 7h. Leve guarda-chuva.',
    gravidade: 'ALTA', status: 'ATIVO', dtAlerta: new Date('2026-11-11T06:00:00'),
    local: { idLocal: 1, apelido: 'Casa', usuarioId: 1, bairro: 'Tatuape', cidade: 'Sao Paulo', estado: 'SP' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'CHUVA - ALTA - ATIVO', data: new Date('2026-11-11T06:00:00') }
    ]
  },
  {
    idAlerta: 2, tipo: 'CHUVA', titulo: 'Chuva moderada prevista',
    descricao: 'Probabilidade de chuva de 70% e 7 mm/h previstos para o fim da manha.',
    gravidade: 'MEDIA', status: 'ATIVO', dtAlerta: new Date('2026-11-11T06:00:00'),
    local: { idLocal: 2, apelido: 'Trabalho', usuarioId: 1, bairro: 'Bela Vista', cidade: 'Sao Paulo', estado: 'SP' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'CHUVA - MEDIA - ATIVO', data: new Date('2026-11-11T06:00:00') }
    ]
  },
  {
    idAlerta: 3, tipo: 'VENTO', titulo: 'Rajadas de vento',
    descricao: 'Rajadas de ate 62 km/h. Evite estacionar sob arvores, placas e fios.',
    gravidade: 'MEDIA', status: 'ATIVO', dtAlerta: new Date('2026-11-11T06:05:00'),
    local: { idLocal: 2, apelido: 'Trabalho', usuarioId: 1, bairro: 'Bela Vista', cidade: 'Sao Paulo', estado: 'SP' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'VENTO - MEDIA - ATIVO', data: new Date('2026-11-11T06:05:00') }
    ]
  },
  {
    idAlerta: 4, tipo: 'CALOR', titulo: 'Calor intenso',
    descricao: 'Temperatura maxima de 34 C prevista. Leve garrafa de agua e roupa leve.',
    gravidade: 'MEDIA', status: 'ATIVO', dtAlerta: new Date('2026-11-11T06:10:00'),
    local: { idLocal: 3, apelido: 'Casa', usuarioId: 2, bairro: 'Centro', cidade: 'Guarulhos', estado: 'SP' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'CALOR - MEDIA - ATIVO', data: new Date('2026-11-11T06:10:00') }
    ]
  },
  {
    idAlerta: 5, tipo: 'UMIDADE', titulo: 'Ar seco',
    descricao: 'Umidade relativa em 24%. Beba bastante agua e evite exercicio ao ar livre a tarde.',
    gravidade: 'BAIXA', status: 'ATIVO', dtAlerta: new Date('2026-11-11T06:10:00'),
    local: { idLocal: 3, apelido: 'Casa', usuarioId: 2, bairro: 'Centro', cidade: 'Guarulhos', estado: 'SP' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'UMIDADE - BAIXA - ATIVO', data: new Date('2026-11-11T06:10:00') }
    ]
  },
  {
    idAlerta: 6, tipo: 'UV', titulo: 'Indice UV muito alto',
    descricao: 'Indice UV maximo de 11. Use protetor solar e evite o sol das 10h as 16h.',
    gravidade: 'ALTA', status: 'ATIVO', dtAlerta: new Date('2026-11-11T06:15:00'),
    local: { idLocal: 5, apelido: 'Casa', usuarioId: 3, bairro: 'Copacabana', cidade: 'Rio de Janeiro', estado: 'RJ' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'UV - ALTA - ATIVO', data: new Date('2026-11-11T06:15:00') }
    ]
  },
  {
    idAlerta: 7, tipo: 'MUDANCA_PREVISAO', titulo: 'A previsao mudou',
    descricao: 'A maxima de amanha caiu 5 C em relacao ao que estava previsto.',
    gravidade: 'BAIXA', status: 'ATIVO', dtAlerta: new Date('2026-11-11T06:20:00'),
    local: { idLocal: 1, apelido: 'Casa', usuarioId: 1, bairro: 'Tatuape', cidade: 'Sao Paulo', estado: 'SP' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'MUDANCA_PREVISAO - BAIXA - ATIVO', data: new Date('2026-11-11T06:20:00') }
    ]
  },
  {
    idAlerta: 8, tipo: 'FRIO', titulo: 'Manha fria',
    descricao: 'Temperatura minima de 12 C prevista. Leve um casaco.',
    gravidade: 'BAIXA', status: 'ATIVO', dtAlerta: new Date('2026-11-11T06:25:00'),
    local: { idLocal: 6, apelido: 'Praia', usuarioId: 3, bairro: 'Gonzaga', cidade: 'Santos', estado: 'SP' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'FRIO - BAIXA - ATIVO', data: new Date('2026-11-11T06:25:00') }
    ]
  },
  {
    idAlerta: 9, tipo: 'CHUVA', titulo: 'Chuva moderada',
    descricao: 'Chuva de 6 mm/h prevista para a tarde de ontem.',
    gravidade: 'MEDIA', status: 'ENCERRADO', dtAlerta: new Date('2026-11-10T06:00:00'),
    local: { idLocal: 4, apelido: 'Faculdade', usuarioId: 2, bairro: 'Bela Vista', cidade: 'Sao Paulo', estado: 'SP' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'CHUVA - MEDIA - ATIVO', data: new Date('2026-11-10T06:00:00') },
      { operacao: 'UPDATE', alteracao: 'STATUS_ALERTA', valorAntigo: 'ATIVO', valorNovo: 'ENCERRADO', data: new Date('2026-11-10T18:00:00') }
    ]
  },
  {
    idAlerta: 10, tipo: 'CHUVA', titulo: 'Chuva fraca',
    descricao: 'Chuva de 2 mm/h prevista para a noite de ontem.',
    gravidade: 'BAIXA', status: 'ENCERRADO', dtAlerta: new Date('2026-11-10T06:00:00'),
    local: { idLocal: 1, apelido: 'Casa', usuarioId: 1, bairro: 'Tatuape', cidade: 'Sao Paulo', estado: 'SP' },
    historico: [
      { operacao: 'INSERT', alteracao: 'NOVO_ALERTA', valorAntigo: null, valorNovo: 'CHUVA - BAIXA - ATIVO', data: new Date('2026-11-10T06:00:00') },
      { operacao: 'UPDATE', alteracao: 'STATUS_ALERTA', valorAntigo: 'ATIVO', valorNovo: 'ENCERRADO', data: new Date('2026-11-10T22:00:00') }
    ]
  }
]);

//collection locais
use('GaroAvisa');

db.locais.insertMany([
  {
    idLocal: 1, apelido: 'Casa', principal: true, receberAlertas: true, usuarioId: 1,
    endereco: { bairro: 'Tatuape', cidade: 'Sao Paulo', estado: 'SP', latitude: -23.54, longitude: -46.576, fuso: 'America/Sao_Paulo' },
    compromissos: [
      { nome: 'Consulta medica', data: new Date('2026-11-13'), horario: '14:00' }
    ]
  },
  {
    idLocal: 2, apelido: 'Trabalho', principal: false, receberAlertas: true, usuarioId: 1,
    endereco: { bairro: 'Bela Vista', cidade: 'Sao Paulo', estado: 'SP', latitude: -23.5614, longitude: -46.6559, fuso: 'America/Sao_Paulo' },
    compromissos: [
      { nome: 'Reuniao de equipe', data: new Date('2026-11-12'), horario: '09:30' }
    ]
  },
  {
    idLocal: 3, apelido: 'Casa', principal: true, receberAlertas: true, usuarioId: 2,
    endereco: { bairro: 'Centro', cidade: 'Guarulhos', estado: 'SP', latitude: -23.4543, longitude: -46.5333, fuso: 'America/Sao_Paulo' },
    compromissos: []
  },
  {
    idLocal: 4, apelido: 'Faculdade', principal: false, receberAlertas: true, usuarioId: 2,
    endereco: { bairro: 'Bela Vista', cidade: 'Sao Paulo', estado: 'SP', latitude: -23.5614, longitude: -46.6559, fuso: 'America/Sao_Paulo' },
    compromissos: [
      { nome: 'Aula de Banco de Dados', data: new Date('2026-11-12'), horario: '19:00' },
      { nome: 'Apresentacao de Projeto', data: new Date('2026-11-24'), horario: '19:00' }
    ]
  },
  {
    idLocal: 5, apelido: 'Casa', principal: true, receberAlertas: true, usuarioId: 3,
    endereco: { bairro: 'Copacabana', cidade: 'Rio de Janeiro', estado: 'RJ', latitude: -22.9711, longitude: -43.1822, fuso: 'America/Sao_Paulo' },
    compromissos: [
      { nome: 'Churrasco em familia', data: new Date('2026-11-15'), horario: '12:00' }
    ]
  },
  {
    idLocal: 6, apelido: 'Praia', principal: false, receberAlertas: true, usuarioId: 3,
    endereco: { bairro: 'Gonzaga', cidade: 'Santos', estado: 'SP', latitude: -23.968, longitude: -46.333, fuso: 'America/Sao_Paulo' },
    compromissos: [
      { nome: 'Dia de praia', data: new Date('2026-11-14'), horario: '08:00' }
    ]
  }
]);

//testando adições
use('GaroAvisa');
db.alertas.find();

use('GaroAvisa');
db.locais.find();

use('GaroAvisa');
db.alertas.findOne({ "idAlerta": 1 }, { "historico": 0 });

//relatorios

//relatorio 1: alertas por bairro
use('GaroAvisa');

db.alertas.aggregate([
  { $group: { _id: "$local.bairro", total: { $sum: 1 } } },
  { $sort: { total: -1, _id: 1 } }
]);

//relatorio 2: alertas ativos com nivel de grwvidade ALTA ou MEDIA
use('GaroAvisa');

db.alertas.find(
  { "status": "ATIVO", "gravidade": { "$in": ["ALTA", "MEDIA"] } },
  { "_id": 0, "titulo": 1, "gravidade": 1, "local.bairro": 1 }
);

//relatorio 3: compromissos dos locais de usuario
use('GaroAvisa');

db.locais.find(
  { "usuarioId": 1 },
  { "_id": 0, "apelido": 1, "compromissos": 1 }
);