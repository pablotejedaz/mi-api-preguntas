# API Pública de Preguntas sobre Economía Circular ♻️

Este proyecto consiste en una API RESTful desarrollada con **Node.js** y **Express**. Su objetivo principal es servir un conjunto de datos estructurados en formato JSON que contiene preguntas tipo test sobre conceptos de Economía Circular (reciclaje, upcycling, obsolescencia, etc.), diseñada para ser consumida por terceros desde internet.

## Estado Actual del Despliegue (Incidencia Conocida)

**Estado:** Funcionando en Local, Error en Producción (Vercel)

Actualmente, el proyecto presenta una incidencia técnica en el entorno de despliegue de **Vercel**.

* **Comportamiento en Local:** La API funciona correctamente al ejecutarse en `localhost`, sirviendo el JSON de preguntas sin errores.
* **Comportamiento en Producción:** Al acceder a la URL pública, la plataforma devuelve un error **404 NOT_FOUND**.
* **Diagnóstico:** He intentado solucionar mediante la configuración de reescritura de rutas en `vercel.json` y la adaptación a funciones *serverless* dentro del directorio `/api`, pero el error sigue pasando, impidiendo la visualización de los datos en la nube.

---

## Uso de la API (Documentación Teórica)

Una vez resuelta la incidencia de despliegue, la API está diseñada para ser pública y accesible desde cualquier origen (CORS habilitado).

### URL Base
`https://mi-api-preguntas-pablotejedazs-projects.vercel.app`

### Endpoints Disponibles

 **GET** | `/api/questions` | Devuelve el listado completo de preguntas y respuestas en formato JSON. |

### Ejemplo de Consumo (JavaScript / Fetch)

```javascript
fetch('[https://mi-api-preguntas-pablotejedazs-projects.vercel.app/api/questions](https://mi-api-preguntas-pablotejedazs-projects.vercel.app/api/questions)')
  .then(response => response.json())
  .then(data => {
    console.log("Datos recibidos:", data);
  })
  .catch(error => console.error("Error al conectar con la API:", error));