# PortfolioWeb (Front End)

FrontEnd de mi portfolio para el curso de desarrollo web full stack argentina programa

# Plataforma de desarrollo: Angular

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7DsZgLizBt_wk8ndOAPzQAHaGs%26pid%3DApi&f=1&ipt=7d4101ef2247568b4f56ede31842731a4442cd801bce87be5c46af35338e559b&ipo=images)

Se utilizo como plataforma para el desarrollo del FrontEnd, Angular. Utilizando html, scss y typescript para la composicion de todo el codigo.

## Caracteristicas

### Login y SignUp

Mediante el uso del backend: https://github.com/MrUse77/Portfolio-BackEnd.git y peticiones http se logro hacer un registro de sesion e inicio de sesion dentro de la pagina para poder:

- Añandir proyectos, experiencias laborales y estudios:
  - Ejemplo:
  
        urlApi = "https://portfolio-fwdy.onrender.com";
        CrearProyectos(form: Proyectos){
          let direccion = this.urlApi+"/proyectos/crear"
          return this.http.post(direccion, form,{responseType: 'text'});
        }

- Edicion de esos proyectos, experiencias laborales y estudios:
  - Ejemplo:
                       
          urlApi = "https://portfolio-fwdy.onrender.com";
          EditarProyecto=async(id:number, Proyectos:Proyectos)=>{
            console.log('id:', id);
            console.log('proyectos:', Proyectos);
            const response = await fetch(`${this.urlApi}/proyectos/editar/${id}`,{
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(Proyectos),
            });
          if (!response.ok) {
          throw new Error('Error al actualizar los datos');
          }

### Visualizacion del contenido

Al igual que en el Login y SignUp su pudo lograr la obtencion de esos elementos y su informacion para poder mostrarlos en pantalla:

- Peticion HTTP (Ejemplo):

      urlApi = "https://portfolio-fwdy.onrender.com";
      DatosProyectos(){

  return this.http.get<Proyectos[]>(this.urlApi+"/proyectos/traer");
  }

- En HTML: Se utilizo:

      *ngFor="let pro of pro"

Se utiliza esa directiva para que por cada elemento que se obtenga, la etiqueta en donde esta la directiva y todo el contenido de la etiqueta, se pueda imprimir en pantalla

### Diseño responsive

Se ah hecho un diseño responsive de la aplicacion para que, al utilizar distintas resoluciones y/o dispositivos, el contenido se pueda ver perfectamente
Para esto se utilizo la opcion `@Media` del scss para poder adaptar los estilos y reorganizar diferentes partes de la aplicacion para que sea lo mas comodo a la vista del usuario

### Menu

Se realizo un menu en donde se encuentran las opciones:

- Contacto
  - Mail
  - Whatsapp
- Redes
  - Instagram
  - Facebook
  - Github
  - Linkedin
- Educacion
- Experiencia
- Proyectos
- Registrarse
- Inicio de sesion

### Habilidades

Se realizo un apartado donde se pueden ver las habilidades para reconocer cuales son las aptitudes, ademas se utilizo `(mouseover)` para que a la hora de pasar por encima con el mouse (pulsando sobre la habilidad en el celular), poder usar una funcion y mostrar cual es el conocimiento que se tiene de dicha habilidad

# Imagenes

# Cosas a implementar

Cosas que se implementaran en un futuro que por falta de tiempo y estudios no se llegaron a realizar todavia

## Edicion y Creacion

A la hora del inicio de sesion no se distingue entre un usuario comun y un administrador, esto aunque tambien es algo que tambien se debe implementar desde el BackEnd, se tiene que configurar el Front para poder saber cuando mostrar las opciones de editar y crear

## Imagenes dentro de los elementos

Aunque ya hay imagenes utilizandose en la aplicacion, en cada elemento de educacion, proyecto y experiencia no hay imagen/logo de cada uno. Aunque es un pequeño detalle, tambien le da una mejor apariencia a la pagina que un texto plano.

## Creacion y edicion de habilidades

En las habilidades no hay forma de crearlas o editarlas, es algo que aunque pueda no ser importante, para la persona que crea el portfolio, siempre es mucho mas facil y gasta menos tiempo poder editarlo desde la propia pagina en vez de escribir el codigo de cada una. Para este caso se tendra que agregar una nueva tabla a la base de datos y hacer cambios en el backend para poder utilizar esta funcion en las habilidades.
