# angular-md [![Analytics](https://ga-beacon.appspot.com/UA-2694988-7/angular-md/readme?pixel)](https://github.com/yaru22/angular-md)
Angular directive to render [Markdown](http://daringfireball.net/projects/markdown/) text. It's built on blazingly fast markdown parser [marked](https://github.com/chjj/marked).

## Usage
Include `angular-md.js` in your project (you can do so via `bower install angular-md`).

Load the directive after loading `angular.js`

```
<script src="<path to angular.js>"></script>
<script src="<path to angular-md.js>"></script>
```

Specify angular-md as a dependency of your Angular module.

```
var app = angular.module('ngApp', [
  'yaru22.directives.md'
]);
```

Use it in your project.

```
<html ng-app="ngApp">
...
<body>
  <md>
# How to use angular-md
This is a example of how to use angular-md.

- Bullet point 1.
- Bullet point 2.

> To use or not to use...
> - Anonymous
  </md>
  ...
</body>
</html>
```

## License
This seed is released under permissive MIT License.
