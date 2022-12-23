# excli (express command line interface)

this packge is a cli tool to make your development with express easer<br>

## installation
currently we use github packges to host this packge so if you didn't add it already you need to add github registry with this command :<br>
```bash
npm config set @mohamedhoss123:registry=https://npm.pkg.github.com/
```
if you aleardy added it install excli golbaly with this command : <br>

```bash
npm i -g @mohamedhoss123/excli
```

## docs
| Command | Description |
| --- | --- |
| new | create new project files and setup dependencies |
| gen | generate (model \| controller \| middleware \| router) |

### new command
to create new project type :
```bash
    excli new <project name>
```
the `<project name>` will be replaced with your project name and this name will be added to package.json file

example :
 ```bash
    excli new my-app
```
after that continue in process and choce any dependencies you want .<br>
when you choose the orm any orm you choose will effect the ```gen mo ``` command when you want to generate 
new model from cli becouse orm are deffren so we made a tempalte for each orm this cli support
and the orm you choosed is stored in ```excli.json``` file so be carefull and don't delete this file

### generate command
| Command | Description |
| --- | --- |
| co | controller |
| mo | model |
| mi | middleware |

#### how to generate
to generete controller you will write in your terminal somting link this 
```bash
    excli gen co mycontroller
```
controller will be generated in controllers directory<br>
if you want to craete a folder inside the controllers directory and then add controller in that folder you can easly do this <br>
```bash
    excli gen co anyfolder/mycontroller
```
excli will handel to create that folder for you .<br>
the same way you generated new controller you will do the same with models and middlewares <br>
and thy will be generated in thir own directory

some examples : <br>
```bash
    excli gen mo users
```
this will create `user.model.js` file inside models directory
```bash
    excli gen mi auth
```
this will create `auth.middleware.js` file inside middlewares directory
