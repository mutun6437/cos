var React = require('react');

var HelloWorld = React.createClass({displayName: "HelloWorld",
       // <HelloWorld />をレンダリング（表示）
       render: function() {
         return (
           React.createElement("p", null, "Hello!World!")
         );
       }
     });

// id='app'に<HelloWorld />を埋め込む（マウント）
var m = React.render(React.createElement(HelloWorld, null), document.getElementById('app'));