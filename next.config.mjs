/** @type {import('next').NextConfig} */

const commonsEnvs = {
  HOST: "host",
};
//envs

const envs = {
  local: {
    ...commonsEnvs,
    AZURE_CLIENT_ID: "5a57f435-2956-4f22-857a-d8969c7476be",
    AZURE_REDIRECT_URI: "http://localhost:3000",
    PUBLIC_ENV: "local",
    BASE_URL: "http://localhost:3000",
  },

  dev: {
    ...commonsEnvs,
    AZURE_CLIENT_ID: "5a57f435-2956-4f22-857a-d8969c7476be",
    AZURE_REDIRECT_URI: "https://www.cotizadorcolectivos.dev.bicevida.cl",
    PUBLIC_ENV: "dev",
    BASE_URL: "https://www.cotizadorcolectivos.dev.bicevida.cl/",
  },
  stg: {
    ...commonsEnvs,
    AZURE_CLIENT_ID: "28255c8f-cf31-4c50-b552-b0ea22d7c420",
    AZURE_REDIRECT_URI: "https://www.cotizadorcolectivos.qa.bicevida.cl",
    PUBLIC_ENV: "qa",
    BASE_URL: "https://www.cotizadorcolectivos.qa.bicevida.cl/",
  },
  pro: {
    ...commonsEnvs,
    AZURE_CLIENT_ID: "d49196b9-b3ed-4220-8f5d-d3ccb6f43e1b",
    AZURE_REDIRECT_URI: "https://cotizadorcolectivos.bicevida.cl",
    PUBLIC_ENV: "prod",
    BASE_URL: "https://cotizadorcolectivos.bicevida.cl/",
  },
};

const selectedEnv = envs[process.env.STAGE || "local"];

const nextConfig = {
  transpilePackages: [
    "@bice_vida/ds-components-button",
    "@bice_vida/ds-components-avatar-cat",
    "@bice_vida/ds-components-input",
    "@bice_vida/ds-components-dropdown",
  ],
  output: "export",
  reactStrictMode: false,
  env: {
    ...selectedEnv,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
