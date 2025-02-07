const { Gdk, Gtk } = imports.gi;
import { Utils, Widget } from '../../imports.js';
const { execAsync, exec } = Utils;
const { Box, EventBox } = Widget;

export default () => Box({
    // vertical: true,
    vexpand: true,
    hexpand: true,
    children: [
        EventBox({
            onPrimaryClick: () => App.closeWindow('sideleft'),
            onSecondaryClick: () => App.closeWindow('sideleft'),
            onMiddleClick: () => App.closeWindow('sideleft'),
        }),
        Box({
            vertical: true,
            vexpand: true,
            className: 'sidebar-left',
        }),
    ]
});
