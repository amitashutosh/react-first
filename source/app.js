/**
 * Created by amit.ashutosh on 9/29/15.
 */

var React = require('react');
var ReactDOM = require('react-dom');

/*

 // Example 1

 var h1 = React.createElement('h1', { className: 'header', 'key': 'header' }, 'This is React');
 var p = React.createElement('p', { className: 'content', 'key': 'content' }, "And that's how it works.");
 var section = React.createElement('section', { className: 'container' }, [h1, p]);


 var listItemElement1 = React.createElement('li', { className: 'item-1' }, 'Item 1');
 var listItemElement2 = React.createElement('li', { className: 'item-2' }, 'Item 2');
 var listItemElement3 = React.createElement('li', { className: 'item-3' }, 'Item 3');

 ReactDOM.render( section, document.getElementById('react-application'));

 */

/*

 //Example 2

 var createListItemElement = React.createFactory('li');

 var listItemElement1 = createListItemElement({ className: 'item-1', key: 'item-1' }, 'Item1');
 var listItemElement2 = createListItemElement({ className: 'item-2', key: 'item-2' }, 'Item2');
 var listItemElement3 = createListItemElement({ className: 'item-3', key: 'item-3' }, 'Item3');

 var reactFragment = [ listItemElement1, listItemElement2, listItemElement3 ];

 var listOfItems = React.createElement('ul', { className: 'list-of-items' }, reactFragment);

 ReactDOM.render(listOfItems, document.getElementById('react-application'));

 */

/*

 //Example 3

 var listItemElement1 = React.DOM.li({ className: 'item-1', key: 'item-1' }, 'Item1');
 var listItemElement2 = React.DOM.li({ className: 'item-2', key: 'item-2' }, 'Item2');
 var listItemElement3 = React.DOM.li({ className: 'item-3', key: 'item-3' }, 'Item3');

 var reactFragment = [ listItemElement1, listItemElement2, listItemElement3 ];
 var listOfItems = React.DOM.ul({ className: 'list-of-items' }, reactFragment);

 ReactDOM.render(listOfItems, document.getElementById('react-application'));

 */

/*

 // Example 4 - JSX example


 var listOfItems = <ul className="list-of-items">
 <li className="item-1">Item 1</li>
 <li className="item-2">Item 2</li>
 <li className="item-3">Item 3</li>
 </ul>;

 ReactDOM.render(listOfItems, document.getElementById('react-application'));

 */




// Example 4 - Creating React component

var ReactClass = React.createClass({
    render: function () {
        return React.createElement('h1', {className: 'header'}, 'React Component');
    }
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));



