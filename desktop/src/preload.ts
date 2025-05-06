import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  sendEmail: (email) => ipcRenderer.send('send-email', email),
})
