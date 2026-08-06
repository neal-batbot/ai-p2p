-- Safe migration for installations created before the payment module.
-- Uses IF NOT EXISTS and does not modify existing records.

CREATE TABLE IF NOT EXISTS payment_order
(
    id              INT                 NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_id        VARCHAR(512) UNIQUE NOT NULL,
    user_id         INT                 NOT NULL,
    amount          DECIMAL(10, 2)      NOT NULL,
    status          TINYINT(4)          NOT NULL COMMENT '0: pending, 1: success, 2: failed, 3: closed, 4: timeout',
    alipay_trade_no VARCHAR(512),
    product_name    VARCHAR(200),
    notify_time     DATETIME,
    create_time     DATETIME            NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modify_time     DATETIME            NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY idx_order_id (order_id),
    KEY idx_user_id (user_id),
    KEY idx_alipay_trade_no (alipay_trade_no)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS user_balance
(
    id            INT           NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id       INT           NOT NULL,
    total_balance DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    total_cnt     INT           NOT NULL DEFAULT 0,
    charge_type   TINYINT(4)    NOT NULL DEFAULT 0,
    version       INT           NOT NULL DEFAULT 0,
    create_time   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modify_time   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS balance_change_log
(
    id             INT           NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id        INT           NOT NULL,
    order_id       VARCHAR(512)  NOT NULL,
    change_num     DECIMAL(10, 2) NOT NULL,
    type           TINYINT(4)    NOT NULL,
    remark         VARCHAR(512),
    before_balance DECIMAL(10, 2),
    after_balance  DECIMAL(10, 2),
    create_time    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modify_time    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY idx_user_id (user_id),
    KEY idx_order_id (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
