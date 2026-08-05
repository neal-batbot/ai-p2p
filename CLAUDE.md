# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CHIP (Chip Hardware Information Platform) is a Spring Boot web application for AI-powered chip datasheet analysis, comparison, and Pin2Pin replacement recommendations. The application processes PDF datasheets through LLM APIs to generate structured comparison reports.

## Build & Development Commands

### Maven Commands
```bash
# Build the project
./mvnw clean package

# Run the application (default port: 80)
./mvnw spring-boot:run

# Generate MyBatis code from database schema
./mvnw mybatis-generator:generate

# Run tests
./mvnw test
```

### Database Setup
- MySQL database named `chip` on localhost:3306
- UTF-8 charset with Asia/Shanghai timezone
- Connection configured in `src/main/resources/application.yml`

### MyBatis Generator
- Configuration: `src/main/resources/generatorConfig.xml`
- Generates entity classes, mappers, and Example classes from database schema
- Run with `./mvnw mybatis-generator:generate`

## Architecture

### Layer Structure
```
Controller Layer → Service Layer → Repository Layer → Database
     ↓                 ↓                  ↓
   DTOs           Business Logic    MyBatis Mappers
                                  + JPA Repositories
```

### Key Components

**Controllers:**
- `IndexController`, `AboutController`, `SearchController` - Public pages
- `ChipController` - Chip analysis and comparison UI
- `ManageController` - Admin management interface
- `LoginController` - Authentication
- `PaymentController` - Payment pages
- REST controllers in `controller/rest/` - API endpoints

**Services:**
- `ChipAnalyzeService` - AI-powered chip analysis using LLM APIs
- `SessionService` - Chat session management
- `FileService` - Multi-type file upload with permission controls
- `PaymentService` - Alipay integration
- `AdminService`, `ArticleService`, etc.

**Data Access:**
- MyBatis mappers in `repository/mapper/` - Complex queries with XML SQL
- JPA repositories in `repository/` - Simple CRUD operations
- Entity classes in `repository/entity/` - Database models (auto-generated)

### AI Integration Architecture

The application uses a streaming LLM pipeline for chip analysis:

```
PDF Upload → PDFProcessor (text extraction) → Prompt Building → LLM API (DeepSeek/GPT-4o)
     → SSE Streaming Response → Analysis Record Storage
```

**Key Files:**
- `util/PDFProcessor.java` - Extracts text and images from PDFs using Apache PDFBox
- `service/ChipAnalyzeService.java` - Manages LLM API calls and streaming responses
- `common/response/deepseek/` - DeepSeek API response models
- SSE (Server-Sent Events) for real-time streaming to frontend

**LLM Configuration:**
- Primary: DeepSeek API (official and Volces engine)
- Fallback: GPT-4o via third-party service
- User-based rate limiting for API quota management

### Data Model

**Core Tables:**
- `chip` - Chip master data with manufacturer and parameters
- `chip_compare_record` - Analysis results and history
- `pin2pin` - Pin-to-pin replacement mappings
- `session`/`message` - Chat session storage
- `admin`/`login` - User authentication (role-based: Super/Admin/User)
- `payment_order`/`user_balance` - Payment and billing
- `article` - Blog/content management
- `visitor` - IP-based visitor tracking

### File Upload System

Multiple upload paths with different permission levels (configured in `application.yml`):
- `public-file-path` - Public files (downloadable by all)
- `private-file-path` - Private files (admin only)
- `avatar-file-path` - User avatars
- `album-raw-path`/`album-compress-path` - Image album storage
- `pdf-file-path` - PDF datasheets for analysis
- `temp-file-path` - Temporary uploads

Allowed file types and permissions are configurable per path.

### Frontend Architecture

- **Thymeleaf templates** in `src/main/resources/templates/` - Server-side rendering
- **Static files** in `src/main/resources/static/` - CSS, JS, images
- **jQuery + Bootstrap** - UI framework
- **EditorMD** - Markdown editor for blog content
- Custom chip comparison interfaces with streaming SSE support

### Security & Authentication

- RSA encryption for sensitive data (keys in `application.yml`)
- Role-based access control: Super, Admin, User
- User context caching for performance (`UserCache` class)
- File upload restrictions by type and size
- IP-based visitor tracking

## Configuration

### Application Configuration
`src/main/resources/application.yml` contains:
- Database connection (MySQL)
- Server port (default: 80)
- File upload paths and permissions
- RSA public/private keys
- Alipay payment credentials (app-id, keys, gateway URLs)
- SSL/TLS configuration (commented out, can be enabled)

### Important Security Notes
- Database password and API keys are currently hardcoded in `application.yml`
- These should be externalized to environment variables for production
- RSA keys for encryption are also in configuration files

## Development Patterns

1. **DTO Pattern**: Clean data transfer between layers (DTOs in `common/dto/`)
2. **Converter Pattern**: Entity-to-DTO transformations in `converter/`
3. **Service Interface + Implementation**: Clear service contracts
4. **Repository Pattern**: MyBatis for complex queries, JPA for simple CRUD
5. **Response Wrapper**: `BaseResponse` for standardized API responses
6. **Async Processing**: `CompletableFuture` for non-blocking operations

## Code Generation

MyBatis Generator creates:
- Entity classes with `DO` suffix (e.g., `ChipDO`)
- Mapper interfaces (e.g., `ChipMapper`)
- Example classes for complex queries (e.g., `ChipDOExample`)

**Do NOT manually modify generated files** - they will be overwritten on regeneration.

## Testing

- Test classes mirror main package structure
- Uses Spring Boot Test and MyBatis Spring Boot Test
- Run with `./mvnw test`

## Key Business Logic

### Chip Analysis Flow
1. User uploads PDF datasheet via frontend
2. `PDFProcessor` extracts text content from PDF
3. `ChipAnalyzeService` builds prompt with extracted data
4. Request sent to LLM API (DeepSeek or GPT-4o)
5. Response streamed back via SSE for real-time display
6. Analysis record saved to `chip_compare_record` table
7. User's API quota decremented

### Pin2Pin Comparison
- Searches `pin2pin` table for replacement mappings
- Generates structured 6-section comparison report
- Includes: basic info, key parameters, functional differences, package differences, application scenarios, conclusion

### Payment Flow
- User initiates payment via Alipay
- `PaymentService` creates order in `payment_order` table
- Redirects to Alipay gateway
- Alipay sends async notification to `notify-url`
- User balance updated in `user_balance` table
- Transaction logged in `balance_change_log` table
