# UI Testing Playground - Test Automation (Aplicatie de Testare)

Acest proiect contine o prima faza a unei aplicatii de testare automata a interfetei pentru aplicatia web: [http://uitestingplayground.com](http://uitestingplayground.com).

> Aplicatia web nu ne apartine, si o folosim doar in scopul testarii

## Setup
1. Apasati pe **setup.sh** -> **Download raw file**
2. Mutati fisierul intr-un folder gol.
3. Inainte de rularea fisierului aveti nevoie de [node js](https://nodejs.org/en) si [git](https://git-scm.com/downloads)
4. Deschideti un terminal git in folderul gol in care se afla fisierul setup.sh
5. In terminal-> ``bash setup.sh``

[Tutorial video](https://www.youtube.com/watch?v=Yc4wgG6KJAw)


Se va clona repo-ul in folderul respectiv si se vor adauga toate dependetele necesare. Pe langa asta toate testele vor fi rulate.

Daca deja aveti clonat repo-ul.
Deschideti un **terminal** si rulati urmatoarele comenzi:
- Pentru a rula un test anume ``npx cypress run --spec "cypress/e2e/nume_test.cy.js"``
- Pentru a rula toate testele ``npx cypress run``
- Pentru a rula testele folosind interfata grafica ``npx cypress open``
[Demo](https://www.youtube.com/watch?v=qGcGWmhK5-o)

## Descriere generala

Scopul aplicatiei este de a testa automat diverse functionalitati din site-ul [UI Testing Playground](http://uitestingplayground.com), care este o aplicatie demonstrativa conceputa special pentru practici si exercitii de testare automata a interfetei grafice (UI).

## Framework-uri candidate

In prima etapa, am analizat doua framework-uri populare de testare automata:

### 1. [Selenium](https://www.selenium.dev/)
[Documentatie](https://selenium-python.readthedocs.io)
[Setup](https://selenium-python.readthedocs.io/installation.html)

Selenium este un framework open-source care permite automatizarea browserelor web. Ofera suport pentru multiple limbaje de programare (Java, C#, Python etc.) si este compatibil cu toate browserele majore.

**Concepte de baza:**
- WebDriver: API care controleaza browserul
- Locatori: metode de identificare a elementelor (ID, CSS selector, XPath etc.)
- Teste scrise in cod, de obicei integrate in alte framework-uri (ex: NUnit, JUnit)

### 2. [Cypress](https://www.cypress.io/)
[Documentatie](https://docs.cypress.io/app/get-started/why-cypress)
[Setup](https://docs.cypress.io/app/get-started/install-cypress)

Cypress este un framework modern pentru testare end-to-end, axat pe aplicatii scrise in JavaScript/TypeScript. Este foarte intuitiv pentru testarea aplicatiilor frontend si ofera o experienta interactiva in timp real.

**Concepte de baza:**
- Ruleaza in browser, aproape de aplicatie
- API fluent bazat pe promisiuni
- Time-travel debugging (posibilitatea de a inspecta fiecare pas)

| Caracteristici              | **Cypress**                                                                                                                                         | **Selenium**                                                                                                                                                           |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tip de testare**          | Front-end, API-uri, end-to-end                                                                                                                      | End-to-end (nu suporta testarea API-urilor direct)                                                                                                                     |
| **Limbaje suportate**       | JavaScript, TypeScript                                                                                                                              | Mai multe limbaje: Java, JavaScript, Perl, PHP, Python, Ruby, C# etc.                                                                                                  |
| **Public tinta**            | Dezvoltatori si testeri                                                                                                                              | Ingineri de automatizare, testeri                                                                                                                                        |
| **Usurinta in utilizare**   | Foarte usor pentru cei familiarizati cu JavaScript. Include functionalitatea „travel back in time” pentru debugging.                               | Usor de inceput daca stii limbajul, dar mai complex decat Cypress. Necesita invatarea unor sintaxe specifice.                                                          |
| **Viteza**                  | Arhitectura fara WebDriver il face mai rapid pentru teste individuale.                                                                              | Desi arhitectura il face mai greu pentru teste simple, ruleaza eficient un numar mare de teste in paralel si cross-browser.                                           |
| **Usurinta in instalare**   | Instalare simpla: `npm install cypress --save-dev`. Nu necesita WebDriver, totul e inclus.                                                          | Necesita instalarea WebDriver si a altor componente. Instalarea este mai complexa.                                                                                     |
| **Integrari si pluginuri**  | Integrare limitata, dar ofera o colectie bogata de pluginuri.                                                                                       | Se integreaza usor cu CI/CD, testing vizual, platforme cloud, si tool-uri de raportare.                                                                                |
| **Browsere suportate**      | Browsere Chromium (Chrome, Edge, Brave) si Firefox.                                                                                                 | Toate browserele majore: Chrome, Firefox, Edge, Opera, Internet Explorer etc.                                                                                           |
| **Documentatie**            | Documentatie buna, cu multe exemple de cod.                                                                                                         | Documentatie decenta, dar nu la fel de clara sau completa ca la Cypress.                                                                                               |
| **Comunitate si suport**    | Comunitate in crestere.                                                                                                                              | Comunitate matura, cu multe resurse si solutii existente.                                                                                                               |

[Selenium vs Cypress](https://www.testim.io/blog/cypress-vs-selenium/)[3]

## De ce am ales Selenium?

Am ales **Selenium** pentru ca:
- Ofera suport multi-limbaj, iar noi am dorit sa folosim **Python**
- Ofera compatibiliate cu toate browserele majore
- Este mai flexibil si potrivit pentru proiecte care pot include si testarea backend-ului sau integrarea in pipeline-uri CI/CD mai complexe
- Framework-ul este matur, stabil si bine sustinut in ecosistemele enterprise

## Experinta de testare folosind Cypress
Am testat initial si Cypress, iar experienta a fost una foarte placuta. Este un tool modern, cu o interfata interactiva excelenta, extrem de prietenos pentru dezvoltatori. Ne-a impresionat in special modul in care ofera feedback vizual in timp real si functionalitatea de time-travel debugging, care ne-a permis sa inspectam fiecare pas al executiei testelor cu usurinta. Este rapid, simplu de instalat si se integreaza bine in fluxurile de lucru front-end.

Cu toate acestea, dupa o analiza mai ampla, am decis sa mergem pe Selenium, deoarece ofera o flexibilitate mai mare in ceea ce priveste limbajele de programare (noi folosim Python), suportul extins pentru toate browserele majore. Fiind un framework matur si stabil, Selenium se potriveste mai bine cerintelor si arhitecturii proiectului nostru.


## Teste create folosind AI

Am incercat sa creeam cateva teste folosind [CHAT-GPT](https://chatgpt.com/share/68264646-44c8-800a-919f-4893befb1e8d)

Am vrut sa testam apasarea anumitor butoane folosind __Cypress__.
Testul generat de AI se afla in Cypress/ai_alerts.cy.js
Din pacate acest test nu a functionat:
<br>
![image](https://github.com/user-attachments/assets/14ec9f51-9720-4948-96bc-2a5ad702cd65)
<br>
Prompt-urile folosite:
<br>
![image](https://github.com/user-attachments/assets/372158f7-187e-4d48-a563-9544960e6797)
<br>
<br>
Al doilea test a fost pentru "Non-Breaking Space"
<br>
Promptul folosit:
<br>
![image](https://github.com/user-attachments/assets/3dc9b6e9-1346-4b7c-bd8c-5c5b63d33e43)
<br>
Acest test a reusit, si am reusit sa testam "Non-Breaking Space"
<br>



## Referințe

[1] Selenium Official Docs - https://www.selenium.dev/documentation
<br>
[2] Cypress Docs - https://docs.cypress.io
<br>
[3] Testim Blog - Cypress vs Selenium - https://www.testim.io/blog/cypress-vs-selenium/
<br>
[4] ChatGPT – https://chat.openai.com

---


