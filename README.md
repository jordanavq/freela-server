# _FREELA_

(Project Module 3 Ironhack)

Click [HERE](https://freela-app.herokuapp.com/) to see and enjoy _Freela App_
Click [HERE](https://api-freela.herokuapp.com/) to access _Freela API_
Click [HERE](https://github.com/jordanavq/freela-client) to see our front-end repository :octocat:

### Introduction

| New table |                                 |                                                                                                                                                                                                                                    |                                          |                                                                  |
| --------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| Method    | End Point                       | Payload                                                                                                                                                                                                                            | Response                                 | Action                                                           |
| Get       | /vagas                          | '-'                                                                                                                                                                                                                                | Status: 200 body: [vagas]                | Get all Jobs                                                     |
| Get       | /vagas/:idvaga                  | '-'                                                                                                                                                                                                                                | Status: 200 body: {vaga}                 | Get a Buscar uma única vaga                                      |
| Get       | /candidatos                     | '-'                                                                                                                                                                                                                                | Status: 200 body: [candidatos]           | Buscar todos os candidatos do DB                                 |
| Get       | /candidato/:candidatoId         | '-'                                                                                                                                                                                                                                | Status: 200 body: {candidato}            | Buscar uma único candidato                                       |
| Post      | /empresa/cadastro               | { empresa: String, email:String. senha:String }                                                                                                                                                                                    | Status: 201 body:{empresa,email,senha}   | Criar uma empresa no DB                                          |
| Post      | /candidato/cadastro             | { nome: String, função: String Idade: Number Sexo: String Bairro de residência: String Cidade: String Estado:String Possui meio de transpote próprio?: bollean Contato: String email:String. senha:String }                        | Status: 201 body:{candidato}             | Criar um candidato no DB                                         |
| Post      | /vaga/cadastro/                 | { data: String, horário: String, funcao: String, Diária: number, Traje: String, Fornece Refeição: boolean Endereço: String, Cidade: String, Estado: String empresaId: Schema,Types.ObjecID candidatosId: [Schema.Types.ObjectId] } | Status: 201 body:{vaga}                  | Criar uma nova vaga no DB                                        |
| Post      | /vaga/candidatura/:vagaId       | '-'                                                                                                                                                                                                                                | Status: 201 Message: Candidatura enviada | Criar nova candidatura                                           |
| get       | /vaga/:candidatoId              | '-'                                                                                                                                                                                                                                | Status:200 body:[vagas]                  | Buscar vagas que o candidato está cadastrado                     |
| get       | /vaga/:idempresa                | '-'                                                                                                                                                                                                                                | Status:200 body:[vagas]                  | Buscar dentro da vaga publicada quais candidatos estão inscritos |
| post      | /empresa/entrar                 | { email: String, senha:String }                                                                                                                                                                                                    | Status:200 body:{user, token}            | Creates a token for the user to access private routes            |
| post      | /candidato/entrar               | { email: String, senha:String }                                                                                                                                                                                                    | Status:200 body:{user, token}            | Creates a token for the user to access private routes            |
| Put       | /candidato/editar/:candidateId  | { nome: String, Experiência: String Idade: Number Sexo: String Bairro de residência: String Cidade: String Estado:String Possui meio de transpote próprio?: bollean Contato: String e-mail:String. senha:String }                  | Status: 200 body: {candidato}            | Editar perfil usuário                                            |
| Delete    | /candidato/deletar/:candidateId | '-'                                                                                                                                                                                                                                | Status 200 Message: Perfil deletado      | Deletar perfil usuário                                           |
| Delete    | /vaga/deletar/:vagaId           | '-'                                                                                                                                                                                                                                | Status 200 Message: Vaga deletada        | Deletar vaga e atualizar documento da empresa removendo a vaga   |
| Put       | /vaga/editar/:vagaId            | { Cargo: String, Dia e Horário: String, Diária: number, Traje: String, Fornece Refeição: boollean Endereço: String, Cidade: String, Estado: String Contato: String Responsável: String }                                           | Status: 200 body: {vaga}                 | Editar dados de uma vaga                                         |

## 🚀 How to enjoy and requirements

- You will need to have an electronic device with internet access.
- Click [HERE](https://freela-app.herokuapp.com/) to open the website.
- Now feel free to check out everything we've made available on the Freela.

### Introduction

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
