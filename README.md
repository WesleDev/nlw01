## :rocket: Sobre o projeto

<p>Aplicativo com construido durante a NextLevelWeek da Rocketseat utilizando Typescript.</p>

<p>Aplicativo disponível nas versões:</p>
<h3>
 <ul>
    <li>Web</li>
    <li>Mobile</li>
 </ul>
</h3>
 <p>os dois utilizando o <em>mesmo</em> backend.</p>

# :computer: Versão web:

<p>Este aplicativo foi construido utilizando ReactJS</p>
<p>Nesta pagina é possível realizar o cadastramento de pontos de coleta</p>

## Layout

## :blue_book: Tecnologias

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React router dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Axios](https://github.com/axios/axios)
- [React icons](https://react-icons.github.io/react-icons/)
- [Leaflet](https://leafletjs.com/)
- [React-dropzone](https://www.dropzonejs.com/)
- [API de localidades IBGE](https://servicodados.ibge.gov.br/api/docs/localidades)

# :iphone: Versão Mobile

<p>Este aplicativo foi construido utilizando React Native</p>
<p>Nesta pagina é possível buscar por regiao pontos de coleta e filtrar de acordo<br />
com o item desejado, ao selecionar o ponto o usuário pode mandar um email ou entrar em contato por Whatsapp.</p>

## Layout



## :blue_book: Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [React native](https://reactnative.dev/)
- [React navigation](https://reactnavigation.org/)
- [React native Maps](https://github.com/react-native-community/react-native-maps)
- [React-native-picker-select](https://github.com/lawnstarter/react-native-picker-select)
- [React Native Gesture Handler](https://software-mansion.github.io/react-native-gesture-handler/)
- [Axios](https://github.com/axios/axios)
- [Expo](https://expo.io/)
- [Expo icons](https://docs.expo.io/guides/icons/)
- [Expo-location](https://docs.expo.io/versions/latest/sdk/location/)
- [Expo-constants](hhttps://docs.expo.io/versions/latest/sdk/constants/)
- [Expo-mail-composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
- [Expo-fonts e google fonts](https://github.com/expo/google-fonts)

# :floppy_disk: Backend

<p>O backend foi criado utilzando nodeJS e Express em TypeSCript</p>
<p>Esse backend é responsável por disponivilizar rotas de cadastros de pontos de <br />
coleta, upload de imagens e listagem com filtros.</p>



## :computer: Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [Celebrate, Joi](https://github.com/arb/celebrate)
- [Knex](http://knexjs.org/)
- [SQlite](https://www.sqlite.org/index.html)

## :books: Guia de instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) >= v10.20

### Expo:
- [IOS](https://apps.apple.com/app/apple-store/id982107779)
- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Como executar

- Clone o repositório,
- Execute ```npm install``` para instalar as dependências dentro de cada pasta

- Para utilizar a API do backend, entre na pasta server e rode ```npm run dev```

- Para abrir a versão web, entre na pasta web e rode ```npm start```

- Para ver a versão mobile, instale o expo no seu celular e tenha <br />
certeza de que está conectado na mesma rede que seu PC
- Para iniciar o aplicativo mobile rode ```expo start```
- Agora abra o aplicativo expo no celular e leia o QR code que aparece na janela aberta
