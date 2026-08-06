#!/usr/bin/env bash
# 生产环境启动脚本
# 用法：SPRING_PROFILES_ACTIVE=prod scripts/run-prod.sh
# 生产全部敏感配置必须来自环境变量，缺失即退出。
set -euo pipefail
cd "$(dirname "$0")/.."

required=(DB_URL DB_USERNAME DB_PASSWORD RSA_PUBLIC_KEY RSA_PRIVATE_KEY DEEPSEEK_API_KEY ALIPAY_APP_ID ALIPAY_PRIVATE_KEY ALIPAY_PUBLIC_KEY ALIPAY_NOTIFY_URL ALIPAY_RETURN_URL)
missing=0
for v in "${required[@]}"; do
  if [[ -z "${!v:-}" ]]; then echo "✗ 缺少环境变量: ${v}"; missing=1; fi
done
[[ "$missing" == "1" ]] && { echo "生产环境配置不完整，拒绝启动。"; exit 1; }

export SPRING_PROFILES_ACTIVE="${SPRING_PROFILES_ACTIVE:-prod}"
export SERVER_PORT="${SERVER_PORT:-80}"

echo "▶ 启动生产环境 (profile=${SPRING_PROFILES_ACTIVE}, port=${SERVER_PORT})"
exec ./mvnw spring-boot:run
