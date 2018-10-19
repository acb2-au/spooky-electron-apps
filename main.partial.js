    // Open the DevTools.
    // win.webContents.openDevTools()

    // Ignore mouse events
    win.setIgnoreMouseEvents(true)

    // Hide dock icon
    app.dock.hide();

    // Set always on top
    win.setAlwaysOnTop(true, "floating");
    win.setVisibleOnAllWorkspaces(true);
    win.setFullScreenable(false);
    win.setFullScreen(true)

