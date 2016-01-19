React Chessboard
=====================

A simple 16x16 'chessboard' with one moveable drag and drop piece. The app is
built on Angular with HTML5's 'draggable' attribute implemented to facilitate
the drag and drop feature. This project uses the [react hot
boilerplate](https://github.com/gaearon/react-hot-boilerplate).

### Usage

The app can be run locally in a web browser. To do so, run the following
commands from your command line.

```
git clone https://github.com/dbatten4/chessboard-react.git
cd chessboard-react
npm install
npm build
npm start
open http://localhost:3000
```
### Testing

The app is tested with Jest. To run the tests, run the following command from
your command line while in the root of the directory.
```
npm test
```

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Next Steps

Ideally I would implement a flux architecture on this app to handle the dynamic
flow of data and extract some of the logic and state away from the components.
