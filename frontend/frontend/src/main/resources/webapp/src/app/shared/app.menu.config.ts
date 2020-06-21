import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'explore', name: 'EXPLORE', icon: 'explore', route:'/main/explore'},
  { id: 'mylists', name: 'MYLISTS', icon: 'library-music', route: '/main/mylists'},
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
