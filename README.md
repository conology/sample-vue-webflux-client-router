# Frontend Sample project with vue + webflux bff

## Scope

* Backend ✅
  * Java
  * Spring Webflux
  * gradle
* Frontend ✅
  * Typescript
  * Vue3 composition api
  * vite + npm
* OpenApi ❌
* OAuth2 client side with PKCE ❌
* Client side rendering ✅
* Client side routing ✅
* Bundle backend + frontend with gradle ❌

## Development

### Through frontend dev server (recommended)
1. start backend with profile dev. You can use the shared intellij run goal
2. start frontend script `npm run dev`
3. access url printed in frontend script: [http://localhost:5173/](http://localhost:5173/)

The frontend will forward all requests on /api/** to the backend and takes care of things like hot reload

### Through backend server (test deployment related stuff)
1. start backend with profile dev in cwd [backend](/backend).  You can use the shared intellij run goal
2. start frontend script `npm run dev-build`. This builds and updates the frontend resources
3. access backend url [http://localhost:8080](http://localhost:8080)

## Debugging
### backend
as usual
### frontend
* Breakpoints
  * directly throuhg chrome dev tools
  * setup browser debugging for your ide
* inspect vue compenents
  * install browser plugin **_vue dev tools_**
  * if you select a component in vue dev tools,
you can access the data structure in the developer console
with `$vm`. E.g. `$vm.setupState` to access and modify setup variables

