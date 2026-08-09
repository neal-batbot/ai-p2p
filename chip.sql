/*
 babata.com
 */
CREATE
DATABASE chip CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE
chip;

CREATE TABLE IF NOT EXISTS `meeting_booking`
(
    `id`          BIGINT       NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name`        VARCHAR(128) NOT NULL,
    `email`       VARCHAR(256) NOT NULL,
    `company`     VARCHAR(256)          DEFAULT NULL,
    `topic`       TEXT         NOT NULL,
    `meeting_at`  DATETIME     NOT NULL,
    `status`      VARCHAR(32)  NOT NULL DEFAULT 'PENDING',
    `create_time` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modify_time` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY `idx_meeting_at` (`meeting_at`),
    KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `chip_compare_record`;
CREATE TABLE `chip_compare_record`
(
    `id`                      INT           NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `user_id`                 INT           NOT NULL,
    `first_chip_part_number`  VARCHAR(256)  NOT NULL,
    `second_chip_part_number` VARCHAR(256)  NOT NULL,
    `file_list`               VARCHAR(1024) NOT NULL,
    `status`                  TINYINT       NOT NULL,
    `prompt`                  MEDIUMTEXT    NOT NULL,
    `api_supplier`            VARCHAR(64)            DEFAULT NULL,
    `model`                   VARCHAR(64)   NOT NULL,
    `input_tokens`            INT                    DEFAULT NULL,
    `output_tokens`           INT                    DEFAULT NULL,
    `duration`                INT                    DEFAULT NULL,
    `cost`                    INT                    DEFAULT NULL,
    `result`                  MEDIUMTEXT             DEFAULT NULL,
    `create_time`             DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modify_time`             DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY                       `idx_user_id` (user_id),
    KEY                       `idx_first_chip_part_number` (first_chip_part_number),
    KEY                       `idx_second_chip_part_number` (second_chip_part_number)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `chip`;
CREATE TABLE `chip`
(
    `id`           BIGINT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `manufacturer` VARCHAR(256)          DEFAULT NULL COMMENT '制造商（STMicro、Panasonic等）',
    `part_number`  VARCHAR(256) NOT NULL COMMENT '芯片型号',
    `description`  VARCHAR(512)          DEFAULT NULL COMMENT '描述',
    `sheet_url`    VARCHAR(512)          DEFAULT NULL COMMENT '芯片规格书链接',
    `parameter`    MEDIUMTEXT COMMENT '详细参数json',
    `create_time`  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `modify_time`  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
    KEY            `idx_part_number`(part_number)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `major_segment`;
CREATE TABLE `major_segment`
(
    `id`          BIGINT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name`        VARCHAR(256)      DEFAULT NULL COMMENT '大类名称',
    `description` VARCHAR(256)      DEFAULT NULL COMMENT '描述',
    `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `modify_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `sub_segment`;
CREATE TABLE `sub_segment`
(
    `id`               BIGINT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name`             VARCHAR(256)      DEFAULT NULL COMMENT '子类名称',
    `major_segment_id` BIGINT(20) NOT NULL COMMENT '对应大类id',
    `description`      VARCHAR(256)      DEFAULT NULL COMMENT '描述',
    `create_time`      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `modify_time`      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `bom`;
CREATE TABLE `bom`
(
    `id`            BIGINT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `manufacturer`  VARCHAR(256)          DEFAULT NULL COMMENT '制造商（STMicro、Panasonic等）',
    `category_name` VARCHAR(256)          DEFAULT NULL COMMENT '类别名称（MCU、AMP、LDO等）',
    `chip_id`       BIGINT(20) NOT NULL COMMENT '芯片id',
    `part_number`   VARCHAR(256) NOT NULL COMMENT '芯片型号',
    `quantity`      INT          NOT NULL COMMENT '数量',
    `unit_price`    BIGINT       NOT NULL COMMENT '单价',
    `total_price`   BIGINT       NOT NULL COMMENT '总价',
    `create_time`   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `modify_time`   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
    KEY             `idx_chip_id`(chip_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `pin2pin`;
CREATE TABLE `pin2pin`
(
    `id`              BIGINT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `chip_id`         BIGINT(20) NOT NULL COMMENT '芯片id',
    `supplier`        VARCHAR(256)          DEFAULT NULL COMMENT '供应商',
    `part_number`     VARCHAR(256) NOT NULL COMMENT '芯片型号',
    `supplier_p2p`    VARCHAR(256)          DEFAULT NULL COMMENT 'p2p芯片供应商',
    `part_number_p2p` VARCHAR(256) NOT NULL COMMENT 'p2p芯片型号',
    `create_time`     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `modify_time`     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
    KEY               `idx_chip_id`(chip_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `session`;
CREATE TABLE `session`
(
    `id`          BIGINT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `user_id`     BIGINT(20) NOT NULL,
    `title`       VARCHAR(256) NOT NULL,
    `uuid`        VARCHAR(256)          DEFAULT NULL,
    `create_time` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modify_time` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `end_time`    DATETIME              DEFAULT NULL,
    KEY           `idx_user_id` (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`
(
    `id`          BIGINT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `session_id`  BIGINT(20) NOT NULL,
    `sender_id`   BIGINT(20) NOT NULL,
    `content`     MEDIUMTEXT  NOT NULL,
    `role`        VARCHAR(64) NOT NULL,
    `model`       VARCHAR(64) NOT NULL,
    `status`      TINYINT(4) NOT NULL,
    `sort`        INT                  DEFAULT NULL,
    `file`        VARCHAR(4096)        DEFAULT NULL,
    `data`        VARCHAR(4096)        DEFAULT NULL,
    `create_time` DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modify_time` DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY           `idx_session_id` (session_id),
    KEY           `idx_sender_id`(sender_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`
(
    `id`            INT         NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `username`      VARCHAR(64) NOT NULL,
    `password`      VARCHAR(64) NOT NULL,
    `nickname`      VARCHAR(64) NOT NULL,
    `sex`           CHAR(1)     NOT NULL,
    `authority`     TINYINT(4) NOT NULL,
    `avatar`        VARCHAR(64)          DEFAULT NULL,
    `register_date` DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `idx_username` (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO admin(username, password, nickname, sex, authority, register_date, avatar)
VALUES ("admin", "123456", "Admin", "女", 1, CURRENT_TIMESTAMP, "head.jfif");
INSERT INTO admin(username, password, nickname, sex, authority, register_date, avatar)
VALUES ("neal", "Barbot123", "Neal", "男", 1, CURRENT_TIMESTAMP, "head.jfif");
INSERT INTO admin(username, password, nickname, sex, authority, register_date, avatar)
VALUES ("test1", "123456", "test1", "男", 3, CURRENT_TIMESTAMP, "head.jfif");
INSERT INTO admin (username, password, nickname, sex, authority, register_date, avatar)
VALUES ('user_c_001@test.com', 'Ctest001!!', 'user_c_001', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_002@test.com', 'Ctest002@@', 'user_c_002', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_003@test.com', 'Ctest003##', 'user_c_003', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_004@test.com', 'Ctest004$$', 'user_c_004', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_005@test.com', 'Ctest005%%', 'user_c_005', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_006@test.com', 'C123456!!!', 'user_c_006', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_007@test.com', 'Cabc123@@@', 'user_c_007', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_008@test.com', 'Cuser001##', 'user_c_008', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_009@test.com', 'Cpass001$$', 'user_c_009', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_010@test.com', 'Ctest001%^^', 'user_c_010', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_011@test.com', 'Cend001^^^', 'user_c_011', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_012@test.com', 'Cend002&&&', 'user_c_012', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_013@test.com', 'Cend003***', 'user_c_013', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_014@test.com', 'Cend004+++', 'user_c_014', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_015@test.com', 'Cend005%%%', 'user_c_015', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_016@test.com', 'TestUserC01@', 'user_c_016', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_017@test.com', 'TestUserC02$$', 'user_c_017', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_018@test.com', 'TestUserC03##', 'user_c_018', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_019@test.com', 'TestUserC04!!', 'user_c_019', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_020@test.com', 'TestUserC05%%', 'user_c_020', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_021@test.com', 'Cuser_021@@@', 'user_c_021', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_022@test.com', 'Cuser_022$$$', 'user_c_022', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_023@test.com', 'Cuser_023%%%', 'user_c_023', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_024@test.com', 'Cuser_024^^^', 'user_c_024', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('user_c_025@test.com', 'Cuser_025!!!', 'user_c_025', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_001', 'BAdmin001@2024#', 'company_b_001', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_001_user01', 'BUser01@24##', 'company_b_001_user01', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_001_user02', 'BUser02@24$$', 'company_b_001_user02', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_001_user03', 'BUser03@24%%', 'company_b_001_user03', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_002', 'BAdmin002@24#', 'company_b_002', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_002_user01', 'BEmp01@@24!!', 'company_b_002_user01', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_002_user02', 'BEmp02##24$$', 'company_b_002_user02', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_003', 'BAdmin003@2024', 'company_b_003', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_003_user01', 'BEmp001$$$', 'company_b_003_user01', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_003_user02', 'BEmp002%%%', 'company_b_003_user02', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_004', 'BAdmin004#24', 'company_b_004', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_004_user01', 'Emp_B004_01@@', 'company_b_004_user01', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_004_user02', 'Emp_B004_02##', 'company_b_004_user02', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_005', 'BAdmin005@24', 'company_b_005', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_005_user01', 'UserB005_01$$', 'company_b_005_user01', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_005_user02', 'UserB005_02%%', 'company_b_005_user02', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_006', 'B006_Admin@24#', 'company_b_006', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_006_user01', 'B006_Emp01@@@', 'company_b_006_user01', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_006_user02', 'B006_Emp02$$$', 'company_b_006_user02', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_007', 'B7_Admin#2024', 'company_b_007', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_007_user01', 'B7_User01##', 'company_b_007_user01', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_007_user02', 'B7_User02$$', 'company_b_007_user02', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_008', 'B8_Admin$$$', 'company_b_008', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_008_user01', 'B8_Emp01%%', 'company_b_008_user01', '男', 3, CURRENT_TIMESTAMP, 'head.jfif'),
       ('company_b_008_user02', 'B8_Emp02@@@', 'company_b_008_user02', '男', 3, CURRENT_TIMESTAMP, 'head.jfif');

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login`
(
    `id`         INT         NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `username`   VARCHAR(64) NOT NULL,
    `password`   VARCHAR(64) NOT NULL,
    `login_flag` TINYINT(4) NOT NULL,
    `ip`         VARCHAR(20) NOT NULL,
    `location`   VARCHAR(256)         DEFAULT NULL,
    `login_date` DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `platform`   VARCHAR(256)         DEFAULT NULL,
    `browser`    VARCHAR(256)         DEFAULT NULL,
    `version`    VARCHAR(256)         DEFAULT NULL,
    KEY          `idx_username` (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `visitor`;
CREATE TABLE `visitor`
(
    `id`         INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `ip`         VARCHAR(20)  NOT NULL,
    `uri`        VARCHAR(512) NOT NULL DEFAULT '/',
    `user_id`    INT                   DEFAULT NULL,
    `visit_date` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `platform`   VARCHAR(256)          DEFAULT NULL,
    `browser`    VARCHAR(256)          DEFAULT NULL,
    `version`    VARCHAR(256)          DEFAULT NULL,
    `location`   VARCHAR(256)          DEFAULT NULL,
    KEY          `idx_ip` (ip),
    KEY          `idx_user_id` (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `article`;
CREATE TABLE article
(
    id           INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title        VARCHAR(128) NOT NULL,
    en_title     VARCHAR(128) UNIQUE,
    subtitle     VARCHAR(128),
    tag          VARCHAR(64)  NOT NULL,
    content_md   MEDIUMTEXT   NOT NULL,
    content_html MEDIUMTEXT            DEFAULT NULL,
    content_text MEDIUMTEXT            DEFAULT NULL,
    author       VARCHAR(64)  NOT NULL,
    author_id    INT          NOT NULL,
    status       TINYINT(4)   NOT NULL COMMENT '博客状态: 0已发布 1草稿 2删除',
    permission   TINYINT(4)   NOT NULL COMMENT '权限：0公开 1私有',
    cover_image  VARCHAR(256)          DEFAULT NULL,
    read_count   INT          NOT NULL,
    create_time  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modify_time  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY          `idx_title` (title),
    KEY          `idx_en_title` (en_title),
    KEY          `idx_tag` (tag),
    KEY          `idx_read_count` (read_count)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `payment_order`;
CREATE TABLE `payment_order`
(
    `id`              INT                 NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `order_id`        VARCHAR(512) UNIQUE NOT NULL,
    `user_id`         INT                 NOT NULL,
    `amount`          DECIMAL(10, 2)      NOT NULL,
    `status`          TINYINT(4)   NOT NULL COMMENT '支付状态: 0:WAIT_PAY:待支付 1:SUCCESS:支付成功 2:FAILED:支付失败 3:CLOSED:已关闭 4:TIMEOUT:已超时',
    `alipay_trade_no` VARCHAR(512),
    `product_name`    VARCHAR(200) COMMENT '商品名称',
    `notify_time`     DATETIME COMMENT '回调通知时间',
    `create_time`     DATETIME            NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modify_time`     DATETIME            NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY               `idx_order_id` (order_id),
    KEY               `idx_user_id` (user_id),
    KEY               `idx_alipay_trade_no` (alipay_trade_no)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `user_balance`;
CREATE TABLE user_balance
(
    id            INT      NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id       INT      NOT NULL COMMENT '用户ID',
    total_balance DECIMAL(10, 2)    DEFAULT 0.00 NOT NULL COMMENT '总余额',
    total_cnt     INT               DEFAULT 0 COMMENT '总次数',
    charge_type   TINYINT(4)     DEFAULT 0 COMMENT '收费方式: 0:按金额收费 1:按次收费',
    version       INT               DEFAULT 0 COMMENT '乐观锁版本',
    create_time   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modify_time   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY           idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `balance_change_log`;
CREATE TABLE balance_change_log
(
    id             INT            NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id        INT            NOT NULL COMMENT '用户ID',
    order_id       VARCHAR(512)   NOT NULL COMMENT '关联订单号',
    change_num     DECIMAL(10, 2) NOT NULL COMMENT '变动数',
    type           TINYINT(4)   NOT NULL COMMENT '变动类型: 0:充值 1:消费 2:退款',
    remark         VARCHAR(512) COMMENT '备注',
    before_balance DECIMAL(10, 2) COMMENT '变动前余额',
    after_balance  DECIMAL(10, 2) COMMENT '变动后余额',
    create_time    DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modify_time    DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY            idx_user_id (user_id),
    KEY            idx_order_id (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
