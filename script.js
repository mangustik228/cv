
const resumeContentRu = {
  name: "Василий Овчинников",
  occupation: "Бэкенд <span>python</span> разработчик",
  title: "Резюме Овчинников",
  geolocation: "<span>местоположения</span><span>Камбоджа, Кампот</span>",
  phone: "телефон",
  email: "почта",
  tg: "телеграмм",
  aboutMe: {
    "title":"Обо мне",
    "texts": [
      "Как хобби, разрабатывал проекты на базе Arduino, направленные на автоматизацию повседневных задач, включая системы полива, пульты дистанционного управления и др.",
      "Прохождение бассейна в «Школе 21» углубило мои знания в программировании на низкоуровневых языках, таких как C.",
      "Имею опыт работы с 3D-принтерами и станками ЧПУ, создавал кастомные детали и приспособления для повседневного использования."
    ]
    
  },
  skills: {
    "title": "Навыки",
    "items": [
      ["Языки программирования", "Python, TS"],
      ["Фронтенд технологии", "HTML, CSS, SASS"],
      ["Базы данных", "SQL, Mongo, Redis"],
      ["Веб-фреймворки", "FastAPI"],
      ["Парсинг", "Scrapy, Emulators, Burp"],
      ["Анализ данных", "Pandas, Basic ML"],
      ["Параллелизм", "Asyncio, Multithreading"],
      ["Тестирование", "Playwright, Pytest"],
      ["Разное", "GIT, Docker, Linux, Nginx"],
      ["Soft-skills", "Google, Слепая печать"]
    ]
  },
  languages: {
    "title":"языки",
    "items": [
      ["Русский", "родной"],
      ["Английский", "B1 - B2"]
    ]
  },
  courses: {
    "title":"Курсы",
    "cert":"Сертификат",
    "items": [
      ["Web парсинг", "https://stepik.org/cert/1888856"], 
      ["Асинхронный python", "https://stepik.org/cert/2160081"], 
      ["Интерактивынй тренажер SQL", "https://stepik.org/cert/2170328"], 
      ["курс FastApi", "https://stepik.org/cert/2175008"], 
      ["Многопоточный python", "https://stepik.org/cert/2402675"],
      ["DataScience-plus (ЯП, 5 из 6 модулей)"], 
      ["Алгоритмы (Хирьянов, МФТИ 2 семестра)"]
    ]
  },
  education: {
    "title":"Образование",
    "items":[
      ["Университет", "МГУ"],
      ["Факультет", "Географический"],
      ["Специальность", "Экология"],
      ["Год выпуска", "2012"]
    ]
  },
  interests: {
    "title":"Интересы",
    "items":[
      ["Оптимизация процессов", "Автоматизация задач для повышения эффективности и сокращения ручного труда."],
      ["Практическая реализация", "Исследование и применение различных технологий для создания эффективных решений."],
      ["Непрерывное обучение", "Постоянно развиваюсь и стараюсь поддержать актуальность знаний о новейших технологиях и лучших практиках в веб-разработке."]
    ]
    },
    experience: {
      "title":"Опыт работы",
      "jobs": [
        {
          "company":"DataInsight",
          "position":{"key":"Позиция", "value":"Python разработчик"},
          "period":{"key":"Период","value": "Август 2022 - Наст.время"}, 
          "about":"(B2B аналитика e-commerce рынка)",
          "details":{
            "key":"Детали", 
          "items":[
            ["Разработка парсеров", "Разработка и поддержка парсеров для различных веб-ресурсов, способных обходить более 2 млн страниц в день с возможностью дальнейшего масштабирования."],
            ["Разработка сервисов", "Создание сервиса ротации и мониторинга проксей для обеспечения стабильной работы десятка парсеров одновременно."],
            ["Управление базами данных", "Разработка структур БД и написание SQL и MongoDB запросов для эффективного управления данными. Подготовка сложных запросов с группировками и агрегациями по запросу аналитиков."],
            ["Разработка веб-интерфейсов", "Создание внутренних интерфейсов на FastAPI для взаимодействия с парсерами и базами данных."],
            ["Контейнеризация", "Разработка и поддержка Docker Compose файлов, упаковка компонентов системы в отдельные сервисы для облегчения развертывания и масштабирования."]
          ]
        }
      },
      {
        "company":"Пионер",
        "position":{"key":"Позиция", "value":"Менеджер-конструктор"},
        "period":{"key":"Период","value": "Июль 2010 - Сентябрь 2021"},
        "about":"(производство специализированной мебели на заказ)",
        "details":{
          "key":"Детали", 
          "items":[
            ["Взаимодействие с клиентами", "Ведение переговоров, выявление потребностей, 3D-моделирование в SketchUp, согласование и оформление чертежей в Layout."],
            ['Проектирование изделий', "Разработка детальных чертежей и их передача в цех для дальнейшего производства."],
            ["Оптимизация процессов", "Разработка динамических 3D-моделей и написание макросов Excel для автоматизации рутинных задач и повышения продуктивности."],
            ["Управление проектами", "Руководство разработкой системы учёта заказов, включая составление ТЗ и взаимодействие с программистом."],
            ["Контент и веб-оптимизация", "Управление контентом, SEO-оптимизация, разработка логики онлайн-калькуляторов для сайта."]
          ]
        }
      }
    ]
  },
  downloadButton: "Скачать резюме в pdf"
}

const resumeContentEn = {
  name: "Vasiliy Ovchinnikov",
  occupation: "backend <span>python</span> developer", 
  title: "Resume Ovchinnikov",
  geolocation: "<span>geolocation</span><span>Cambodia, Kampot</span>",
  phone: "phone",
  email: "email",
  tg: "telegram",
  aboutMe: {
    "title":"About me",
    "texts": [
      "As a hobby, I developed Arduino-based projects aimed at automating everyday tasks, including irrigation systems, remote controls, and more.",
      "Completing the piscine at 'School 21' deepened my knowledge in programming with low-level languages such as C.",
      "I have experience with 3D printers and CNC machines, creating custom parts and fixtures for everyday use."
  ]
  
  
  },
  skills: {
    "title": "skills",
    "items": [
      ["programming language", "Python, TS"],
      ["frontend", "HTML, CSS, SASS"],
      ["databases", "SQL, Mongo, Redis"],
      ["web-framework", "FastAPI"],
      ["web-scraping", "Scrapy, Emulators, Burp"],
      ["Data Analysis", "Pandas, Basic ML"],
      ["Councurrency", "Asyncio, Multithreading"],
      ["Testing", "Playwright, Pytest"],
      ["Other", "GIT, Docker, Linux, Nginx"],
      ["Soft-skills", "Google, blind-printing"]
    ]
  },
  languages: {
    "title":"languages",
    "items": [
      ["Russian", "native"],
      ["English", "intermediate"]
    ]
  },
  courses: {
    "title":"courses",
    "cert":"Certificate",
    "items": [
      ["Web parsing", "https://stepik.org/cert/1888856?lang=en"], 
      ["Asynchronous python", "https://stepik.org/cert/2160081?lang=en"], 
      ["Interactive SQL Simulator", "https://stepik.org/cert/2170328?lang=en"], 
      ["Course FastApi", "https://stepik.org/cert/2175008?lang=en"], 
      ["Multithreading python", "https://stepik.org/cert/2402675?lang=en"], 
      ["DataScience-plus (Yandex, 83%)"],
      ["Algorithms (MIPT 2 semesters)"]
    ]
  },
  education: {
    "title":"education",
    "items":[
      ["university", "Moscow State University"],
      ["Faculty", "Geographic"],
      ["Specialization", "Ecology"],
    ]
  },
  interests: {
    "title":"interests",
    "items":[
      ["Process Optimization", "Automating tasks to improve efficiency and reduce manual work."],
      ["Practical implementation", "Exploring and applying various technologies to create effective solutions."],
      ["Continuous Learning", "I am constantly evolving and striving to keep my knowledge up to date with the latest technologies and best practices in web development."],
    ]
  },
  experience: {
    "title": "Work Experience",
    "jobs": [
      {
        "company": "DataInsight",
        "position": { "key": "Position", "value": "Python Developer" },
        "period": { "key": "Period", "value": "August 2022 - Present" },
        "about": "(B2B analytics of the e-commerce market)",
        "details": {
          "key": "Details",
          "items": [
            ["Parser Development", "Development and maintenance of parsers for various web resources, capable of traversing over 2 million pages per day, with potential for further scaling."],
            ["Service Development", "Creating a proxy rotation and monitoring service to ensure stable operation of multiple parsers simultaneously."],
            ["Database Management", "Designing database structures, writing SQL queries for data storage and retrieval, and collaborating with analysts to provide necessary information."],
            ["Web Interface Development", "Creating internal interfaces using FastAPI for interaction with parsers and databases."],
            ["Containerization", "Developed and maintained Docker Compose files, packaging system components into separate services to facilitate deployment and scalability."]
          ]
        }
      },
      {
        "company": "Pioner",
        "position": { "key": "Position", "value": "Design Manager" },
        "period": { "key": "Period", "value": "July 2010 - September 2021" },
        "about": "(custom specialized furniture manufacturing)",
        "details": {
          "key": "Details",
          "items": [
            ["Client Interaction", "Conducting negotiations, identifying needs, 3D modeling in SketchUp, coordinating and preparing drawings in Layout."],
            ["Product Design", "Developing detailed drawings and handing them over to the workshop for further production."],
            ["Process Optimization", "Developing dynamic 3D models and writing Excel macros to automate routine tasks and increase productivity."],
            ["Project Management", "Leading the development of an order tracking system, including searching for and collaborating with a programmer."],
            ["Content and Web Optimization", "Managing website content, SEO optimization, and developing the logic for online calculators on the website."]
          ]
        }
      }
    ]
  },
  downloadButton: "Download CV as pdf"
}

function insertCourses(id, key, content) {
  const element = getElementWithTitle(id, key, content)
  const ul = document.createElement("ul")
  ul.classList.add("list-one-row")
  content[key]['items'].forEach(item => {
    const li = document.createElement("li")
    const name = document.createElement("span")
    name.innerText = item[0]
    li.appendChild(name)
    const link = document.createElement("a")
    link.href = item[1]
    if (item[1]) {
      link.innerText = content[key]["cert"]
      li.appendChild(link)
    } else {
      empty_span = document.createElement("span")
      name.classList.add("no-colon")
      li.appendChild(empty_span)
    }
    ul.appendChild(li)
  });
  element.append(ul)
}


function insertTitleAndParagraphes(id, key, content) {
  const element = getElementWithTitle(id, key, content)
  content[key]["texts"].forEach(txt => {
    const paragraph = document.createElement("p")
    paragraph.innerText = txt
    element.appendChild(paragraph)
    });
    }

function getElementWithTitle(id, key, content) {
  const element = document.getElementById(id)
  element.innerHTML = ""
  const title = document.createElement("h3")
  title.innerText = content[key]["title"]
  element.appendChild(title)
  return element
}

    
function insertOneRowBlock(id, key, content) {
  const element = getElementWithTitle(id, key, content)
  const ul = document.createElement("ul")
  ul.classList.add("list-one-row")
  content[key]["items"].forEach(item => {
    const li = document.createElement("li")
    const name = document.createElement("span")
    name.innerText = item[0]
    const description = document.createElement("span")
    description.innerText = item[1]    
    li.appendChild(name)
    li.appendChild(description)
    ul.appendChild(li)
  })
  element.appendChild(ul)
}

function insertInterests(id, key, content) {
  const element = getElementWithTitle(id, key, content)
  const ul = document.createElement("ul")
  ul.classList.add("inner-white-list")
  ul.classList.add("inner-white-list__simple")
  content[key]['items'].forEach(item => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.classList.add("green-text")
    span.innerText = item[0]
    const textContent = document.createTextNode(item[1])
    li.appendChild(span)
    li.appendChild(textContent)
    ul.appendChild(li)
  });
  element.appendChild(ul)
}

function createExperienceLi(key, job) {
  const positionLi = document.createElement("li")
  const positionName = document.createElement("span")
  positionName.innerText = job[key]["key"]
  const positionValue = document.createElement("span")
  positionValue.innerText = job[key]["value"]
  positionLi.appendChild(positionName)
  positionLi.appendChild(positionValue)
  return positionLi
}

function createDetails(job) {
  const ul = document.createElement("ul")
  ul.classList.add("inner-list")
  ul.classList.add("inner-white-list")
  const li = document.createElement("li")
  const span = document.createElement("span")
  span.innerText = job["details"]["key"]
  li.appendChild(span)
  const innerUl = document.createElement("ul")
  innerUl.classList.add("inner-white-list__simple")
  job["details"]["items"].forEach(description => {
    const InnerLi = document.createElement("li")
    const InnerTitle = document.createElement("span")
    InnerTitle.classList.add("green-text")
    InnerTitle.innerText = description[0]
    InnerLi.appendChild(InnerTitle)
    const InnerText = document.createTextNode(description[1])
    InnerLi.appendChild(InnerText)
    innerUl.appendChild(InnerLi)
  });
  li.appendChild(innerUl)
  ul.appendChild(li)
  return ul 
  
}

function createWorkExperienceElement(id, key, content) {
  const element = getElementWithTitle(id, key, content)
  const mainUL = document.createElement("ul")
  mainUL.classList.add("work-experience")
  element.appendChild(mainUL)
  return mainUL
}


function createJobItem(job) {
  const jobElement = document.createElement("li")
  jobElement.classList.add("work-experience__item")
  
  const title = document.createElement("h4")
  title.innerText = job.company
  jobElement.appendChild(title)
  
  const about = document.createElement("p")
  about.innerText = job.about
  jobElement.appendChild(about)
  
  const infoUL = document.createElement("ul")
  infoUL.classList.add("list-one-row")
  jobElement.appendChild(infoUL)

  const position = createExperienceLi("position", job)
  const period = createExperienceLi("period", job)
  infoUL.appendChild(position)
  infoUL.appendChild(period)
  const details = createDetails(job)
  jobElement.appendChild(details)
  return jobElement
}


function insertExperience(id, key, content) {
  const element = createWorkExperienceElement(id, key, content)

  content[key]["jobs"].forEach(job => {
    const jobElement = createJobItem(job)
    element.appendChild(jobElement)
  });

}

const insertSkills = insertOneRowBlock
const insertLanguages = insertOneRowBlock
const insertEducation = insertOneRowBlock

function insertButtonDownloadText(content) {
  const button = document.getElementById("download-button")
  button.innerText = content["downloadButton"]
}

function populateResume(content) {
  const mainContent = document.getElementById("main-content");
  mainContent.classList.remove("fade-in");
  mainContent.classList.add("fade-out");
  
  setTimeout(() => {
      document.getElementById("title").textContent = content.title;
      document.getElementById("name").textContent = content.name;
      document.getElementById("occupation").innerHTML = content.occupation;
      document.getElementById("geolocation").innerHTML = content.geolocation;
      document.getElementById("phone").textContent = content.phone;
      document.getElementById("email").textContent = content.email;
      document.getElementById("tg").textContent = content.tg;
      insertTitleAndParagraphes("about-me", "aboutMe", content);
      insertSkills("skills", "skills", content);
      insertLanguages("languages", "languages", content);
      insertCourses("courses", "courses", content);
      insertEducation("education", "education", content);
      insertInterests("interests", "interests", content);
      insertExperience("experience", "experience", content);
      insertButtonDownloadText(content);
      
      mainContent.classList.remove("fade-out");
      mainContent.classList.add("fade-in");
      mainContent.classList.remove("hidden")  
      
      }, 250); // Длительность анимации fade-out
}



function switchLanguage(lang) {
  if (lang === "ru") {
    populateResume(resumeContentRu)
  } else {
    populateResume(resumeContentEn)
  }
  const buttons = document.querySelectorAll('#language-switcher button');
  
  let buttonLabel
  if (lang === "en") {
    buttonLabel = "English"
  } else {
    buttonLabel = "Русский"
  }

  buttons.forEach(button => {
      if (button.textContent === buttonLabel) {
          button.classList.add('active');
      } else {
          button.classList.remove('active');
      }
  })
}

document.addEventListener("DOMContentLoaded", function() {
  switchLanguage('ru');
});