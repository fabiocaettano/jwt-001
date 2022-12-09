# Autenticação com JWT

## Preparar Ambiente


## JWT

<p>Autenticação com JWT utiliza duas etapas.</p>
<p>Na primeira  é gerado um token com o recurso **jwt.sign**.</p>
<p>E para checar se ocorreu autentincação é utilizado o recurso o **jwt.verify**.</p>

### Sign

<p>Exemplo de um código:</p>

``` js
jwt.sign({id: user.id},'segredo',{ expiresIn: '1m' });                
```

<p>O primeiro parâmetro é o payload, onde pode ser passado valores que poderão ser captados.</p>

<p>O segundo parâmetro informamos um segredo, que será utilizado para gerar o token.</p>

<p>E no terceiro parâmetro é configurado o tempo de expiração do token.</p>

### Verify

<p>Um usuário se identificar em algum aplicativo, o procecimento <b>jwt.sign</b> é chamado para gerar o token.</p>

<p>Quando um usuário for executar algum procedimento que necessita de autenticação, é necessário validar o token.</p>

<p>Para validar o token é necessário utilizar o <b>jwt.verify</b>, ele recebe 02 parâmetros.</p>
<p>O primeiro parâmetro é o token, que é captado do Headers Http</p>.
<p>No segundo parâmetro é informado a palavra secreta.</p>
<p>No exemplo abaixo a variável <b>decode</b> é instanciada por <b>jwt.verify</b></p>.
<p>Nesta variável é onde podemos captar os valores do payload</p>.

``` js
const theToken = req.headers.authorization.split(' ')[1];
const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
console.log(decoded.id)
```