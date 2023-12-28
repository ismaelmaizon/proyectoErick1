import path from 'path';
import { fileURLToPath } from 'url';


/*
El error que estás viendo indica que estás utilizando el módulo ES (ECMAScript) en Node.js y 
estás intentando acceder a __dirname, que es una característica específica de los módulos CommonJS.

En el entorno de módulos ES, __dirname no está definido como en CommonJS. La variable __dirname es 
específica de CommonJS y no está disponible en módulos ES.

Una solución a este problema sería utilizar import.meta.url en lugar de __dirname si estás 
trabajando con módulos ES. Sin embargo, import.meta.url devuelve la URL del módulo actual, y su 
uso puede requerir algunos ajustes en la forma en que construyes rutas.
*/ 
 
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);


export default __dirname;



// Ahora puedes usar __dirname para construir rutas absolutas en tu módulo ES.
