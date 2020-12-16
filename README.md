<!-- # Web Interface Software Engineer: Front-End Challenge
Develop an HTML5 application.

## Instructions
- Fork this repository into your personal account in Github.
- Follow the technical specifications provided below
- Create a README file with the instructions to build, test and run the project.
- Open a pull request to https://github.com/ThirteenLtda/challenge-frontend with your solution developed in a seperate branch.

## Technical Requirements
- Use [YouTube search API](https://developers.google.com/youtube/v3/docs/search/list)
- Webpage should be responsive. Bonus: Mobile ready
- Use a JS Framework (React, Vue, Angular or other related framework)
- Colors, layout and images are free

## Remarks
- To consume data from this  [API](https://developers.google.com/youtube/v3/docs/search/list), you must generate your application `api_key` in this [link](http destas://developers.google.com/youtube/v3/getting-started?hl=pt-br).

## Functional Requirementes
The application has basically two pages:

### Home

This page will have a shearch form positioned in the middle of the screen with a placeholder `Search` and a corresponding search button. This form should be validated.

This search should call the url https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={SEARCH_TEXT}&key={API_KEY}

After the search, the form should be moved to the top of the screen and, below, a list with the search results containing title, description thumbnail and  a link to the descriptions page shold be displayed.

Bonus: This page should be paginated, using the [pagination resources of the API](https://developers.google.com/youtube/v3/guides/implementation/pagination?hl=pt-br).

### Details
From the `video_id` returned from the first call, a call to https://www.googleapis.com/youtube/v3/videos?id={VIDEO_ID}&part=snippet,statistics&key={API_KEY} should be performed.

From the return of this later call, a page containing the embedded video, its title, like and deslike buttons, its description and number of views.This page must have a button to go back to the home page.

### Wireframe
[Mobile Wireframe](https://projects.invisionapp.com/share/TKNIYA2FH3M#/screens)

[Desktop Wireframe](https://projects.invisionapp.com/share/TKNIYA2FH3M#/screens/384336638)

## What is going to be evaluated?
- Project organization
- Logic of the code
- Usage of Git
- Documentation
- Usability

## Disclaimer

Do not be concerned if you were not able to completely finish the challenge, everything you develop will be taken into account. But it is very important that you submit your solution (even if not complete) before the deadline informed in the email you received. Commits done after the agreed deadline won't be considered.  

Be sure to document your solution to your best, this will be highly appreciated.

Good luck :)  -->

# Setup para desenvolvimento

## Passo 1: Instalar o NodeJS

Instale o [NodeJS(LTS)](https://nodejs.org/en/download/).

Verifique a instalação com o comando `node -v` no Terminal. 

Deverá aparecer a informação: "v14.15.2".

## Passo 2: Instalar o Angular

Instale o Angular com o comando `npm install -g @angular/cli` no Terminal.

Verifique a instalação com o comando `ng --version` no Terminal.

Deverá aparecer a informação da versão instalada.

## Passo 3: Executar o video-app

Acesse o diretório da aplicação com o comando `cd video-app`.

Execute a aplicação com o comando `ng serve -o`.

# Documentação

A ferramenta de documentação utilizada é o [Compodoc](https://compodoc.app/).

Acesse o diretório da aplicação com o comando `cd video-app`.

Execute o comando `compodoc -p tsconfig.app.json src -s`.

A documentação está disponível em `http://127.0.0.1:8080`.