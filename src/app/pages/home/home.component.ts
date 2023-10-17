import { Component } from '@angular/core';

export interface ArticleModel {
  title: string;
  text: string;
  image: string;
  date?: string;
  description?: string;
  path?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bigArticle: ArticleModel = {
    path: 'avancos-na-inteligencia-artificial',
    title: 'Avanços na Inteligência Artificial',
    text: 'Pesquisadores revelam novos marcos na IA, prometendo revolucionar setores como saúde e transporte com algoritmos mais eficientes e autônomos.',
    date: '16/10/2023',
    image: 'https://picsum.photos/id/134/',
    description:
      'Os avanços na Inteligência Artificial estão transformando fundamentalmente a maneira como vivemos e trabalhamos. À medida que pesquisadores e cientistas continuam a inovar nesse campo, estamos testemunhando um futuro emocionante de possibilidades. A IA está sendo aplicada em setores diversos, desde a medicina, onde auxilia em diagnósticos mais precisos, até a indústria automobilística, onde guia veículos de forma autônoma.\n\nA capacidade de algoritmos mais eficientes e autônomos está permitindo que a IA desempenhe papéis mais significativos em nossa sociedade. Além de tarefas específicas, como reconhecimento de voz e imagem, ela está entrando na esfera da criatividade, com criação de música, arte e escrita. Essa revolução está abrindo portas para novas experiências e eficiências em nosso cotidiano.\n\nNo setor de saúde, a IA está revolucionando o diagnóstico médico. Com a capacidade de processar grandes volumes de dados, ela ajuda os médicos a identificar condições médicas com maior precisão e rapidez. Na área de transporte, a IA está impulsionando veículos autônomos, prometendo tornar nossas estradas mais seguras e eficientes.\n\nA revolução da IA também está impactando a forma como as empresas operam, melhorando a eficiência de processos e auxiliando na tomada de decisões estratégicas. A personalização de experiências do cliente é aprimorada, tornando o atendimento ao cliente mais eficaz. A segurança cibernética é fortalecida com algoritmos de detecção de ameaças mais avançados.\n\nEste é apenas o começo de uma jornada emocionante na IA. Conforme mais pesquisas são realizadas e mais inovações são desenvolvidas, podemos esperar que a Inteligência Artificial continue a impactar positivamente nosso mundo de maneiras que mal podemos imaginar."',
  };

  articles: ArticleModel[] = [
    {
      path: '5g-transforma-a-conectividade-movel',
      title: '5G Transforma a Conectividade Móvel',
      text: 'A implantação global do 5G está impulsionando velocidades de internet mais rápidas e permitindo avanços em realidade virtual, IoT e telemedicina.',
      date: '16/10/2023',
      image: 'https://picsum.photos/id/136/',
      description:
        'A chegada do 5G está sacudindo o mundo da conectividade móvel, trazendo consigo uma onda de inovação e novas possibilidades. Com velocidades de internet mais rápidas do que nunca, o 5G está permitindo avanços significativos em uma variedade de setores, desde entretenimento até cuidados de saúde.\n\nA capacidade do 5G de transmitir dados em altas velocidades e com latência mínima está transformando a experiência do usuário. Na indústria do entretenimento, ele está impulsionando a realidade virtual (RV) e a realidade aumentada (RA), proporcionando experiências imersivas sem precedentes. Jogos, transmissões ao vivo e experiências interativas se beneficiam diretamente dessa tecnologia de ponta.\n\nA Internet das Coisas (IoT) também está colhendo os frutos do 5G. Dispositivos IoT agora podem se comunicar de forma mais eficaz e rápida, abrindo caminho para a automação residencial e industrial avançada. Sensores, câmeras e dispositivos inteligentes podem ser integrados perfeitamente, proporcionando eficiência e conveniência inigualáveis.\n\nNa área da saúde, o 5G está viabilizando a telemedicina de alta qualidade. Consultas médicas remotas, monitoramento de pacientes e até mesmo cirurgias assistidas por robôs se beneficiam da conectividade de alta velocidade e baixa latência, permitindo cuidados de saúde mais acessíveis e eficazes.\n\nA implantação global do 5G continua a se expandir, conectando comunidades e revolucionando a forma como interagimos com o mundo digital. À medida que essa tecnologia continua a evoluir, podemos esperar uma gama ainda mais ampla de aplicações e inovações que melhorarão nossas vidas de maneiras emocionantes."',
    },
    {
      path: 'inovacoes-em-energia-sustentavel',
      title: 'Inovações em Energia Sustentável',
      text: 'Novas tecnologias de energia renovável e armazenamento estão mudando a forma como o mundo produz e consome energia, promovendo um futuro mais sustentável.',
      date: '16/10/2023',
      image: 'https://picsum.photos/id/167/',
      description:
        'À medida que enfrentamos os desafios das mudanças climáticas e a busca por uma sociedade mais sustentável, as inovações em energia renovável estão desempenhando um papel fundamental na transformação de nosso sistema de energia. Novas tecnologias estão permitindo uma transição para fontes de energia mais limpas e eficientes, promovendo um futuro mais sustentável para todos nós.\n\nA energia solar e eólica estão no centro desse movimento. Painéis solares cada vez mais eficientes e turbinas eólicas de última geração estão capturando energia limpa a um custo cada vez mais baixo. Isso está revolucionando a produção de eletricidade, tornando a energia solar e eólica opções competitivas e atraentes para consumidores e empresas.\n\nO armazenamento de energia também é uma parte essencial desse quebra-cabeça. Baterias de última geração, como as de íon-lítio e de estado sólido, estão melhorando a capacidade de armazenar energia intermitente. Isso significa que podemos usar energia renovável, mesmo quando o sol não está brilhando ou o vento não está soprando.\n\nAlém disso, a inovação em redes inteligentes está permitindo o gerenciamento eficaz da energia, equilibrando a oferta e a demanda de forma mais eficiente. Isso torna a transição para fontes de energia sustentável mais prática e confiável.\n\nEssas inovações em energia sustentável não apenas combatem as mudanças climáticas, mas também criam empregos,"',
    },
    {
      path: 'crescimento-exponencial-da-blockchain',
      title: 'Crescimento Exponencial da Blockchain',
      text: 'A tecnologia blockchain está ganhando terreno em diversos setores, desde finanças até cadeias de suprimentos, com potencial para transformar a confiança e a segurança.',
      date: '16/10/2023',
      image: 'https://picsum.photos/id/180/',
      description:
        'A tecnologia blockchain está experimentando um crescimento exponencial, mudando a forma como lidamos com a confiança, segurança e transparência em uma variedade de setores. Desde seu surgimento com as criptomoedas, a blockchain evoluiu para muito mais do que apenas transações financeiras.\n\nNo mundo das finanças, a blockchain está revolucionando a maneira como as transações ocorrem. Ela oferece segurança aprimorada e velocidade, além de reduzir a necessidade de intermediários. Isso promete tornar os serviços financeiros mais acessíveis e eficientes.\n\nAlém disso, a tecnologia blockchain está sendo usada em cadeias de suprimentos para rastrear a origem e o movimento de produtos. Isso aumenta a transparência e a autenticidade dos produtos, ajudando a combater a falsificação e garantindo a qualidade.\n\nA descentralização e a criptografia subjacentes à blockchain tornam os dados menos suscetíveis a ataques e falsificações. Isso tem implicações significativas para a segurança cibernética e a proteção de informações confidenciais.\n\nÀ medida que a blockchain continua a crescer e evoluir, podemos esperar mais casos de uso inovadores em uma variedade de setores, impactando positivamente a forma como fazemos negócios e protegemos dados sensíveis."   ',
    },
    {
      path: 'robotica-avancada-revoluciona-a-industria',
      title: 'Robótica Avançada Revoluciona a Indústria',
      text: 'Robôs mais inteligentes e versáteis estão otimizando a produção e a logística, redefinindo o papel dos trabalhadores e impulsionando a automação industrial.',
      date: '16/10/2023',
      image: 'https://picsum.photos/id/198/',
      description:
        'A revolução da robótica avançada está transformando a indústria e a forma como a produção é realizada. Robôs estão se tornando mais inteligentes, versáteis e colaborativos, permitindo uma maior eficiência nos processos de fabricação e logística. Eles estão redefinindo o papel dos trabalhadores e impulsionando a automação industrial.\n\nRobôs colaborativos, conhecidos como cobots, trabalham lado a lado com humanos, realizando tarefas repetitivas e perigosas, liberando os trabalhadores para tarefas mais criativas e de alto valor. Além disso, a robótica avançada está sendo usada em campos como a medicina, onde cirurgiões realizam procedimentos assistidos por robôs com precisão incomparável.\n\nA inteligência artificial desempenha um papel fundamental, permitindo que os robôs tomem decisões em tempo real com base em dados e sensores. Isso é particularmente valioso em aplicações de logística, onde os robôs podem otimizar rotas e processos de armazenamento.\n\nÀ medida que a robótica avançada continua a evoluir, podemos esperar que ela desempenhe um papel cada vez maior em diversas indústrias, impulsionando a produtividade, a segurança e a eficiência."',
    },
  ];
}
