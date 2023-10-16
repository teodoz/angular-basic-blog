import { Component } from '@angular/core';

export interface ArticleModel {
  date: string;
  title: string;
  text: string;
  image: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bigArticle: ArticleModel = {
    title: 'Avanços na Inteligência Artificial',
    text: 'Pesquisadores revelam novos marcos na IA, prometendo revolucionar setores como saúde e transporte com algoritmos mais eficientes e autônomos.',
    date: '16/10/2023',
    image: 'https://picsum.photos/id/134/400',
  };

  articles: ArticleModel[] = [
    {
      title: '5G Transforma a Conectividade Móvel',
      text: 'A implantação global do 5G está impulsionando velocidades de internet mais rápidas e permitindo avanços em realidade virtual, IoT e telemedicina.',
      date: '16/10/2023',
      image: 'https://picsum.photos/id/136/200',
    },
    {
      title: 'Inovações em Energia Sustentável',
      text: 'Novas tecnologias de energia renovável e armazenamento estão mudando a forma como o mundo produz e consome energia, promovendo um futuro mais sustentável.',
      date: '16/10/2023',
      image: 'https://picsum.photos/id/167/200',
    },
    {
      title: 'Crescimento Exponencial da Blockchain',
      text: 'A tecnologia blockchain está ganhando terreno em diversos setores, desde finanças até cadeias de suprimentos, com potencial para transformar a confiança e a segurança.',
      date: '16/10/2023',
      image: 'https://picsum.photos/id/180/200',
    },
    {
      title: 'Robótica Avançada Revoluciona a Indústria',
      text: 'Robôs mais inteligentes e versáteis estão otimizando a produção e a logística, redefinindo o papel dos trabalhadores e impulsionando a automação industrial.',
      date: '16/10/2023',
      image: 'https://picsum.photos/id/198/200',
    },
  ];
}
