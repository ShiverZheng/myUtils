- 安装 [oh my zsh](https://ohmyz.sh/)

- 安装 [spaceship](https://github.com/spaceship-prompt/spaceship-prompt) 主题
- 或 安装 [starship](https://starship.rs/zh-CN/config/)主题 速度更快一点
    > 安装 Fira Code Retina Nerd Font Complete.ttf 字体

    > VSCode 在 Text Editor --> Font 内 添加 新增的字体名称['FiraCode Nerd Font']

    > termial 在系统偏好选择安装好的字体
    
- ```shell
  $ vim ~/.zshrc
  ```
- 在文件末尾加入如下脚本：

  ```shell
   # auto check node version
   autoload -U add-zsh-hook
   load-nvmrc() {
   if [[ -f .nvmrc && -r .nvmrc  ]]; then
       nvm use
   fi
   }
   add-zsh-hook chpwd load-nvmrc
   load-nvmrc
- 在项目根目录下配置 `.nvmrc` 为指定的node版本即可。

  > 
  ```
  # .nvmrc
  v10.24.1 
  ```
