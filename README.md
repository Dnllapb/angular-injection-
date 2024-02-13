Laboratorio: Inyección de Dependencias en Angular
Vamos a crear un proyecto usando el AngularCLI ng new angular-injection
Creamos un servicio llamado show con AngularCLI ng g service show
Creamos un primer componente ng g component one
Creamos el segundo componente ng g component two
Vamos a nuestro servicio ShowService y agregamos el siguiente código:
@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() { }

  private listItems = [{
    label: 'first',
    value: 1
  },
  {
    label: 'second',
    value: 2
  },
  {
    label: 'third',
    value: 3
  }];

  get items () {
    return this.listItems;
  }
}

Como podemos observar tenemos un servicio que nos devuelve una lista de objetos con clave y valor que usaremos para mostrar en nuestros componentes. Este servicio está siendo inyectado directamente en el root con el providedIn: 'root'
Ahora inyectamos el servicio como dependencia de nuestros dos componentes en el constructor de cada uno de ellos, y creamos un método para obtener los items del servicio
 constructor(private showService: ShowService) { }

 get items() {
    return this.showService.items;
 }
Ahora agregamos al template del componente one el siguiente *ngFor
<h1>Componente 1</h1>

<div *ngFor="let item of items">
  <span>{{ item.label }}:</span><span>{{ item.value }}</span>
</div>
Hacemos lo mismo para el componente 2
<h1>Componente 2</h1>

<div *ngFor="let item of items">
  <span>{{ item.label }}:</span><span>{{ item.value }}</span>
</div>
Vamos a nuestro app.component.html y agregamos la referencia a nuestros dos componentes
<app-one></app-one>
<app-two></app-two>
Corremos el código con un ng-serve
