'use strict';

var electron = require('electron');
var Path = require('path');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var fs = require('fs');

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {
    // ブラウザ(Chromium)の起動, 初期画面のロード
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    // 環境によって読み込むパスを変える
    var indexPath = __dirname;
    if(process.argv[2] === 'debug'){
        indexPath = Path.join(indexPath, 'dist');
    }
    indexPath = Path.join(indexPath, 'index.html');

    // 読み込む
    mainWindow.loadURL('file://' + indexPath);
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});