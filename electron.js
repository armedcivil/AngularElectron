'use strict';

var electron = require('electron');
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
    var indexPath = __dirname + '/dist/index.html';
    mainWindow.loadURL('file://' + indexPath);
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});