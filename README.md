# _FREELA_

(Project Module 3 Ironhack)

Click [HERE](https://freela-app.herokuapp.com/) to see and enjoy _Freela App_

Click [HERE](https://api-freela.herokuapp.com/) to access _Freela API_

Click [HERE](https://github.com/jordanavq/freela-client) to see our front-end repository :octocat:

### Introduction

- Project module 3, Web Development course Ironhack "WDPT" MAY 2021.
- Freela is a website created with the purpose of meeting the needs of both owners and managers of restaurants and bars when hiring a freelance professional, as well as providing more chances for these professionals to show themselves available to more interested companies. We promote communication and connection between those looking for your vacancy and those looking for your candidate.

## 🚀 How to enjoy and requirements

- You will need to have an electronic device with internet access.
- Click [HERE](https://freela-app.herokuapp.com/) to open the website.
- Now feel free to check out everything we've made available on the Freela.

### ENDPOINTS

| Method | End Point                       | Payload                                                                                                                                                                                                                             | Response                               | Action                                                            |
| ------ | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------- |
| Get    | /vagas                          | '-'                                                                                                                                                                                                                                 | Status: 200 body: [jobs]               | Get all Jobs                                                      |
| Get    | /vagas/:vagaId                  | '-'                                                                                                                                                                                                                                 | Status: 200 body: {job}                | Get a job by id                                                   |
| Get    | /candidatos                     | '-'                                                                                                                                                                                                                                 | Status: 200 body: [candidates]         | Get all candidates                                                |
| Get    | /candidato/:candidatoId         | '-'                                                                                                                                                                                                                                 | Status: 200 body: {candidate}          | Get a candidate by id                                             |
| Post   | /empresa/cadastro               | { empresa: String, email:String. senha:String }                                                                                                                                                                                     | Status: 201 body:{empresa,email,senha} | Creates a company user                                            |
| Post   | /candidato/cadastro             | { nome_e_sobrenome: String, funçao: String idade: String sexo: String bairro de residencia: String cidade: String estado:String possui_meio_de_transpote_próprio?: boolean celular: String email:String. senha:String }             | Status: 201 body:{candidate}           | Creates a candidate user                                          |
| Post   | /vaga/cadastro/                 | { data: String, horario: String, funcao: String, diaria: String, traje: String, fornece_refeicao: boolean endereco: String, cidade: String, estado: String empresaId: Schema,Types.ObjectId candidatosId: [Schema.Types.ObjectId] } | Status: 201 body:{job}                 | Create a new job opening                                          |
| Post   | /vaga/candidatura/:vagaId       | '-'                                                                                                                                                                                                                                 | Status: 201 Message: Application sent  | Create a new job application from an candidate                    |
| Get    | /vaga/:candidatoId              | '-'                                                                                                                                                                                                                                 | Status:200 body:[jobs]                 | Get jobs opening that the candidate has enrolled                  |
| Get    | /vaga/candidatos/:vagaId        | '-'                                                                                                                                                                                                                                 | Status:200 body:[jobs]                 | Get all candidates enrolled in a job opening                      |
| Get    | /vaga/empresa/:empresaId        | '-'                                                                                                                                                                                                                                 | Status:200 body:[jobs]                 | Get all company´s jobs opening                                    |
| Post   | /empresa/entrar                 | { email: String, senha:String }                                                                                                                                                                                                     | Status:200 body:{user, token}          | Creates a token for the user to access companies´ private routes  |
| Post   | /candidato/entrar               | { email: String, senha:String }                                                                                                                                                                                                     | Status:200 body:{user, token}          | Creates a token for the user to access candidates´ private routes |
| Put    | /candidato/editar/:candidatoId  | { nome_e_sobrenome: String, funçao: String idade: String sexo: String bairro de residencia: String cidade: String estado:String possui_meio_de_transpote_próprio?: boolean celular: String email:String. senha:String }             | Status: 200 body: {candidate}          | Updates candidate´s profile                                       |
| Delete | /candidato/deletar/:candidatoId | '-'                                                                                                                                                                                                                                 | Status 200 Message: Profile deleted    | Delete candidate ́s profile                                        |
| Delete | /vaga/deletar/:vagaId           | '-'                                                                                                                                                                                                                                 | Status 200 Message: Job deleted        | Delete job opening and updates company´s document removing it     |
| Put    | /vaga/editar/:vagaId            | { data: String, horario: String, funcao: String, diaria: String, traje: String, fornece_refeicao: boolean endereco: String, cidade: String, estado: String }                                                                        | Status: 200 body: {job}                | Updates job opening data                                          |

## 📦 Development

- API INTEGRATION
- REACT
- Java Script
- HTML
- CSS
- Bootstrap

### 📌 To come

- We host our project on the [Heroku](https://www.heroku.com/) website, so feel free to enjoy anywhere. (as long as internet is available).
- If you like the website, let us know, maybe We'll try to improve something.

## 📊 Presentation

Click [HERE](https://slides.com/deboraaguiartavares/freela-english-presentation/fullscreen) to see our project presentation.

### 🎁 Expressions of gratitude

- We would like to thank the _Ironhack_ school for this experience and learning that was provided to us.
  Teachers _Daniel K Albanez (DK), \*\*Gabriel Sicuto_ and _Júlia Foresti_, for the way that the content was presented in the classroom and the support of doubts inside and outside the classroom.
  Thank you very much for this third module 🤓.

Developer: ⌨️ with 💜 by Jordana Queiroz [:octocat:](https://github.com/jordanavq) and Debora Tavares [:octocat:](https://github.com/DeAT1995)
