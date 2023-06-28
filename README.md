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

3 - No terminao do metro bundle, pressione a tecla 'd' para exibir um menu de opções. No menu que aparecer, selecione a opção 'debug' para abrir uma janela em seu navegador e depurar seu app como se fosse uma aplicação web, tendo acesso aos elementos, console, source e network.

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

Git Graph

# Modelo de check list de desenvolvimento
# Descrição
De forma suscinta, clara e objetiva, descreva o requisito implementado.

## Informativo
1. Princípios clean code (https://www.hostgator.com.br/blog/clean-code-o-que-e/)
2. Princípios SOLID (https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)

## Checklist (Desenvolvedor)
1. [ ] Entendimento de Us realizado
2. [ ] Confirmação do entendimento da US realizado
3. [ ] Existe roteiro de testes
4. [ ] Desenvolvimento da US realizado em branch de feature
5. [ ] Desenvolvimento realizado de acordo com critérios de aceitação
6. [ ] Código de manipulação de dados (não react states) estão nos hooks
7. [ ] Foram implementados testes unitários para elementos testáveis (hooks, utils)
8. [ ] Existem testes unitários desenvolvidos para todos os possíveis fluxos/cenários
9. [ ] Existem testes unitários simulando cenários de sucesso
10. [ ] Existem testes unitários simulando cenários de falha/exceção (se aplicável)
11. [ ] Testes unitários possuem verificações (Asserts) coerentes/relevantes
12. [ ] Código fonte atende os critérios do Sonar (Cobertura, codesmells, bugs...)
13. [ ] Validação em dupla realizada em ambiente local
14. [ ] Validação de design realizada em ambiente local
15. [ ] Validação em dupla realizada em ambiente remoto
16. [ ] Validação de design realizada em ambiente remoto
17. [ ] Estória de usuário validada no Chrome
18. [ ] Estória de usuário validada no Firefox
19. [ ] Todos os itens do check list dos avaliadores foram atendidos

## Checklist (Avaliadores do PR)
1. [ ] PR aprovado por mais de 1 (um) avaliador
2. [ ] PR aberto do branch de origem para o branch de destino correto
3. [ ] Comentários do PR resolvidos
4. [ ] Padrão de desenvolvimento adotado pelo time foi seguido
5. [ ] Funções ECMA Script escritas no padrão camelCase
6. [ ] Métodos públicos escritos em PascalCase e privados escritos em camelCase
7. [ ] Princípios SOLID aplicados corretamente
8. [ ] Princípios de clean code aplicados corretamente
9. [ ] Todos os itens do check list do desenvolvedor foram atendidos
