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

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

**Preguntas**

* ¿Qué es un Azure Function?
* ¿Qué es serverless?
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?
* Informe
