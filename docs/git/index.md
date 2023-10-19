# Git

## 代理设置

设置全局代理，如用 **vpn，端口为 7890

```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

取消代理

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

查看代理

```bash
git config --global --get http.proxy
git config --global --get https.proxy
```