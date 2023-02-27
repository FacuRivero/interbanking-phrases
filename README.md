# Frases
Una aplicación desarrollada en React que permite agregar frases y mostrarlas en forma de "cards" dentro de una matriz. Además, se puede eliminar una frase y buscar dentro de las frases agregadas y filtrar las "cards" que contengan el texto buscado. La aplicación utiliza TypeScript y cuenta con una prueba unitaria.

## Requisitos
Para ejecutar la aplicación en local, necesitarás tener instalado **node y npm**.

## Instalación
Clona el repositorio desde GitHub
```bash
git clone https://github.com/FacuRivero/interbanking-phrases.git
```

Instala las dependencias del proyecto
```bash
npm install
```

Ejecuta la aplicación
```bash
npm start
```

La aplicación estará disponible en **http://localhost:3000**.

## Uso
### Agregar una frase
Para agregar una frase, ingresa el texto en el campo "Add phrase" y presiona el botón "Add" o la tecla "Enter". La frase agregada se mostrará en una nueva "card" dentro de la matriz.

### Buscar una frase
Para buscar una frase dentro de las agregadas, ingresa el texto en el campo "Search phrases". La matriz se actualizará mostrando solo las "cards" que contienen el texto buscado.

### Eliminar una frase
Para eliminar una frase, haz clic en el ícono de la "X" que se encuentra en la parte superior derecha de la "card" correspondiente.

## Pruebas unitarias
La aplicación cuenta con 5 pruebas unitarias que evaluan el funcionamiento de los componentes. Para ejecutar la prueba, usa el siguiente comando:

```bash
npm run test
```

## Tecnologías utilizadas
React
TypeScript
Material-UI

## Autor
Facundo Rivero