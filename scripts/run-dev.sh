#!/usr/bin/env bash
# 本地开发环境启动脚本
# 用法：scripts/run-dev.sh
set -euo pipefail
cd "$(dirname "$0")/.."

: "${DB_PASSWORD:?请设置 DB_PASSWORD（或提供 application-local.yml）}"
: "${DEEPSEEK_API_KEY:?请设置 DEEPSEEK_API_KEY}"

export SPRING_PROFILES_ACTIVE="${SPRING_PROFILES_ACTIVE:-dev}"
export SERVER_PORT="${SERVER_PORT:-8080}"

echo "▶ 启动开发环境 (profile=${SPRING_PROFILES_ACTIVE}, port=${SERVER_PORT})"
exec ./mvnw spring-boot:run
