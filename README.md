# SmartBilling
To build for development

in a terminal window -> npm start
in another terminal window -> npm run electron:serve
Voila! You can use your Angular + Electron app in a local development environment with hot reload !

The application code is managed by main.ts. In this sample, the app runs with a simple Electron window and "Developer Tools" is open.
The Angular component contains an example of Electron and NodeJS native lib import. See Use NodeJS Native libraries charpter if you want to import other native libraries in your project.
You can desactivate "Developer Tools" by commenting win.webContents.openDevTools(); in main.ts.

To build for production

Using development variables (environments/index.ts) : npm run electron:dev
Using production variables (environments/index.prod.ts) : npm run electron:prod
Your built files are in the /dist folder.

Included Commands

Command	Description
npm run start:web	Execute the app in the brower
npm run electron:linux	Builds your application and creates an app consumable on linux system
npm run electron:windows	On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems
npm run electron:mac	On a MAC OS, builds your application and generates a .app file of your application that can be run on Ma
Your application is optimised. Only the files of /dist folder are included in the executable.

Use NodeJS Native libraries

Actually Angular-Cli doesn't seem to be able to import nodeJS native libs or electron libs at compile time (Webpack error). This is (one of) the reason why webpack.config was ejected of ng-cli. If you need to use NodeJS native libraries, you MUST add it manually in the file webpack.config.js in root folder :

  "externals": {
    "electron": 'require(\'electron\')',
    "child_process": 'require(\'child_process\')',
    "fs": 'require(\'fs\')'
    ...
  },
Notice that all NodeJS v7 native libs are already added in this sample. Feel free to remove those you don't need.

Browser mode

Maybe you want to execute the application in the browser (WITHOUT HOT RELOAD ACTUALLY...) ? You can do it with npm run start:web.
Note that you can't use Electron or NodeJS native libraries in this case. Please check providers/electron.service.ts to watch how conditional import of electron/Native libraries is done.

Execute E2E tests

You can find end-to-end tests in /e2e folder.

You can run tests with the command lines below :

in a terminal window -> First, start a web server on port 4200 : npm run start:web
in another terminal window -> Then, launch Protractor (E2E framework): npm run e2e