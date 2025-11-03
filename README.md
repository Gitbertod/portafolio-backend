# 🧠 API de Gestión de Usuarios y blog para mi portafolio

API RESTful desarrollada con **Node.js**, **Express** y **MongoDB**, que permite **gestionar usuarios y posts, roles y autenticación con JWT**.  
Cada usuario cuenta con un **código QR único** y una **foto de perfil editable**.  


---

## 🚀 Características principales

- 🔐 **Autenticación con JWT** (login y verificación de token)  
- 👥 **CRUD de usuarios y posts**: crear, leer, actualizar y eliminar  
- 🧩 **Asignación de roles** (admin, user, etc.)  
- 🖼️ **Gestión de fotos**: subir, actualizar y eliminar  
- ⚙️ **Validación de datos y manejo de errores**  
- 🌐 **Endpoints RESTful bien estructurados**

---

## 🧰 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) | Entorno de ejecución para JavaScript |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white) | Framework web para Node.js |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) | Base de datos NoSQL |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white) | ODM para MongoDB |
| ![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white) | Autenticación basada en tokens |
| ![dotenv](https://img.shields.io/badge/dotenv-000000?logo=dotenv&logoColor=white) | Manejo de variables de entorno |
| ![QR Code](https://img.shields.io/badge/QR_Code_Generator-4285F4?logo=qrcode&logoColor=white) | Generación de códigos QR |

## Clona el repositorio
git clone https://github.com/Gitbertod/portafolio-backend

## Instala las dependencias
npm install

## Ejecuta el proyecto
npm start

## Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

<pre>PORT=4000 MONGODB_URI=mongodb+srv://&lt;usuario&gt;:&lt;contraseña&gt;@cluster.mongodb.net/tuDB JWT_SECRET=tu_clave_secreta CLOUDINARY_URL=tu_url_cloudinary (si usas almacenamiento en la nube) </pre>



## Autor

Gilberto Díaz
Frontend & Backend Developer enfocado en crear experiencias digitales de alto impacto.
📍 Lima, Perú


