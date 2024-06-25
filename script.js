
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
      "Я разработчик на Python с опытом создания парсеров и фокусом на оптимизации бизнес-процессов.",
      "В своей карьере я также успешно возглавлял разработку системы офисных рабочих мест, которая значительно улучшила рабочие процессы компании.",
      "В настоящее время я стремлюсь перейти в веб-разработку, где могу применить свои знания для решения реальных бизнес-задач, находя баланс между качеством, скоростью и эффективностью выполнения проектов.",
      "Я ищу возможности, где смогу сочетать технические навыки и стратегическое видение для достижения оптимальных результатов."
    ]
  },
  skills: {
    "title": "Навыки",
    "items": [
      ["Языки программирования", "Python, Basic JS / TS"],
      ["Фронтенд технологии", "HTML, CSS, SASS"],
      ["Базы данных", "SQL, Mongo, Redis"],
      ["Веб-фреймворки", "FastAPI"],
      ["Парсинг", "Scrapy, Emulators, Burp"],
      ["Анализ данных", "Pandas, Basic ML"],
      ["Конкурентное программирование", "Asyncio, Multithreading"],
      ["Тестирование", "Playwright, Pytest"],
      ["Разное", "GIT, Docker, Linux, Nginx"],
      ["Soft-skills", "Google, Слепая печать"]
    ]
  },
  languages: {
    "title":"языки",
    "items": [
      ["Русский", "родной"],
      ["Английский", "B1"]
    ]
  },
  courses: {
    "title":"Курсы",
    "cert":"Сертификат",
    "items": [
      ["Web парсинг", "https://stepik.org/cert/1888856"], 
      ["Асинхронный python", "https://stepik.org/cert/2160081"], 
      ["Интерактивынй тренажер SQL", "https://stepik.org/cert/2170328"], 
      ["FastApi - Погружение в backend", "https://stepik.org/cert/2175008"], 
      ["Многопоточный python", "https://stepik.org/cert/2402675"], 
    ]
  },
  education: {
    "title":"Образование",
    "items":[
      ["Университет", "МГУ"],
      ["Факультет", "Географический"],
      ["Специальность", "Экология (Неоконченное, 5лет)"],
    ]
  },
  interests: {
    "title":"Интересы",
    "items":[
      ["Оптимизация процессов", "Автоматизация задач для повышения эффективности и сокращения ручного труда."],
      ["Решение проблем", "Получаю удовольствие от решения сложных, нетривиальных задач."],
      ["Практическая реализация", "Исследование и применение различных технологий для создания эффективных решений."],
      ["Непрерывное обучение", "Поддержание актуальности знаний о новейших технологиях и лучших практиках в веб-разработке и программировании на Python."]
    ]
  },
  experience: {
    "title":"Опыт работы",
    "jobs": [
      {
        "company":"DataInsight",
        "position":{"key":"Позиция", "value":"Python разработчик"},
        "period":{"key":"Период","value": "Август 2022 - Наст.время"}, 
        "details":{
          "key":"Детали", 
          "items":[
            ["Разработка парсеров", "Разработка и поддержка парсеров для различных веб-ресурсов, включая крупные торговые площадки, с использованием фреймворков Scrapy и Playwright."],
            ["Разработка сервисов", "Создание сервиса мониторинга прокси-серверов для обеспечения стабильной работы парсеров."],
            ["Управление базами данных", "Проектирование структур баз данных, написание SQL-запросов для хранения и извлечения данных, сотрудничество с аналитиками для предоставления необходимой информации."],
            ["Разработка веб-интерфейсов", "Создание пользовательских интерфейсов для взаимодействия с данными парсеров с использованием FastAPI."]
          ]
        }
      },
      {
        "company":"Пионер (Мебельная компания)",
        "position":{"key":"Позиция", "value":"Менеджер-конструктор"},
        "period":{"key":"Период","value": "Июль 2010 - Сентябрь 2021"},
        "details":{
          "key":"Детали", 
          "items":[
            ["Оптимизация процессов", "Разработка макросов Excel для автоматизации рутинных задач и повышения эффективности отдела."],
            ["Управление проектами", "Руководство разработкой системы учёта заказов для офиса, включая поиск и взаимодействие с программистом."]
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
      "I am a Python developer with experience in building parsers and a focus on optimizing business processes.",
      "In my career, I also successfully led the development of an office-desk system that significantly improved company workflows.",
      "I am currently looking to transition into web development, where I can apply my knowledge to solve real business challenges, finding a balance between quality, speed, and efficiency in project execution.",
      "I am seeking opportunities where I can combine technical skills and strategic vision to achieve optimal results."
    ]
  },
  skills: {
    "title": "skills",
    "items": [
      ["programming language", "Python, Basic JS / TS"],
      ["frontend", "HTML, CSS, SASS"],
      ["databases", "SQL, Mongo, Redis"],
      ["web-framework", "FastAPI"],
      ["web-scraping", "Scrapy, Emulators, Burp"],
      ["Data Analysis", "Pandas, Basic ML"],
      ["Councurrentcy programming", "Asyncio, Multithreading"],
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
      ["FastApi - backend development", "https://stepik.org/cert/2175008?lang=en"], 
      ["Multithreading python", "https://stepik.org/cert/2402675?lang=en"], 
    ]
  },
  education: {
    "title":"education",
    "items":[
      ["university", "Moscow State University"],
      ["Faculty", "Geographic"],
      ["Specialization", "Ecology(Incomplete, 5th year)"],
    ]
  },
  interests: {
    "title":"interests",
    "items":[
      ["Process Optimization", "Automating tasks to improve efficiency and reduce manual work."],
      ["Problem-solving", "Enjoying the challenge of solving complex, non-trivial problems."],
      ["Practical implementation", "Exploring and applying various technologies to create effective solutions."],
      ["Continuous learning", "Staying updated with the latest technologies and best practices in web development and Python programming"],
    ]
  },
  experience: {
    "title":"work experience",
    "jobs": [
      {
        "company":"DataInsight",
        "position":{"key":"Position", "value":"Python Developer"},
        "period":{"key":"Period","value": "August 2022 - Present"}, 
        "details":{
          "key":"Details", 
          "items":[
            ["Parser Development", "Development and maintenance of parsers for various web resources, including major marketplaces, using the Scrapy and Playwright frameworks."],
            ["Service Development", "Creation of a proxy server monitoring service to ensure stable parser operations."],
            ["Database Management", "Design of database structures, writing SQL queries for data storage and retrieval, collaboration with analysts to provide necessary information."],
            ["Web Interface Development", "Creation of user interfaces for interacting with parser data using FastAPI."]
          ]
        }
      },
      {
        "company":"Pioner",
        "position":{"key":"Position", "value":"Manager-Designer"},
        "period":{"key":"Period","value": "July 2010 - September 2021"},
        "details":{
          "key":"Details", 
          "items":[
            ["Process Optimization", "Development of Excel macros to automate routine tasks and increase department efficiency."],
            ["Project Management", "Led the development of an office-desk system for order tracking, including finding and interacting with a programmer."]
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
    const link = document.createElement("a")
    link.href = item[1]
    link.innerText = content[key]["cert"]
    li.appendChild(name)
    li.appendChild(link)
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
  console.log(buttons);
  
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