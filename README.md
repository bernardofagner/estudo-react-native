# estudo-react-native
Um repositório contendo material relacionado a desenvolvimento mobile utilizando React Native.

# Tutorial para realizar o setup para Windows disponível em:
https://www.aluiziodeveloper.com.br/react-native-no-windows-ambiente-de-desenvolvimento/


# Observações:

1 Faltou criar a variável de ambiente de sistema JAVA_HOME e o valor dela, pois não identifiquei o local da instalação do openjdk 11

Instalar Intel Haxm: https://github.com/intel/haxm/releases/tag/v7.7.1

# Documentação React Native:
https://reactnative.dev/docs/typescript

# Execução do projeto
Execução do projeto via scripts no package.json

Scripts:

01 - < npm run start >: Iniciar o Metro Bundler, responsável pelo empacotamento da aplicação, no modo debug.

02 - < npm run android > || < yarn android >: Inicia a execução da aplicação. A partir desteponto será possível abrí-la em um emulador android ou em um dispositivo físico realizando a conexão via leitura de QR code para uma interação wireless ou via conexão USB.

# Debugging

1 - Inicializar/carregar o emulador, via Android Studio (recomendação pessoal) ou pelo Script 02;
2 - Executar o Metro Bundler para ter acesso às opções de desenvolvedor, conforme Script 01;

No terminao do metro bundle, pressione a tecla 'd' para exibir um menu de opções. No menu que aparecer, selecione a opção 'debug' para abrir uma janela em seu navegador e depurar seu app como se fosse uma aplicação web, tendo acesso aos elementos, console, source e network.

# Informativo

O arquivo 'index.js', na raiz do diretório do projeto, é responsável por registrar o componente principal App.tsx para que ele seja executado ao iniciar o sistema.


# Troubleshooting

Erro ao executar o app pela primeira vez: É necessário aceitar as licenças do SDK. Solução disponível em: https://www.kindacode.com/article/react-native-please-accept-all-necessary-android-sdk-licenses/#Using_Android_Studio

ou

https://droidrant.com/how-do-i-fix-unknown-license-on-android/

# Extensões recomendadas

ESLint

Editor config

Git Lens

Material Icon Theme

Back & Forth

Rainbow Brackets

Jest Runner