## TL;DR

 1. clone the repo
 2. install/update [nvm](https://github.com/creationix/nvm) then type `nvm use` to setup node version
 3. `npm i`
 4. `npm run dev`
 5. create components `npm run component -- [component_name]`

## Using scoped CSS
When you run for example `npm run component -- header` the script creates a folder in `src/html/components` like this:

```
|-- src
  |-- html
    |-- components
      |-- header
        |-- header.twig
        |-- style.scss
```

In `style.scss` file you will can write scoped css, for example
 
```
.header { 
    height: 200px;
    background: #fafafa;
}
```

And in `header.twig` you can reference the class name like this:

    <header class="{{style('header')}}">
    ...
    </header>

This compiles in:

    <header class="header__header___3EXwe">
    ...
    </header>

For all css modules api please refer to [css modules repo](https://github.com/css-modules/css-modules).
