# 基于nginx镜像
FROM nginx

# 将 dist 文件夹中的内容复制到 /use/share/nginx/html/ 这个目录下
COPY /dist /usr/share/nginx/html/

# 将 nginx 配置文件放在 /etc/nginx/nginx.conf中
COPY nginx.conf /etc/nginx/nginx.conf

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

# 在Docker容器启动时以 前台非守护进程模式运行Nginx服务器
CMD ["sh", "-c", "touch /visit.log && nginx -g 'daemon off;' && tail -f /visit.log"]

EXPOSE 80