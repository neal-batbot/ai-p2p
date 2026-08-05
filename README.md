# AI-P2P

AI-P2P is a Spring Boot application for AI-assisted Pin2Pin semiconductor replacement analysis. Upload two datasheets to generate a structured comparison report, retain analysis history, and build an internal chip library.

## Stack

- Java 17, Spring Boot 3.4, Thymeleaf, jQuery
- MyBatis and MySQL 8
- OpenAI-compatible LLM providers, configured through environment variables
- Firecrawl `pdf-inspector` with Apache PDFBox fallback
- Embedded doocs/md editor at `/md/`

## Local setup

1. Install Java 17, Node.js 20, and MySQL 8.
2. Initialize the database with `chip.sql`.
3. Copy `.env.example` values into your shell or create the ignored `src/main/resources/application-local.yml` for local overrides.
4. Install the PDF inspector dependency:

   ```bash
   cd scripts/pdf-inspector
   npm ci
   ```

5. Start the application:

   ```bash
   ./mvnw spring-boot:run
   ```

The default application port is `80`. Runtime uploads are written to `./files/` and are intentionally excluded from Git.

## Verification

```bash
./mvnw test
./mvnw -DskipTests package
```

## Configuration

Never commit credentials. `application.yml` reads all sensitive values from environment variables:

- `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`
- `RSA_PUBLIC_KEY`, `RSA_PRIVATE_KEY`
- `DEEPSEEK_API_KEY`, `VOLC_API_KEY`, `GPT_API_KEY`
- `ALIPAY_APP_ID`, `ALIPAY_PRIVATE_KEY`, `ALIPAY_PUBLIC_KEY`

See `.env.example` for the complete list.

## Delivery workflow

- Work in `feature/*` or `fix/*` branches.
- Open a pull request against `main`.
- GitHub Actions runs Java compilation, tests, package build, and PDF inspector checks.
- Merge only after the required `Build and verify` check succeeds.
- Tag a release with `v*` to publish the JAR as a GitHub Release asset.

The release workflow creates a deployable artifact. Server deployment is intentionally not enabled until deployment credentials and an environment target are supplied as GitHub Actions secrets.
