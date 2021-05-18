const englishContent = {
  introText: 'Welcome! I am Mimi.',
  aboutMeCTA: 'Learn more about me',
  aboutMeTitle: 'About me',
  location: 'I currently live in <strong>Culemborg</strong>, the Netherlands',
  organizing: '<strong>Bringing people together</strong> makes me really happy, whether it is to do some volunteering, to learn or to make some music together!</strong>',
  music: 'Once upon a time a studied to become a composer and I <strong>conducted some choirs</strong>!',
  code: 'I have been working as a full stack developer since 2017! I have most experience with <strong>Typescript</strong>, <strong>React</strong> and <strong>Graphql</strong>.',
  education: 'I am passionate about education! I have been <strong>teaching</strong> code to aspiring programmers and I am currently employed by a company that provides <strong>educational resources</strong>.',
  timelineCTA: 'Find out more ',
  timelineTitle: 'Timeline',
  worksCouncil: 'Member of works council (OR) Infinitas Learning <strong>(2021-...)</strong>',
  infinitas: 'Software Engineer Noordhoff / Infinitas Learning <strong>(2019-...)</strong>',
  codaisseur: 'Full Stack Developer / Teacher Codaisseur<strong>(2017-2019)</strong>',
  codeAcademy: 'Code Academy Codaisseur <strong>(2017)</strong>',
  studentLeadershipAward: 'Student Leadership Award <strong>(2016)</strong>',
  collegeCantors: 'Founder & Conductor College Cantors <strong>(2016)</strong>',
  musicSociety: 'Chair Music Society (UCR) <strong>(2015)</strong>',
  studentPlus: 'Tutor StudentPlus <strong>(2013-2017)</strong>',
  ucr: 'University College Roosevelt (BA Liberal Arts / Musical Composition) <strong>(2013-2016)</strong>',
  highSchool: 'Christiaan Huygens College (VWO, Natuur & Gezondheid) <strong>(2007-2013)</strong>',
  footerFirst: 'You reached the end! Find out more on',
  footerSecond: ', or go ',
  footerThird: 'back to the top of this page',
  born: 'I was born March 22, 1995'
}

const dutchContent = {
  introText: 'Welkom! Ik ben Mimi',
  aboutMeCTA: 'Lees meer',
  aboutMeTitle: 'Over mij',
  location: 'Ik woon in <strong>Culemborg</strong> ❤️ hartje Nederland',
  organizing: 'Ik <strong>breng mensen graag samen</strong> voor sociale activiteiten, of om lekker muziek te maken!',
  music: 'Ooit heb ik compositie gestudeerd, en ik heb een tijd lang <strong>koren gedirigeerd</strong>',
  code: 'Sinds 2017 werk ik als software engineer, vooral met <strong>Typescript</strong>, <strong>React</strong> en <strong>Graphql</strong>.',
  education: 'Educatie is een passie! Ik heb lesgegeven aan toekomstige programmeurs en <strong>werk voor een educatieve uitgever</strong>.',
  timelineCTA: 'Check mijn tijdlijn',
  timelineTitle: 'Tijdlijn',
  worksCouncil: 'Lid van OR Infinitas Learning <strong>(2021-...)</strong>',
  infinitas: 'Software Engineer Noordhoff / Infinitas Learning <strong>(2019-...)</strong>',
  codaisseur: 'Full Stack Developer / Leerkracht Codaisseur <strong>(2017-2019)</strong>',
  codeAcademy: 'Code Academy Codaisseur <strong>(2017)</strong>',
  studentLeadershipAward: 'Student Leadership Award <strong>(2016)</strong>',
  collegeCantors: 'Oprichter & Dirigent College Cantors <strong>(2016)</strong>',
  musicSociety: 'Voorzitter Music Society (UCR) <strong>(2015)</strong>',
  studentPlus: 'Docent StudentPlus <strong>(2013-2017)</strong>',
  ucr: 'University College Roosevelt (BA Liberal Arts / Musical Composition) <strong>(2013-2016)</strong>',
  highSchool: 'Christiaan Huygens College (VWO, Natuur & Gezondheid) <strong>(2007-2013)</strong>',
  born: 'Ik ben geboren op <strong>22 maart 1995</strong>',
  footerFirst: 'Je bent aan het einde van mijn CV! Voor meer info, check',
  footerSecond: ', of ga naar ',
  footerThird: 'bovenaan deze pagina'

}

const elements = document.querySelectorAll("[data-i18n]");

const replaceText = (el) => { 
    const key = el.innerText;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lan = urlParams.get('lan')
    console.log(lan);
    switch(lan) {
      case 'nl':
        el.innerHTML = dutchContent[key] || key;
        break;
      case 'en':
      default: 
        el.innerHTML = englishContent[key] || key;
    }
}

elements.forEach(el => replaceText(el));