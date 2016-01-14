/* globals console */

(function($) {
  'use strict';

  var schedules = [
    /* 0 - Luciano Borges - */
    {
      speaker: 'Luciano Borges',
      title: 'Lego4Scrum',
      description: 'Esse mini-curso visa fazer uma introdução ao Scrum de forma prática e lúdica usando peças de Lego.',
      aboutSpeaker: 'Peregrino;<br />Praticante de Krav Magá;<br />Entusiasta da linguagem de programação Ruby e do framework Rails;<br />Participante do Grupo LinguÁgil (www.linguagil.com.br) - grupo que dissemina a cultura ágil e a filosofia da progração poliglota em Salvador-BA;<br />Participante do Grupo de Usuários Ruby da Bahia (GURU-BA);<br />Divulgador da ferramenta RAD de desenvolvimento Java - WebIntegrator na comunidade do portal software público;<br />Mestrando com projeto na área de SIGWEB;<br />Professor universitário;<br />Analista de Sistema do SERPRO;',
      image: ['images/talks/luciano-borges.jpg']
    },
    /* 1 - Achilles Fróes - */
    {
      speaker: 'Achilles Fróes',
      title: 'Oficina de ASP.NET MVC',
      description: 'Apresentar os conceitos essenciais de desenvolvimento de aplicações web com ASP.NET MVC.',
      aboutSpeaker: 'Apaixonado por desenvolvimento de software, desenvolve software para web desde 2003. Foi professor da pós graduação em Engenharia de Software com .Net no Instituto Infnet (RJ), já palestrou sobre .NET na UNIFACS, Faculdade Maurício de Nassau, Faculdade Dom Pedro II e Fundação Visconde de Cairú e nos eventos LinguÁgil 2015, Microsoft DevBrasil Open Day e Microsoft Students 2 Business, além de atuar como líder técnico e arquiteto de software e ser certificado Microsoft. Tem como objetivo tornar o seu caminho rumo ao desenvolvimento profissional de software para web mais fácil e agradável. :D',
      image: ['images/talks/achilles-froes.jpeg']
    },

    /* 2 - Marcio Albuquerque - */
    {
      speaker: 'Marcio Albuquerque',
      title: 'Novidades do PHP 7',
      description: 'Novidades do PHP 7',
      aboutSpeaker: 'Trabalha como DevOps no SERPRO com sistemas de infra-estrutura interna da empresa. Curioso da TI, gosta de mexer um pouco com tudo! Tem como preferência e especialidade trabalhos com web: HTML5, CSS3, JS, PHP, etc. Atualmente estuda muito sobre o mundo mobile e PhoneGap/Cordova',
      image: ['images/talks/marcio-albuquerque.jpg']
    },

    /* 3 - Rafael Helm - */
    {
      speaker: 'Rafael Helm',
      title: 'Olá Mundo Ágil - A sua Porta de Entrada no Mundo Ágil!',
      description: 'O objetivo deste treinamento é ajudar empresas iniciando no mundo Ágil a ganharem mais cultura a respeito de metodologias ágeis como Lean, Kanban e Scrum. Ao final do treinamento os participantes terão mais visibilidade sobre o que vão enfrentar durante a transição para o uso de metodologias ágeis.',
      aboutSpeaker: '',
      image: ['images/talks/rafael-helm.jpeg']
    },

    /* 4 - Maurício Vieira - */
    {
      speaker: 'Maurício Vieira',
      title: 'Construindo e documentando uma API REST usando Python e Django',
      description: 'Neste curso faremos uma API REST utilizando Django REST Framework e práticas da eXtreme Programming (test-driven development, pair programming, refactoring, e simple design).',
      aboutSpeaker: 'Engenheiro de Software full stack, trabalhou em empresas como o SERPRO, Thoughtworks e Dafiti, atualmente trabalha na Voxy, uma plataforma global de ensino de idiomas, e presta consultoria pela Omnicode Solutions. <br /> Maurício é um soteropolitano que migrou para São Paulo, mas continua atuando nas comunidades de Salvador ao participar da organização do LinguÁgil desde 2010, e do Rails Girls Salvador desde 2013. Ele gosta de linguagens de programação dinâmicas, possui experiência em diversas linguagens como Python, PHP, Ruby, Perl, e Lua.',
      image: ['images/talks/mauricio-vieira.jpg']
    },

    /* 5 - Morvana Bonin e Guilherme Motta - */
    {
      speaker: 'Morvana Bonin e Guilherme Motta',
      title: 'Práticas Jedi eXtreme Programming',
      description: 'Neste minicurso, colocaremos na prática algumas técnicas de eXtreme Programming. Será mão na massa, terá programação, apresentação de slides e dinamicas para exercitar alguns dos valores e praticas de XP. Durante o curso, os participantes serão dividos em duplas, grupos, e com um grande grupo.',
      aboutSpeaker: 'Morvana Bonin - Estudante de Análise e Desenvolvimeto de Sistemas no Senac, Analista de Desenvolvimento na empresa Kinghost, entusiasta e estudante de metodologias ágeis onde poẽm em prática na vida pessoal e no trabalho - <a href="https://br.linkedin.com/in/morvana-bonin-0271b215" target="_blank">linkedin</a>.<br /><br />Guilherme Motta - <a href="https://www.linkedin.com/in/gfcmotta" target="_blank">linkedin</a>',
      image: ['images/talks/morvana-bonin.jpg', 'images/talks/guilherme-motta.jpg']
    },
    /* 6 - Mila Orrico - */
    {
      speaker: 'Mila Orrico',
      title: 'O trabalho de FDP do PO: fatiar, descartar e priorizar!',
      description: 'É um desafio instigante manter o mindset alinhado ao que os stakeholders precisam e assegurar que os desenvolvedores entenderam a expectativa do cliente a cada Sprint, o que é prioridade, e o que é desnecessário. Em um time Scrum, PO (Product Owner) é a pessoa que define o produto de software. Fatiar, descartar e priorizar são suas principais tarefas, é sobre como elas podem ser realizadas que iremos conversar.',
      aboutSpeaker: '',
      image: ['images/talks/a-confirmar.jpg']
    },
    /* 7 ? - */
    {
      speaker: '?',
      title: '?',
      description: '?',
      aboutSpeaker: '',
      image: ['images/talks/a-confirmar.jpg']
    },
    /* 8 - Lorena Caldas - */
    {
      speaker: 'Lorena Caldas',
      title: 'SBTM - Testes exploratórios guiados à sessão',
      description: 'Aprenda como deixar seus testes funcionais enxutos e independentes dos atrasos do projeto de software',
      aboutSpeaker: 'Meu nome é Lorena Caldas, trabalho com testes vai fazer 5 anos, tempo que pesquiso e proponho avanços para a área. Sou formada e pós-graduada em TI.  Possuo alguns trabalhos publicados na área de ES e já ministrei palestras neste campo. “Isto fica feliz em ser útil! (filme O Homem Bicentenário)”',
      image: ['images/talks/lorena_caldas.png']
    },
    /* 9 - Lorena Caldas - */
    {
      speaker: 'Isaque Dias',
      title: 'Construindo aplicativos móveis com Ionic Framework',
      description: 'Aprenda como deixar seus testes funcionais enxutos e independentes dos atrasos do projeto de software',
      aboutSpeaker: 'O Ionic Framework provou que é possível desenvolver aplicativos multiplataforma utilizando as tecnologias que já conhecemos; HTML, CSS e Javascript. Nessa apresentação, mostraremos o potencial desse incrível framework, entre outras ferramentas que tem permitido a criação de apps extraordinários.',
      image: ['images/talks/isaque_dias.jpg']
    },
    /* 10 - Carlos Felippe Cardoso - */
    {
      speaker: 'Carlos Felippe Cardoso',
      title: 'DevOps é uma prática, cultura ou um cargo?',
      description: 'Um problema é recorrente em diversas empresas: A TI é a maior barreira para o o negócio poder colocar algo em produção. Para endereçar este problema, vamos discutir nesta palestra os formatos de solução que as empresas tem dado no que tange ao termo DevOps, mostrando a importância da cultura DevOps.',
      aboutSpeaker: 'Carlos Felippe Cardoso é um Agile Coach e trainer com bastante experiência prática, trabalhando com métodos ágeis desde 2004. Sua experiência inclui treinamentos e vivência em Scrum/Kanban, Continuous Delivery, desenvolvimento ágil, testes automatizados e práticas XP.  Já ministrou também diversos cursos e possui vasta experiência em linguagens de programação como Java, Python e C#. Já palestrou nos maiores eventos de agilidade brasileiros é instrutor do treinamento de CSD (Certified Scrum Developer). Além disso, é graduado e mestrando pela UFRJ, onde também atua como professor colaborador.',
      image: ['images/talks/carlos_felipe.jpg']
    },
    /* 11 - Osvaldo Matos Júnior (Tupy) - */
    {
      speaker: 'Osvaldo Matos Júnior (Tupy)',
      title: 'Programação Reactiva',
      description: 'React é uma biblioteca JavaScript lançada pelo Facebook e Instagram para construir aplicações que os dados mudam com o tempo. Com o React é possível criar componentes reutilizáveis para suas aplicações web, até mesmo extender para aplicações mobile usando React-native.',
      aboutSpeaker: 'Osvaldo é egenheiro e sócio do Jusbrasil, doutorando em Ciência da Computação (UFBA), mestre em Ciências da Computação (UFMG) e graduado em Engenharia de Computação (UEFS). Atualmente é líder técnico no desenvolvimento frontend do site onde atua com métodos ágeis.',
      image: ['images/talks/a-confirmar.jpg']
    },
    /* 12 ? - */
    {
      speaker: '?',
      title: '?',
      description: '?',
      aboutSpeaker: '',
      image: ['images/talks/a-confirmar.jpg']
    },
    /* 13 - Osvaldo Matos Júnior (Tupy) - */
    {
      speaker: 'Paula Antunes',
      title: 'Como empreender tendo um emprego?',
      description: 'Temos desejo de mostrar as nossas ideias e construir coisas novas mas, como é possível desenvolver a minha startup ou explorar as minhas ideias se tenho que trabalhar, preciso cumprir as minhas metas e entregar as minhas atividades para o meu gerente? Parece um grande desafio mas, é simples! ',
      aboutSpeaker: 'Gerente de Projetos da iBLISS e Fundadora da SMINDER. Pós graduada em Segurança da Informação. E incentivadora das mulheres na tecnologia. ',
      image: ['images/talks/a-confirmar.jpg']
    },
    /* 14 ? - */
    {
      speaker: '?',
      title: '?',
      description: '?',
      aboutSpeaker: '',
      image: ['images/talks/a-confirmar.jpg']
    },
    /* 15 - Rafael Helm - */
    {
      speaker: 'Rafael Helm',
      title: 'Histórias de Usuário - Por que e como escrever requisitos de forma ágil?',
      description: 'Você já percebeu que o desenvolvimento de software começa muito antes da escrita das primeiras linhas de código, e que uma documentação ruim vai gerar um software ruim? O objetivo da palestra é demonstrar uma forma mais leve, mas ao mesmo poderosa, de especificar requisitos de software.',
      aboutSpeaker: 'Experiência de Agile Coach em projetos de larga escala e instrutor de métodos ágeis na Wildtech, tendo a oportunidade de treinar empresas e equipes de diferentes localidades do Brasil, incluindo organizações de larga escala como Procergs, Serpro, Totvs, Banco do Brasil, entre outras empresas. Autor do ebook Histórias de Usuário – Por que e como escrever requisitos de forma ágil?, que atingiu a marca de 4.000 downloads em menos de um ano. Autor do livro "eXtreme Programming - Práticas para o dia a dia no desenvolvimento ágil de software".',
      image: ['images/talks/rafael-helm.jpeg']
    },
  ];

  function loadModalContent( key ) {
    var info = schedules[key];

    var $modal = $('#myModal');

    $modal.find('.speaker-images').html('');
    $(info.image).each(function(item, source){
      console.log(item);
      $modal.find('.speaker-images').append(
        $('<img/>')
        .addClass('img-circle img-responsive img-speaker center-block img-modal')
        .attr('width', 206)
        .attr('height', 206)
        .attr('src', source)
      );
    });

    if (info.image.length > 1) {
      $modal.find('.speaker-images img').addClass('pull-left')
        .attr('width', 150)
        .attr('height', 150);
    }

    $modal.find('.speaker-name').text(info.speaker);
    $modal.find('.speaker-title').text(info.title);
    $modal.find('.speaker-desc').html(info.description);
    $modal.find('.speaker-about').html(info.aboutSpeaker);

    $modal.modal({ keyboard: false }).show();
  }

  if( $('.open-modal')[0] ) {
    $('.open-modal').on('click', function(){
      loadModalContent( $(this).data('schedule-key'));
    });
  }

  $(window).load(function(){
    var tab = window.location.hash;
    if (tab !== '') {
      $('.nav-tabs').find('a[href="' + tab + '"]').trigger('click');
    }
  });

})(jQuery);
