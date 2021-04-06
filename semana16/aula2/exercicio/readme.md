# Criptografia e User Roles

## 1 - a)  O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
R: O round é a "força" da no encriptação. O salt é o resultado dela. E o valor recomendado é 12.

## 2 - a)Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
R: temos que modificar primeiro o endpoint de sign up pois os dados já estão lá no banco e não queremos que os proximos cadastro salvem a senha sem a criptografia.

## d)  No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
R: Não nesse momento ainda não.