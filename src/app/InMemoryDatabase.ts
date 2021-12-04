import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
  createDb = async () => {

    const charts: any[] = [
      {
        title: 'Consumo geral',
        dateInit: '20/03/2019',
        dateFinesh: '20/04/2019',
        typeInfo: 'chart',
        typeChart: 'linear',
        valores: [
          { data: [73, 34, 100, 58, 36, 25, 99] },
          { data: [77, 55, 80, 28, 36, 45, 60] }
        ],
        datas: ['02/03/2019', '03/03/2019', '04/03/2019', '05/03/2019', '06/03/2019', '06/03/2019', '07/03/2019'],
        cores: [
          {
            label: 'Consumo de 02/03/2019 a 07/03/2019',
            // backgroundColor: 'rgba(214, 135, 65, 0.24)',
            backgroundColor: 'rgb(1, 41, 26)',
            borderColor: 'rgba(214, 135, 65, 1)',
            pointBackgroundColor: 'rgba(250, 250, 250, 1)',
            pointBorderColor: 'rgba(214, 135, 65, 1)',
            pointHoverBackgroundColor: 'rgba(250, 250, 250, 1)',
            pointHoverBorderColor: 'rgba(214, 135, 65, 1)'
          },
          {
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          }
        ]
      },
      
      // {
      //   title: 'Consumo por motorista',
      //   dateInit: '20/03/2019',
      //   dateFinesh: '20/04/2019',
      //   typeInfo: 'chart',
      //   typeChart: 'pie',
      //   valores: [73, 34, 100, 58, 36, 25, 99],
      //   datas: ['02/03/2019', '03/03/2019', '04/03/2019', '05/03/2019', '06/03/2019', '06/03/2019', '02/03/2019'],
      //   cores: [{
      //     backgroundColor:
      //       [
      //         'rgba(214, 135, 65, 0.24)',
      //         'rgba(148,159,255,0.2)',
      //         'rgba(148,115,177,0.2)',
      //         'rgba(148,159,115,0.2)',
      //         'rgba(55,66,77,0.2)',
      //         'rgba(100,100,100,0.2)',
      //         'red'
      //       ]
      //   }
      //   ]
      // },
      // {
      //   title: 'Viajem por veículo',
      //   dateInit: '20/03/2019',
      //   dateFinesh: '20/04/2019',
      //   typeInfo: 'chart',
      //   typeChart: 'bar',
      //   labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
      //   datasets: [
      //     {
      //       data: [65, 59, 80, 81, 56, 55, 40],
      //       borderColor: '#ffffff'
      //     },
      //     {
      //       data: [45, 59, 95, 89, 76, 65, 0],
      //       borderColor: '#ffffff'
      //     }
      //   ],
      //   gradientColors: [
      //     { startColor: '#d68741', stopColor: '#ffffff' },
      //     { startColor: '#d68741', stopColor: '#ffffff' }
      //   ]
      // }
    ];

    const informations = [
      {
        typeInfo: 'infobox',
        title: 'Consumo de hoje',
        value: 546546,
        default: true
      },
      {
        typeInfo: 'infobox',
        title: 'Consumo total',
        value: 5555555,
        default: true
      },
      {
        typeInfo: 'infobox',
        title: 'Consumo médio',
        value: 3333333,
        default: true
      },
      {
        typeInfo: 'infobox',
        title: 'Consumo semanal',
        value: 444444,
        default: true
      },
      {
        typeInfo: 'infobox',
        title: 'Consumo diário',
        value: 186594,
        default: true
      }
    ];
    const companiesList = [
      {
        head: ['Nome', 'RFID', 'Nº Veículos', 'Consumo Interno Total', 'Consumo Externo Total', 'Vol. Carregado(I)', 'Vol. Restante']
      },
      {
        id: 1,
        nome: 'Teste',
        rfid: 0,
        nr_veiculos: 47,
        consumo_total: 12,
        consumo_interno_total: 546555,
        consumo_externo_total: 350,
        vol_restant: -854,
      },
      {
        id: 2,
        nome: 'Outros',
        rfid: null,
        nr_veiculos: 45,
        consumo_total: 37,
        consumo_interno_total: 0,
        consumo_externo_total: 0,
        vol_restant: 0,
      },
      {
        id: 3,
        nome: 'Ac Locadora e Transportes',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 4,
        nome: 'Teste 4',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 5,
        nome: 'Teste 5',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 6,
        nome: 'Teste 6',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 7,
        nome: 'Teste 7',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 8,
        nome: 'Teste 8',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 9,
        nome: 'Teste 9',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 10,
        nome: 'Teste 10',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 11,
        nome: 'Teste 11',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 12,
        nome: 'Teste 12',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 13,
        nome: 'Teste 13',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 14,
        nome: 'Teste 14',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 15,
        nome: 'Teste 15',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 16,
        nome: 'Teste 16',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 17,
        nome: 'Teste 17',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 18,
        nome: 'Teste 18',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 19,
        nome: 'Teste 19',
        rfid: 0,
        nr_veiculos: 47,
        consumo_total: 12,
        consumo_interno_total: 546555,
        consumo_externo_total: 350,
        vol_restant: -854,
      },
      {
        id: 20,
        nome: 'Teste 20',
        rfid: null,
        nr_veiculos: 45,
        consumo_total: 37,
        consumo_interno_total: 0,
        consumo_externo_total: 0,
        vol_restant: 0,
      },
      {
        id: 21,
        nome: 'Teste 21',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 22,
        nome: 'Teste 22',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 23,
        nome: 'Teste 23',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 24,
        nome: 'Teste 24',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 25,
        nome: 'Teste 25',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 26,
        nome: 'Teste 26',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 27,
        nome: 'Teste 27',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 28,
        nome: 'Teste 28',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 29,
        nome: 'Teste 29',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 30,
        nome: 'Teste 30',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 31,
        nome: 'Teste 31',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 32,
        nome: 'Teste 32',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 33,
        nome: 'Teste 33',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 34,
        nome: 'Teste 34',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 17,
        nome: 'Teste 35',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
      {
        id: 35,
        nome: 'Teste 35',
        rfid: '455544',
        nr_veiculos: 41,
        consumo_total: 3702047,
        consumo_interno_total: 3500000,
        consumo_externo_total: 0,
        vol_restant: -202047,
      },
    ];

    const tanks =   [
      {
        head: [
          'id',
          'Tanque',
          'Capacidade Total(l)',
          'Consumo Total',
          'Volume carregado',
          'Vol. total transferido',
          'Prox. Carregamento',
          'Tipo sonda',
          'Sonda última atualização',
          'Estoque atual'
        ]
      },
      {
      id: 1,
      tanque: 1,
      produto: 'S10',
      capacidade: 15.0000,
      consumo: 9534352,
      volume: '0,00',
      volumeTransferido: '0,00',
      proximoCarregamento: '11/07/2019',
      tipoSonda: 'Não Informado',
      sondaUltimaAtualizacao: 'Sem atualização',
      estoqueAtual: '-522.665,34'
      },
      {
        id: 2,
        tanque: 2,
        produto: 'S500',
        capacidade: 15.0000,
        consumo: 9534352,
        volume: 0,
        volumeTransferido: 0,
        proximoCarregamento: '11/07/2019',
        tipoSonda: 'Não Informado',
        sondaUltimaAtualizacao: 'Sem atualização',
        estoqueAtual: '-323.896,16 '
      }
    ];

    return {
      charts,
      informations,
      companiesList,
      tanks
    };
  }
}
