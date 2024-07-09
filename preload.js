const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  chrome: () => process.versions.chrome,
  node: () => process.versions.node,
  electron: () => process.versions.electron,
});
