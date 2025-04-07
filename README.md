# UI Testing Playground - Test Automation (Aplicatie de Testare)

Acest proiect contine o prima faza a unei aplicatii de testare automata a interfetei pentru aplicatia web: [http://uitestingplayground.com](http://uitestingplayground.com).

> Aplicatia web nu ne apartine, si o folosim doar in scopul testarii

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

[Selenium vs Cypress](https://www.testim.io/blog/cypress-vs-selenium/)

## De ce am ales Selenium?

Am ales **Selenium** pentru ca:
- Ofera suport multi-limbaj, iar noi am dorit sa folosim **Python**
- Ofera compatibiliate cu toate browserele majore
- Este mai flexibil si potrivit pentru proiecte care pot include si testarea backend-ului sau integrarea in pipeline-uri CI/CD mai complexe
- Framework-ul este matur, stabil si bine sustinut in ecosistemele enterprise



---


