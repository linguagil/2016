/* globals console */

(function($) {
  'use strict';

  var schedules = [
    /* 0 - Luciano Borges - */
    {
      speaker: 'Luciano Borges',
      title: 'Lego4Scrum',
      description: 'Esse mini-curso visa fazer uma introdução ao Scrum de forma prática e lúdica usando peças de Lego.',
      aboutSpeaker: 'Peregrino;<br />\
Praticante de Krav Magá;<br />\
Entusiasta da linguagem de programação Ruby e do framework Rails;<br />\
Participante do Grupo LinguÁgil (www.linguagil.com.br) - grupo que dissemina a cultura ágil e a filosofia da progração poliglota em Salvador-BA;<br />\
Participante do Grupo de Usuários Ruby da Bahia (GURU-BA);<br />\
Divulgador da ferramenta RAD de desenvolvimento Java - WebIntegrator na comunidade do portal software público;<br />\
Mestrando com projeto na área de SIGWEB;<br />\
Professor universitário;<br />\
Analista de Sistema do SERPRO;',
      image: ['images/talks/luciano-borges.jpg']
    },
    /* 1 - Achilles Fróes - */
    {
      speaker: 'Achilles Fróes',
      title: 'Oficina de ASP.NET MVC',
      description: 'Apresentar os conceitos essenciais de desenvolvimento de aplicações web com ASP.NET MVC.',
      aboutSpeaker: 'Apaixonado por desenvolvimento de software, desenvolve software para web desde 2003. \
      Foi professor da pós graduação em Engenharia de Software com .Net no Instituto Infnet (RJ), \
      já palestrou sobre .NET na UNIFACS, Faculdade Maurício de Nassau, Faculdade Dom Pedro II e \
      Fundação Visconde de Cairú e nos eventos LinguÁgil 2015, Microsoft DevBrasil Open Day e Microsoft \
      Students 2 Business, além de atuar como líder técnico e arquiteto de software e ser certificado Microsoft. \
      Tem como objetivo tornar o seu caminho rumo ao desenvolvimento profissional de software para web mais fácil e agradável. :D',
      image: ['images/talks/achilles-froes.jpeg']
    },

    /* 2 - Marcio Albuquerque - */
    {
      speaker: 'Marcio Albuquerque',
      title: 'Novidades do PHP 7',
      description: 'Novidades do PHP 7',
      aboutSpeaker: 'Trabalha como DevOps no SERPRO com sistemas de \
   infra-estrutura interna da empresa. Curioso da TI, gosta de mexer um pouco \
   com tudo! Tem como preferência e especialidade trabalhos com web: HTML5, \
   CSS3, JS, PHP, etc. Atualmente estuda muito sobre o mundo mobile e \
   PhoneGap/Cordova',
      image: ['images/talks/marcio-albuquerque.jpg']
    },

    /* 3 - Rafael Helm - */
    {
      speaker: 'Rafael Helm',
      title: 'Olá Mundo Ágil - A sua Porta de Entrada no Mundo Ágil!',
      description: 'O objetivo deste treinamento é ajudar empresas iniciando no mundo Ágil \
      a ganharem mais cultura a respeito de metodologias ágeis como Lean, Kanban e Scrum. \
      Ao final do treinamento os participantes terão mais visibilidade sobre o que vão \
      enfrentar durante a transição para o uso de metodologias ágeis.',
      aboutSpeaker: '',
      image: ['images/talks/rafael-helm.jpeg']
    },

    /* 4 - Maurício Vieira - */
    {
      speaker: 'Maurício Vieira',
      title: 'Construindo e documentando uma API REST usando Python e Django',
      description: 'Neste curso faremos uma API REST utilizando Django REST Framework e práticas da eXtreme Programming (test-driven development, pair programming, refactoring, e simple design).',
      aboutSpeaker: 'Engenheiro de Software full stack, trabalhou em empresas como o SERPRO, Thoughtworks e Dafiti, atualmente trabalha na Voxy,\
       uma plataforma global de ensino de idiomas, e presta consultoria pela Omnicode Solutions. <br />\
        Mauricio é um soteropolitano que migrou para São Paulo, mas continua atuando nas comunidades de Salvador ao \
        participar da organização do LinguÁgil desde 2010, e do Rails Girls Salvador desde 2013. \
        Ele gosta de linguagens de programação dinâmicas, possui experiência em diversas linguagens como Python, PHP, Ruby, Perl, e Lua.',
      image: ['images/talks/mauricio-vieira.jpg']
    },

    /* 5 - Morvana Bonin e Guilherme Motta - */
    {
      speaker: 'Morvana Bonin e Guilherme Motta',
      title: 'Práticas Jedi eXtreme Programming',
      description: 'Neste minicurso, colocaremos na prática algumas técnicas de eXtreme Programming. Será mão na massa, terá programação, apresentação de slides e dinamicas para exercitar alguns dos valores e praticas de XP. Durante o curso, os participantes serão dividos em duplas, grupos, e com um grande grupo.',
      aboutSpeaker: 'Morvana Bonin - Estudante de Análise e Desenvolvimeto de Sistemas no Senac, Analista de Desenvolvimento na empresa Kinghost, entusiasta e estudante de metodologias ágeis onde poẽm em prática na vida pessoal e no trabalho.<br />\
<a href="https://br.linkedin.com/in/morvana-bonin-0271b215" target="_blank">linkedin</a>\
<br /><br />\
Guilherme Motta - <a href="https://www.linkedin.com/in/gfcmotta" target="_blank">linkedin</a>',
      image: ['images/talks/morvana-bonin.jpg', 'images/talks/guilherme-motta.jpg']
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
