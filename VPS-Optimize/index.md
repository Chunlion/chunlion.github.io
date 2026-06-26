---
layout: home

hero:
  name: VPS-Optimize
  text: 文档入口
  tagline: VPS 初始化、安全加固、面板部署、443 单入口、迁移和恢复文档。
  actions:
    - theme: brand
      text: 快速开始
      link: /VPS-Optimize/quick-start
    - theme: alt
      text: 3x-ui + REALITY + 443
      link: /VPS-Optimize/tutorials/01-3x-ui-reality-443
    - theme: alt
      text: 已有服务器迁移
      link: /VPS-Optimize/docs/existing-server-migration
    - theme: alt
      text: 443 排错/恢复
      link: /VPS-Optimize/docs/443-single-entry-troubleshooting

features:
  - title: 快速开始
    details: 安装主脚本，首次运行后注册 cy 快捷入口。
    link: /VPS-Optimize/quick-start
  - title: 3x-ui + REALITY + 443
    details: 部署 3x-ui、REALITY 入站，并让面板、订阅、网站和节点共用公网 443。
    link: /VPS-Optimize/tutorials/01-3x-ui-reality-443
  - title: 已有服务器迁移
    details: 迁移已有 3x-ui、Caddy/Nginx、网站、订阅工具和 Docker Compose 项目。
    link: /VPS-Optimize/docs/existing-server-migration
  - title: 443 排错/恢复
    details: 定位 443、面板、订阅、证书、REALITY 和回滚问题。
    link: /VPS-Optimize/docs/443-single-entry-troubleshooting
  - title: 443 单入口教程
    details: Web、面板、订阅和节点共用公网 443，并按入口模式分流。
    link: /VPS-Optimize/docs/443-single-entry
  - title: 失联与回滚急救
    details: 处理 SSH 失联、防火墙误封、443 改坏和服务起不来。
    link: /VPS-Optimize/docs/recovery-runbook
  - title: 配置路径
    details: 查看 VPS-Optimize、Caddy、Nginx、Xray、dog 和 x-ui 相关路径。
    link: /VPS-Optimize/docs/config-paths
  - title: 独立工具
    details: dog.sh 和 x-ui 增强套件可单独运行，也可从主菜单进入。
    link: /VPS-Optimize/docs/dog
---

## 主路径

| 目标 | 入口 |
|---|---|
| 新机器安装和首次使用 | [快速开始](quick-start.md) |
| 部署 3x-ui、REALITY 并接入公网 443 | [3x-ui + REALITY + 443 单入口部署](tutorials/01-3x-ui-reality-443.md) |
| 已有服务器迁移到 443 单入口 | [已有服务器迁移到 443 单入口](docs/existing-server-migration.md) |
| 443 异常、面板打不开、证书失败 | [443 单入口排错手册](docs/443-single-entry-troubleshooting.md) |
| SSH 失联、防火墙误封、回滚恢复 | [失联与回滚急救手册](docs/recovery-runbook.md) |

## 参考文档

| 文档 | 内容 |
|---|---|
| [443 单入口分流教程](docs/443-single-entry.md) | 入口模式、3x-ui 设置、证书策略、白名单和后续维护 |
| [443 单入口技术实现](docs/443-tcp-peek-engine.md) | Nginx Stream、TCP Peek + Splice、Xray Fallback 实现边界 |
| [订阅工具接入 443](tutorials/02-subscription-tools-caddy-nginx-reverse-proxy-443-single-entry.md) | SublinkPro、Sub-Store、Dockge 等订阅工具接入方式 |
| [配置文件与数据目录](docs/config-paths.md) | 配置、证书、备份、日志和敏感信息路径 |
| [dog.sh 使用说明](docs/dog.md) | 端口流量统计、限额、限速和日报 |
| [x-ui 增强套件](docs/xui-custom-manager.md) | 重置日期、流量校准、备份恢复和健康检查 |
