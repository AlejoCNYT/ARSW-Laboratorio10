### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/es-es/free/students/). Al hacerlo usted contará con $100 USD para gastar durante 12 meses.
Antes de iniciar con el laboratorio, revise la siguiente documentación sobre las [Azure Functions](https://www.c-sharpcorner.com/article/an-overview-of-azure-functions/)

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

![imagen](https://github.com/user-attachments/assets/a9ed4515-b6dc-4a59-8cec-8b33da552604)

![imagen](https://github.com/user-attachments/assets/7416a0da-1d89-4078-b74e-fe2b5d8a0e8e)

![imagen](https://github.com/user-attachments/assets/59d59a27-5138-4805-acb7-7a2035084fe0)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

![imagen](https://github.com/user-attachments/assets/f0c6ccb7-128f-4c02-b96d-48bd4608480f)

![imagen](https://github.com/user-attachments/assets/3eec6786-e2af-47b0-a9d7-9b41e03aa637)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

![imagen](https://github.com/user-attachments/assets/2746f415-af93-40b9-a613-f2b0056d61e0)

![imagen](https://github.com/user-attachments/assets/ff0a38e4-f943-46dc-becb-2f57788905c6)

![imagen](https://github.com/user-attachments/assets/8f8d25d8-6a1b-492b-ac76-d8c0158472ed)

![imagen](https://github.com/user-attachments/assets/cddd704a-dc70-48d9-b1db-dd0c42ce9724)

![imagen](https://github.com/user-attachments/assets/5bec231c-e356-4369-a603-abf011dc6628)

![imagen](https://github.com/user-attachments/assets/2c698508-93b5-4879-8c98-d9ddfaae953c)


4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

![imagen](https://github.com/user-attachments/assets/c0ad2ff8-9a6d-4ffc-b59a-4687f5dc62b1)

![imagen](https://github.com/user-attachments/assets/be5544dd-435e-485e-8780-7a1af5df8e84)

![imagen](https://github.com/user-attachments/assets/5269702b-bbdb-4ee2-8f14-5406a64bb5f3)

![imagen](https://github.com/user-attachments/assets/052f55a1-7c90-4003-a11a-f520b6f03876)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.

`newman run Fibonacci.postman_collection.json -n 10 --reporters cli,json --reporter-json-export report.json`

![imagen](https://github.com/user-attachments/assets/7a885631-6709-4814-a85e-f4d54d677eff)


6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

![imagen](https://github.com/user-attachments/assets/01a2b7e1-f4e2-4bb2-8188-d2d74397d781)

![imagen](https://github.com/user-attachments/assets/9eef6d91-2606-47e3-80bb-f5d3f2f3a059)

![imagen](https://github.com/user-attachments/assets/c0c4c6be-72a8-42db-b3d6-334bf9f016d5)

Después de 10 minutos

![imagen](https://github.com/user-attachments/assets/4f3ebbbf-9cc5-4ad7-a7f7-b4f498459628)

![imagen](https://github.com/user-attachments/assets/4b70d4b5-e989-4f07-a1ec-ac3c8728669e)

![imagen](https://github.com/user-attachments/assets/6f92784e-083b-4cc8-a251-a723b0567bbf)

![imagen](https://github.com/user-attachments/assets/16fdffa1-3fbb-4a32-920a-eb9501942948)

Tiende a disminuir cuando no se usa. Es estable para valores similares y toma picos en valores determinados. Puede fallar, en algunos casos tras bajo uso.


**Preguntas**

* ¿Qué es un Azure Function?
- Es un servicio de computación serverless usado para ejecutar código (funciones) en respuesta a eventos (triggers) sin gestionar infraestructura. Su ejecución es basada en eventos (HTTP, colas, BD, etc), posee escalado autonático bajo demanda y soporte para múltiples lenguajes (C#, JS, Python, etc).

* ¿Qué es serverless?
- Es un modelo de ejecución en la nube caracterizado por esclado automático (sin configuación manual), no administración de servidores (el proveedor maneja la infraestructura) y pago por uso.

* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
  - Es un entorno de ejecución que determina versión de lenguaje (Node.js 14, .NET 6, Python 3.9, etc), compatibilidad con bilbiotecas y SDKs y características disponibles (bindings y triggers). Su uso implica elección de runtime obsoleto (con features no disponibles) y, posible cambio de runtime después de la creación de la Function App.
Implicaciones de seleccionarlo:
  
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
- Esto se hace ya que almacena datos de configuración de funciones y claves de autorización, soporta triggers y bindings de colas, blobs y tablas con uso de Storage, gestión de escalado y coordinación de instancias múltiples en el plan de consumo.
  
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
![imagen](https://github.com/user-attachments/assets/ba4f42f3-c87f-4a9f-89f4-c95d66769fe1)
  
* ¿Por qué la memoization falla o no funciona de forma correcta?
- La memorización puede perder efectividad debido a _Cold starts_ (Si la instancia se apaga por inactividad, la caché en memoria o memo se pierde), _Múltiples instancias_ (cada instancia tiene su propia caché y no se comparte entre ellas) y, el _tiiempo de vida_ (las instancias se reciclan periódicamente entre 20-30 minutos sin uso). Para evitar esto, se puede usar Azure Cache for Redis o Cosmos DB con caché persistente.
  
* ¿Cómo funciona el sistema de facturación de las Function App?
- Se factura por número de ejecuciones y tiempo de ejecución (GB-segundos). En el plan Premium/App Service es según el Costo fijo por VM y las ejecuciones.
