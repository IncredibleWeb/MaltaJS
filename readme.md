# MaltaJS Progressive Web App Demo
A progressive web app that was used during the MaltaJS presentation that demonstrates the use of Service Workers, Cache API and offline functionality; the use of a Manifest for Web and Add to Homescreen.

## Progressive Web Apps
“Progressive web apps are ordinary mobile-friendly web applications that may be progressively enhanced into native-like applications through the modern browser.”

### Mobile Friendly Applications
At it’s core, a PWA is little more than an ordinary website; composed of HTML, CSS & JavaScript.

### Progressive Enhancement
A website must be built in a structured-layered approach, with rock-solid HTML & content and enhancements added to improve the user’s experience.

### Native Features
The most exciting aspect of a PWA is definitely the native-like user experience and features. A progressive web app is able to work offline, receive push notifications and should be optimized to work flawlessly on mobile devices.

### App-Shell Model
The “app-shell” could be compared to the code you would publish to the app store if you were building a native app. Inspiration taken from [application-shell](https://github.com/GoogleChrome/application-shell).

### Service Worker
A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.

### Web App Manifest
A simple JSON file that must follow the specification available on [W3C](a href="https://w3c.github.io/manifest/" target="_blank"), it is possible to run the web app in full-screen as a standalone application, assign an icon which will be displayed once the application is installed onto the device or assign a theme and background colour to your app. In addition, Chrome on Android also proactively suggests to the user to install the web app using [Web App install banners](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android).

### Technology
Built using traditional HTML5 and vanilla JavaScript that simulates the retrieval of data from a mock API. Throughout the application we use small bits of [KnockoutJS](http://knockoutjs.com) to handle client-side bindings, Handlebars for server-side JavaScript templates and ExpressJS to host the application.