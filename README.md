<div align="center">
    <h1>【 end_4's Hyprland dotfiles > m3ww 】</h1>
    <h3> Material design 3 woo </h3>
</div>

## Design
- **Scalable widgets**: Just change the font size, they'll be scaled!
- **Accessible**:
  - Natural animations
  - Soft colors that still have decent contrast
  - Both light and dark mode are well supported
- **Dynamic**: autogenerated colors based on wallpaper for eww, gtklock, foot and fuzzel

## Gallery
- Video: https://streamable.com/85ch8x
- Images ↓
![Left sidebar](assets/sideleft.png)
![Keybinds](assets/cheatsheet.png)
![Wlogout replacement](assets/powermenu.png)
![Right sidebar](assets/sideright.png)

## Dependencies
 - Requires [eww with systray support](https://github.com/elkowar/eww/pull/743)
 - Python dependencies (Command for Arch Linux with `yay` installed)
```
yay -S python-pywal python-desktop-entry-lib python-poetry python-build python-Pill
```
 - Normal dependencies
```
[ Command for Arch Linux ]
sudo pacman -S bc blueberry bluez boost boost-libs coreutils curl findutils fish fuzzel fzf gawk gnome-control-center ibus imagemagick libqalculate light networkmanager network-manager-applet nlohmann-json pavucontrol plasma-browser-integration playerctl procps ripgrep socat sox starship udev upower util-linux xorg-xrandr wget wireplumber yad
[ Command for: Fedora (INCOMPLETE command so there's less name hunting for you) ]
sudo dnf install bc blueberry bluez coreutils dunst findutils gawk gojq ImageMagick light NetworkManager network-manager-applet pavucontrol plasma-browser-integration playerctl procps ripgrep socat swayidle udev upower util-linux wget wireplumber wl-clipboard wlogout qalc sox nlohmann-json-devel
```
- AUR Packages (Command for Arch Linux with `yay` installed)
```
yay -S cava lexend-fonts-git geticons gojq gtklock gtklock-playerctl-module gtklock-powerbar-module gtklock-userinfo-module hyprland-git python-material-color-utilities swww ttf-material-symbols-git wlogout
```
- Manual setup
   - Get "Plasma browser integration" extension for your browser
   - Run `usermod -aG video <USERNAME>` for brightness control to work
 - Keyring (authentication stuff) (Command for Arch Linux)
```
sudo pacman -S gnome-keyring polkit-gnome 
```

 - Other stuff that I use, mostly utilities (you can skip these) (Command for Arch Linux)
```
sudo pacman -S tesseract cliphist grim slurp
```
