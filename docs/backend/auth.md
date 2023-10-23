---
sidebar: auto
---

# 常见的鉴权方式

由于 HTTP 协议是无状态的，所以需要某种机制来让客户端和服务端保持会话状态。有如下几种常见方式：

- Session-Cookie
- Token
- OAuth2.0

## Session-Cookie

- Session 用来记录服务器和客户端的会话状态
- Session 存在客户端，将 SessionID 存在 Cookie 中

认证流程如下：

1. 客户端第一次请求服务器，服务器根据用户信息生成 Session
2. 将 Session 的唯一标识 SessionID ，通过 `Set-Cookie: SESSIONID=****` 放在 Cookie 中
3. 浏览器将 `Set-Cookie` 中的 SessionID 放在本地Cookie中
4. 浏览器再次请求同域接口时会自动带上 Cookie
5. 服务端取出 Cookie 中的 SessionID 查找对应 Session 信息获取用户信息

:::tip
SessionID 是连接 Cookie 和 Session 的桥梁
:::

