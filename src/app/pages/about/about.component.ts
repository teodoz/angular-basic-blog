import { Component } from '@angular/core';
import { PageContainerModel } from '../shared/container/container.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  content: PageContainerModel = {
    title: 'Sobre',
    description:
      'Nosso site de notícias é sua fonte confiável e abrangente para informações de todo o mundo.<br /><br />Com um compromisso inabalável com o jornalismo de qualidade, estamos aqui para mantê-lo atualizado sobre os eventos que moldam nosso planeta.<br /><br />    Oferecemos cobertura em tempo real de notícias de última hora, análises aprofundadas, reportagens investigativas e uma variedade de tópicos, incluindo política, economia, tecnologia, saúde, ciência, cultura e esportes.<br /><br />   Nossa equipe de jornalistas experientes e correspondentes internacionais trabalha incansavelmente para lhe proporcionar uma visão imparcial e equilibrada dos acontecimentos.<br /><br />Estamos comprometidos em relatar os fatos com precisão e objetividade, garantindo que você tenha as informações de que precisa para tomar decisões informadas.Além das notícias, oferecemos artigos de opinião de especialistas em diversos campos, dando-lhe uma visão aprofundada das questões críticas do momento.<br /><br />Nosso objetivo é promover o debate saudável e informado, permitindo que nossos leitores formem suas próprias opiniões.<br /><br />    Navegar pelo nosso site é fácil e intuitivo, com uma organização cuidadosa das seções e uma pesquisa poderosa para encontrar histórias específicas.Também oferecemos notificações personalizadas para que você nunca perca uma notícia importante.<br /><br />Acreditamos na importância da transparência e na proteção de seus dados pessoais.<br /><br />Comprometemo-nos a respeitar sua privacidade e a não compartilhar suas informações sem o seu consentimento.   Esteja você interessado em notícias locais ou globais, desenvolvimentos científicos ou eventos culturais, nosso site de notícias é o seu destino único para se manter informado e envolvido com o mundo ao seu redor.<br /><br />Agradecemos a confiança que você deposita em nós como sua fonte de notícias e estamos dedicados a continuar oferecendo jornalismo de alta qualidade a cada dia.',
    image: 'https://picsum.photos/seed/picsum/1900',
  };
}
