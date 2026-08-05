# Repository Guidelines

## Project Structure & Module Organization
- `src/main/java/com/babata/chip/` contains Spring Boot application code (controllers, services, repositories, config, interceptors).
- `src/main/resources/templates/` holds Thymeleaf HTML views; `src/main/resources/static/` holds CSS/JS/images/fonts.
- `src/main/resources/mappers/` stores MyBatis XML mappings; mapper interfaces live in `src/main/java/com/babata/chip/repository/mapper/`.
- `src/test/java/` contains JUnit tests (currently `ChipApplicationTests`).
- `files/` is used for runtime uploads (album/raw, album/compress, pdf, etc.); treat it as environment data, not source.

## Build, Test, and Development Commands
- `./mvnw spring-boot:run` starts the app locally (default port `80` in `application.yml`).
- `./mvnw test` runs the test suite via Spring Boot’s test starter.
- `./mvnw -DskipTests package` builds the jar without running tests.
- `./mvnw mybatis-generator:generate` regenerates MyBatis models/mappers using `src/main/resources/generatorConfig.xml`.

## Coding Style & Naming Conventions
- Java 17, Spring Boot 3.4.x. Use 4 spaces for indentation and standard Java naming.
- Keep layer packages aligned: `controller`, `service`, `service/impl`, `repository`, `repository/entity`.
- MyBatis XML files are named `*Mapper.xml`, with matching `*Mapper.java` interfaces.
- Thymeleaf templates are named by page (e.g., `login.html`, `chip.html`); static assets are grouped under `static/`.

## Testing Guidelines
- Place tests in `src/test/java/` with names ending in `*Test` or `*Tests`.
- For DB-dependent tests, use a local MySQL instance configured in `application.yml`, or add a dedicated test profile.

## Commit & Pull Request Guidelines
- This checkout has no git history, so use a clear imperative subject line (e.g., `Add payment callback handler`).
- In PRs, include a short description, linked issue (if any), and screenshots for changes in `templates/` or `static/`.

## Security & Configuration Tips
- `src/main/resources/application.yml` contains DB credentials, RSA keys, and Alipay settings. Avoid committing real secrets; prefer env overrides or profiles.
- Review upload paths and allowed file types under the `files` section before changing file handling logic.

[9 tools called]

[2 tools called]

## 📁 AI-P2P 项目代码目录结构

基于Spring Boot的智能芯片替代分析平台，采用经典的分层架构设计。

### 🎯 项目根目录结构

```
AI-P2P-master/
├── 📄 pom.xml                 # Maven项目配置
├── 📄 mvnw & mvnw.cmd        # Maven包装器脚本
├── 📄 AGENTS.md              # 项目开发指南
├── 📄 chip.sql               # 数据库初始化脚本
├── 📁 src/                   # 源代码目录
├── 📁 files/                 # 运行时文件目录
└── 📄 .gitignore            # Git忽略文件
```

---

## 🔧 Java源代码结构 (`src/main/java/com/babata/chip/`)

### 🚀 应用入口
```
ChipApplication.java              # Spring Boot主启动类
```

### ⚙️ 配置层 (`config/`)
```
config/
├── AlbumFileAllowedTypeConfig.java     # 相册文件类型配置
├── AvatarFileAllowedTypeConfig.java    # 头像文件类型配置
├── BlogWebMvcConfigurer.java           # Web MVC配置
└── RSAConfig.java                      # RSA密钥配置
```

### 🌐 控制层 (`controller/`)
```
controller/
├── AboutController.java                # 关于页面控制器
├── ArticleController.java              # 文章页面控制器
├── ChipController.java                 # 芯片页面控制器
├── IndexController.java                # 首页控制器
├── LoginController.java                # 登录控制器
├── ManageController.java               # 管理后台控制器
├── PaymentController.java              # 支付页面控制器
├── SearchController.java               # 搜索控制器
└── rest/                              # REST API控制器
    ├── AdminRestController.java        # 管理员API
    ├── AlipayRestController.java       # 支付宝API
    ├── ArticleRestController.java      # 文章API
    ├── ChipRestController.java         # 芯片API
    └── FileRestController.java         # 文件API
```

### 📦 服务层 (`service/`)
```
service/
├── ArticleService.java                 # 文章业务服务接口
├── ChipAnalyzeService.java             # 芯片分析服务接口
├── ChipCompareRecordService.java       # 对比记录服务接口
├── PaymentService.java                 # 支付服务接口
├── UserBalanceService.java             # 用户余额服务接口
└── impl/                              # 服务实现类
    ├── ArticleServiceImpl.java         # 文章服务实现
    └── ChipCompareRecordServiceImpl.java # 对比记录服务实现
```

### 💾 数据访问层 (`repository/`)
```
repository/
├── AdminRepository.java                # 管理员数据访问
├── ArticleRepository.java              # 文章数据访问
├── BalanceChangeLogRepository.java     # 余额变动日志
├── ChipCompareRecordRepository.java    # 芯片对比记录
├── ChipRepository.java                 # 芯片数据访问
├── LoginRepository.java                # 登录记录
├── MessageRepository.java              # 消息数据访问
├── PaymentOrderRepository.java         # 支付订单
├── Pin2PinRepository.java              # Pin-to-Pin替代关系
├── SessionRepository.java              # 会话数据访问
├── UserBalanceRepository.java          # 用户余额
├── VisitorRepository.java              # 访客统计
├── mapper/                            # MyBatis映射接口
│   ├── AdminMapper.java
│   ├── ArticleMapper.java
│   ├── BalanceChangeLogMapper.java
│   ├── BomMapper.java
│   ├── ChipCompareRecordMapper.java
│   ├── ChipMapper.java
│   ├── LoginMapper.java
│   ├── MajorSegmentMapper.java
│   ├── MessageMapper.java
│   ├── PaymentOrderMapper.java
│   ├── Pin2PinMapper.java
│   ├── SessionMapper.java
│   ├── SubSegmentMapper.java
│   ├── UserBalanceMapper.java
│   └── VisitorMapper.java
└── entity/                           # MyBatis实体类
    ├── AdminDO.java & AdminDOExample.java
    ├── ArticleDO.java & ArticleDOExample.java
    ├── BalanceChangeLogDO.java & BalanceChangeLogDOExample.java
    ├── BomDO.java & BomDOExample.java
    ├── ChipCompareRecordDO.java & ChipCompareRecordDOExample.java
    ├── ChipDO.java & ChipDOExample.java
    ├── LoginDO.java & LoginDOExample.java
    ├── MajorSegmentDO.java & MajorSegmentDOExample.java
    ├── MessageDO.java & MessageDOExample.java
    ├── PaymentOrderDO.java & PaymentOrderDOExample.java
    ├── Pin2PinDO.java & Pin2PinDOExample.java
    ├── SessionDO.java & SessionDOExample.java
    ├── SubSegmentDO.java & SubSegmentDOExample.java
    ├── UserBalanceDO.java & UserBalanceDOExample.java
    └── VisitorDO.java & VisitorDOExample.java
```

### 🧰 公共组件 (`common/`)
```
common/
├── dto/                              # 数据传输对象
│   ├── ArticleDTO.java               # 文章DTO
│   ├── ChipCompareRecordDTO.java     # 芯片对比记录DTO
│   ├── ChipDetailDTO.java            # 芯片详情DTO
│   └── ChipSearchDTO.java            # 芯片搜索DTO
├── enums/                            # 枚举定义
│   ├── ArticleStatusEnum.java        # 文章状态枚举
│   ├── AuthorityEnum.java            # 权限枚举
│   ├── BalanceChangeTypeEnum.java    # 余额变动类型
│   ├── ChipCompareStatusEnum.java    # 芯片对比状态
│   ├── ErrorCodeEnum.java            # 错误码枚举
│   ├── OrderStatusEnum.java          # 订单状态枚举
│   ├── PermissionEnum.java           # 权限枚举
│   └── StatusEnum.java               # 通用状态枚举
├── request/                          # 请求对象
│   └── ChipAnalyzeRequest.java       # 芯片分析请求
├── response/                         # 响应对象
│   ├── BaseResponse.java             # 基础响应
│   ├── deepseek/                     # DeepSeek响应相关
│   ├── EditorMDResponse.java         # 编辑器响应
│   ├── LlmStreamResponse.java        # LLM流式响应
│   └── PageResponse.java             # 分页响应
├── result/                           # 结果对象
│   └── ChipPdfResult.java            # 芯片PDF结果
├── UserCache.java                    # 用户缓存工具
└── UserContext.java                  # 用户上下文
```

### 🔄 数据转换器 (`converter/`)
```
converter/
├── ArticleConverter.java             # 文章数据转换器
└── ChipCompareRecordConverter.java   # 芯片对比记录转换器
```

### ⚠️ 异常处理 (`exception/`)
```
exception/
└── GlobalExceptionHandler.java       # 全局异常处理器
```

### 🔌 拦截器 (`interceptor/`)
```
interceptor/
├── GlobalHandlerInterceptor.java     # 全局处理器拦截器
└── LoginHandlerInterceptor.java      # 登录拦截器
```

### 🛠️ 工具类 (`util/`)
```
util/
├── DateUtil.java                     # 日期工具类
├── FileUtil.java                     # 文件工具类
├── IpUtil.java                       # IP工具类
├── MarkdownUtil.java                 # Markdown工具类
├── PDFProcessor.java                 # PDF处理器
└── ResponseUtil.java                 # 响应工具类
```

---

## 📋 资源文件结构 (`src/main/resources/`)

### ⚙️ 配置文件
```
application.yml                       # Spring Boot主配置文件
generatorConfig.xml                   # MyBatis代码生成器配置
llm.txt                              # LLM相关配置
robot.txt                            # 爬虫协议文件
```

### 🗄️ MyBatis映射文件 (`mappers/`)
```
mappers/
├── AdminMapper.xml
├── ArticleMapper.xml
├── BalanceChangeLogMapper.xml
├── BomMapper.xml
├── ChipCompareRecordMapper.xml
├── ChipMapper.xml
├── LoginMapper.xml
├── MajorSegmentMapper.xml
├── MessageMapper.xml
├── PaymentOrderMapper.xml
├── Pin2PinMapper.xml
├── SessionMapper.xml
├── SubSegmentMapper.xml
├── UserBalanceMapper.xml
└── VisitorMapper.xml
```

### 🎨 前端静态资源 (`static/`)
```
static/
├── admin/                           # 管理后台样式
│   └── css/
├── css/                             # 全局样式
│   ├── chip/                        # 芯片相关样式
│   ├── fonts/                       # 字体文件
│   └── images/                      # 图片资源
├── fonts/                           # 字体库
├── images/                          # 全局图片
├── img/                             # 轮播图等
├── js/                              # JavaScript文件
│   ├── chip/                        # 芯片相关脚本
│   └── lib/                         # 第三方库
│       └── codemirror/              # CodeMirror编辑器
└── wallpaper/                       # 壁纸图片
```

### 📄 Thymeleaf模板 (`templates/`)
```
templates/
├── 404.html                         # 404错误页面
├── 500.html                         # 500错误页面
├── about.html                       # 关于页面
├── article.html                     # 文章详情页
├── blog_list.html                   # 博客列表页
├── chat.html                        # 聊天页面
├── chip.html                        # 芯片详情页
├── chip_compare.html                # 芯片对比页(管理员)
├── chip_compare_user.html           # 芯片对比页(用户)
├── index.html                       # 首页
├── login.html                       # 登录页面
├── manage.html                      # 管理后台
├── payment.html                     # 支付页面
├── search.html                      # 搜索页面
├── test.html                        # 测试页面
└── deprecated/                      # 弃用的模板文件
```

---

## 📊 测试代码结构 (`src/test/java/`)

```
src/test/
└── java/
    └── com/
        └── babata/
            └── chip/
                └── ChipApplicationTests.java   # 应用启动测试
```

---

## 📁 运行时文件目录 (`files/`)

```
files/
├── album/                           # 相册文件
│   ├── compress/                    # 压缩后的图片
│   └── raw/                         # 原始图片
├── pdf/                             # PDF文档
├── public/                          # 公共文件
├── private/                         # 私有文件
├── avatar/                          # 用户头像
├── temp/                            # 临时文件
└── wechat/                          # 微信相关文件
```

---

## 🏗️ 架构分层总结

- **表现层**: `Controller` + `Templates` + `Static`
- **业务层**: `Service` + `ServiceImpl`
- **数据层**: `Repository` + `Mapper` + `Entity`
- **公共层**: `Common` + `Util` + `Config`
- **支撑层**: `Exception` + `Interceptor` + `Converter`

这个项目采用了典型的Spring Boot三层架构，清晰的分包结构便于维护和扩展，每一层职责明确，代码组织规范。
## 🎯 AI-P2P 智能芯片替代分析平台

> 一个基于AI大模型的芯片替代分析工具，帮助电子工程师快速找到芯片的Pin-to-Pin替代方案

### 📊 项目概览

**项目类型**: Spring Boot Web应用  
**核心功能**: 芯片替代分析、AI对话、内容管理、支付系统  
**技术栈**: Java 17 + Spring Boot 3.4 + MySQL + Thymeleaf + AI集成

---

## 🏗️ 系统架构

```
┌─────────────────────────────────────────────────────────────┐
│                    🌐 Web层 (Controller)                      │
│  ┌─────────────────┬─────────────────┬─────────────────┐     │
│  │  ChipController │ArticleController│PaymentController│     │
│  │  (芯片分析)     │ (博客系统)      │ (支付系统)      │     │
│  └─────────────────┴─────────────────┴─────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                                 │
┌─────────────────────────────────────────────────────────────┐
│                   🔄 服务层 (Service)                        │
│  ┌─────────────────┬─────────────────┬─────────────────┐     │
│  │ChipAnalyzeService│ArticleService  │PaymentService   │     │
│  │ (AI分析核心)    │ (内容管理)      │ (余额管理)      │     │
│  └─────────────────┴─────────────────┴─────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                                 │
┌─────────────────────────────────────────────────────────────┐
│                  🗄️ 数据层 (Repository)                     │
│  ┌─────────────────┬─────────────────┬─────────────────┐     │
│  │  ChipRepository │ArticleRepository│PaymentRepository│     │
│  │  (芯片数据)     │ (文章数据)      │ (订单数据)      │     │
│  └─────────────────┴─────────────────┴─────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                                 │
┌─────────────────────────────────────────────────────────────┐
│                     💾 MySQL 数据库                          │
│  chip_compare_record, chip, bom, pin2pin, user_balance...    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 核心功能模块

### 1. 🤖 芯片替代分析 (Chip Analysis)
**核心功能**: AI驱动的芯片替代分析
- **多模型支持**: GPT-4o, DeepSeek官方/火山引擎
- **实时流式响应**: SSE (Server-Sent Events) 技术
- **多格式输出**: Markdown, JSON, Excel
- **智能分析**: 基于芯片规格书进行Pin-to-Pin对比

**API接口**:
```java
// 芯片搜索
GET /api/chip/search?keyword={partNumber}

// 芯片详情
GET /api/chip/detail?id={chipId}

// 替代分析 (流式)
POST /api/chip/compare/analyze

// 分析记录
GET /api/chip/compare/records
```

### 2. 💰 支付与余额系统 (Payment System)
**功能特性**:
- 支付宝集成 (RSA2签名)
- 用户余额管理
- 消费记录追踪
- 充值/消费双向记录

**核心表结构**:
```sql
payment_order     -- 支付订单
user_balance      -- 用户余额  
balance_change_log -- 余额变动日志
```

### 3. 📝 内容管理系统 (CMS)
**功能模块**:
- Markdown博客系统
- 用户权限管理
- 访客统计分析
- 文件上传管理

### 4. 🔐 用户与权限系统
**用户角色**:
- **超级管理员** (Authority: 1): 完整系统权限
- **普通用户** (Authority: 3): 基础功能权限
- **测试用户**: 预设测试账号

---

## 📊 数据模型设计

### 核心实体关系图

```
User (Admin) ────┬─── ChipCompareRecord (1:N)
                 │
                 ├─── UserBalance (1:1)
                 │
                 ├─── PaymentOrder (1:N)
                 │
                 └─── Session (1:N) ─── Message (1:N)

Chip ────┬─── Pin2Pin (1:N)
         │
         ├─── Bom (1:N)
         │
         └─── MajorSegment (N:1) ─── SubSegment (1:N)

Article ──── Visitor (1:N)
```

### 关键数据表

| 表名 | 说明 | 关键字段 |
|------|------|----------|
| `chip` | 芯片信息 | manufacturer, part_number, parameter |
| `chip_compare_record` | 分析记录 | user_id, chip_models, result, cost |
| `pin2pin` | 替代关系 | chip_id, supplier, part_number_p2p |
| `user_balance` | 用户余额 | user_id, total_balance, charge_type |
| `payment_order` | 支付订单 | order_id, amount, status, alipay_trade_no |
| `session/message` | 聊天系统 | title, content, role, model |

---

## 🔧 技术栈详情

### 后端技术栈
```xml
<!-- 核心框架 -->
Spring Boot 3.4.3
MyBatis 3.0.4
MySQL Connector/J 8.0.33

<!-- Web框架 -->
Thymeleaf (模板引擎)
Spring MVC (REST API)

<!-- 工具库 -->
Apache Commons Lang3
FastJSON
Jsoup (HTML解析)
```

### 前端集成
```html
<!-- UI框架 -->
Bootstrap 5.0
Font Awesome 6.4
Editor.md (Markdown编辑器)

<!-- 特效库 -->
Particle.js (粒子效果)
ToTop.js (回到顶部)
```

### AI模型集成
- **OpenAI GPT-4o**: 高精度分析
- **DeepSeek**: 成本优化选择
- **火山引擎**: 国内加速服务

### 文件处理
- **图片处理**: Thumbnailator, TwelveMonkeys
- **PDF处理**: Apache PDFBox 2.0.30
- **文件上传**: Spring Multipart (最大512MB)

---

## 🚀 部署与配置

### 环境要求
- **Java**: 17+
- **MySQL**: 8.0+
- **端口**: 80 (生产环境)

### 配置文件结构
```yaml
spring:
  datasource: # MySQL连接配置
  multipart: # 文件上传配置
  thymeleaf: # 模板引擎配置

files: # 文件路径配置
  path:
    album-raw-path: ./files/album/raw/
    pdf-file-path: ./files/pdf/

alipay: # 支付宝配置
  app-id: "2021006103635843"
  private-key: # PKCS8格式私钥
  gateway-url: # 生产/沙箱环境切换

rsa: # 系统RSA密钥对
  public: "MFwwDQYJKoZIhvc..."
  private: "MIIBVAIBADANBgkq..."
```

### 启动命令
```bash
# 本地开发
./mvnw spring-boot:run

# 生产构建
./mvnw clean package -DskipTests

# MyBatis代码生成
./mvnw mybatis-generator:generate
```

---

## 🎨 前端界面特色

### 设计风格
- **科技感**: 深色主题 + 电路板纹理背景
- **响应式**: 移动端适配设计
- **现代化**: 渐变色彩 + 毛玻璃效果

### 核心页面
- **首页** (`/`): 产品展示与导航
- **芯片对比** (`/chip/compare`): AI分析界面
- **管理后台** (`/manage`): 内容管理系统
- **支付中心** (`/payment`): 充值界面

---

## 🔒 安全与权限

### 访问控制
- **RSA加密**: API密钥安全存储
- **用户会话**: 基于Cookie的认证
- **权限分级**: 管理员/普通用户权限隔离

### 数据安全
- **SQL注入防护**: MyBatis预编译
- **XSS防护**: 输入过滤和转义
- **文件上传安全**: 类型和大小限制

---

## 📈 性能优化

### 缓存策略
- **用户上下文**: ThreadLocal缓存
- **数据库索引**: 关键查询字段索引
- **连接池**: HikariCP (Spring Boot默认)

### 并发处理
- **异步分析**: CompletableFuture处理AI请求
- **流式响应**: SSE避免长时间阻塞
- **频率限制**: 非管理员用户30秒间隔限制

---

## 🔄 CI/CD 流程

```bash
# 代码检查
./mvnw compile

# 单元测试  
./mvnw test

# 集成测试
./mvnw verify

# 部署包构建
./mvnw package -DskipTests
```

---

这个项目是一个功能完整的SaaS应用，专注于解决电子工程师在芯片选型和替代分析中的痛点，通过AI技术大幅提升工作效率。系统架构清晰，技术选型成熟，适合快速迭代和扩展。