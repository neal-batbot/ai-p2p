# ADC Pin2Pin 对比：采样、转换与接口时序核验维度

> 调研目的：根据 FAE 反馈，为 ADC / 数据转换器的 Pin2Pin 分析补齐“时序配置”这一硬性维度。本文只引用 ADI 官方一手资料，作为提示词与后续结构化 Schema 的依据。

## 结论

对 ADC 而言，封装和静态电气参数相同，**不等于可直接替代**。采样触发、输入采集窗口、转换完成、数据就绪及数字读出构成一条时序链；其中任一环节与 MCU/FPGA、前端驱动或控制软件不匹配，都可能使“物理 Pin2Pin”变为“需要硬件/固件适配”甚至不可替代。

## 必须核验的时序链

| 阶段 | 必须对比的字段 | 对替代结论的影响 |
| --- | --- | --- |
| 采样触发 | CONVST/SOC 的触发边沿、有效极性、最小脉宽、建立/保持时间 | 控制器已有触发逻辑可能不兼容；不能依据“都有 CONVST”判定兼容 |
| 采集窗口 | acquisition time、输入建立时间、允许源阻抗/驱动要求 | 原前端运放/RC 网络可能无法在窗口内稳定，导致 SNR/线性度劣化 |
| 采样瞬间 | aperture delay、aperture jitter（高速/同步场景） | 多通道相位关系、控制环采样点或高速动态性能可能改变 |
| 转换 | conversion time、最小转换周期、BUSY/EOC 时序与极性 | 固件轮询/中断、下一次触发及实时预算可能失效 |
| 数字延迟 | conversion latency、pipeline delays、数字滤波 group delay | 数据对应的采样周期可能变化；控制环、同步采集不能只按采样率判断 |
| 读数接口 | SPI 的 CS/SCLK/SDO 时序、CPOL/CPHA、最大 SCLK、帧宽、读出窗口、链式读数；或 LVDS/JESD 的时钟、lane、同步要求 | 引脚相同也可能 MCU/FPGA 驱动、寄存器设置或数据帧不兼容 |
| 启动/配置 | 上电、复位、校准、配置寄存器生效时间；数据就绪前的等待要求 | 替换后启动流程、量产测试和低功耗唤醒时序可能要改 |

## ADI 官方依据

1. [Nine Often Overlooked ADC Specifications](https://www.analog.com/en/resources/technical-articles/nine-often-overlooked-adc-specifications.html)
   - 将 aperture delay 定义为采样信号施加到实际输入被采样之间的延迟。
   - 区分 SAR ADC 的 conversion time 与 pipeline ADC 的 conversion latency；后者通常以 pipeline delay 表示，并可换算为应用中的实际时间。
   - 启示：采样率相同不能代替转换时间/延迟核验。

2. [Selecting the Right ADC for Your Application](https://www.analog.com/en/resources/technical-articles/selecting-the-right-adc-for-your-application.html)
   - 说明同步采样需要在同一时刻获取多路模拟输入；SAR 的“snapshot”采样行为与其他架构不同。
   - 指出高性能/高速 ADC 中数字接口会成为系统设计关键；讨论 parallel、LVDS 与 JESD204B 接口的系统影响。
   - 启示：必须核验通道同步拓扑和接口/时钟要求，不能只比较通道数、位数和采样率。

3. [Design Guidelines for High-Performance, Multichannel, Simultaneous-Sampling ADCs in Data-Acquisition Systems](https://www.analog.com/en/resources/app-notes/design-guidelines-for-highperformance-multichannel-simultaneoussampling-adcs.html)
   - 面向多通道同步采集系统，强调系统架构、器件选择、PCB 布局与输入缓冲会共同决定能否达到指标。
   - 文中指出在较高采样率应用中，外部输入缓冲可能是必要条件。
   - 启示：ADC 替代必须输出“前端驱动/建立时间是否需复核”的风险项。

4. [ADC Driving: Driving Differential ADCs](https://www.analog.com/en/resources/technical-articles/adc-driving-driving-differential-adcs.html)
   - 讨论必须为 ADC 模拟输入瞬态在 acquisition 期间提供足够 settling 的驱动/滤波条件。
   - 启示：输入采集窗口与驱动建立时间应被列为替代核验字段。

## 产品规则

- 模型必须优先从原始 datasheet 的 **Timing Characteristics / Serial Interface Timing / Conversion Timing / Digital Interface** 表中取值；找不到时明确写“资料未找到，需核对 datasheet 第 X 页”，不得臆造。
- 时序不一致时，结论不得写“完全 Pin2Pin”；应标注为“需固件/FPGA/外围验证”或“不可直接替代”，并明确受影响环节。
- 对 Delta-Sigma ADC，额外核验数字滤波延迟、输出数据率与同步/滤波配置；对 Pipeline ADC，额外核验 latency；对多通道器件，额外核验同步/复用采样拓扑。
