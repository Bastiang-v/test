# frontend_cotizador_colectivo

## Features

## Tech

- React "18.2.0"
- NextJS "14.1.4"
- TypeScript "5.4.3"
- Tailwind CSS "3.4.1"

**Este proyecto usa el administrador de paquetes pnpm, por lo que las dependencias deben agregarse de la siguiente manera:**

| Command           | Meaning                 |
| ----------------- | ----------------------- |
| pnpm add {pkg}    | Save to dependencies    |
| pnpm add -D {pkg} | Save to devDependencies |

Los módulos se descargan con:

```sh
pnpm install
```

## Installation

Para lanzar el microservicio es necesario configurar la siguientes variables de entorno

#### Required environment variables

| Nombre variable | Valor por defecto |
| --------------- | ----------------- |
| XXXXX           | XXXXX             |

```sh
npx next
```

## CI/CD

El pipeline se encuentra modularizado en los siguientes [repositorios](https://gitlab.com/BICE_Vida/shared/pipelines/-/tree/master/pipeline-spa?ref_type=heads). Esta basado en [GitHubFlow](https://bicevida.atlassian.net/wiki/spaces/LCDZ/pages/2950299649/Githubflow+Semantic+Release).

Incorpora Semantic Release: leer [documentación](https://bicevida.atlassian.net/wiki/spaces/LCDZ/pages/2752774165/C+mo+utilizar+el+Semantic+Release+Autom+tico) para utilizar correctamente los Conventional Commits y aprovechar la herramienta que genera versiones automáticas.

Si el equipo necesita la herramienta de calidad de código para su nivel de madurez de Devops, descomentar todas las líneas del archivo .gitlab-ci.yml referentes a Sonar y escribir un mail a bv_equipodevops@bicevida.cl para solicitar la vinculación del repositorio a Sonarcloud.
