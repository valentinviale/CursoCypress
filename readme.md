URL de la página 'https://automationteststore.com'

Para correr los test de regression 'npm run cypress:run:regression:test'

"scripts": {
    "start": "node config/index.js",
    "cypress:run:regressions:test": "npx cypress run -e baseUrl=https://automationteststore.com/ -s cypress/integration/regression/*/*.spec.js",
    "cypress:run:regressions:test:mobile": "npx cypress run -c viewportWidth=375,viewportHeight=667,userAgent=\"Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X)\" -e baseUrl=https://automationteststore.com/ -s cypress/integration/regression/*/*.spec.js",
    "cypress:run:smoke:test": "npx cypress run -e baseUrl=https://automationteststore.com/ -s cypress/integration/smoke/*.spec.js",
    "cypress:run:smoke:test:mobile": "npx cypress run -c viewportWidth=375,viewportHeight=667,userAgent=\"Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X)\" -e baseUrl=https://automationteststore.com/ -s cypress/integration/smoke/*.spec.js",
}
