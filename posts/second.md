---
title: Interview Prep
description: "Interview Preparation Stuff"
---

# https://www.youtube.com/watch?v=_p1qmBOnpak

### TELL ME A BIT ABOUT YOURSELF

### How you got into web development and what you can provide to the company

### Decribe your projects, why you used specific libraries

### Event listener -> function that has an event and takes a callback function: scroll, click, etc.

# https://www.youtube.com/watch?v=0fFYacBQPbA

### 1. Fav features of html5 and css3:

-   header, nav, footer, article, section
-   scalable vector graphics <svg> and canvas
-   form elements like number, date, time, calendar, and range
-   audio and video
-   HTML Geolocation
-   HTML Drag and Drop
-   HTML Local Storage
-   HTML Application Cache
-   HTML Web Workers
-   HTML SSE

-   media queries
-   animations
-   box model
-   Grid system
-   Flexbox
-   animations
-   transforms
-   transitions
-   2d 3d
-   SASS LESS

### 2. Can you describe your workflow when you are creating a webpage?

-   figma mockup
-   JS at bottom of page
-   image optimized
-   minify CSS and JS files
-   W3 standards
-   using on different browsers
-   responsive

### 3. Can you tell me the difference between CSS resetting and CSS # normalizing?

Resetting is removing the automatic padding, margins so I can add my own.
Normalizing is checking that all browsers show the same CSS.

### 4. Can you tell me the difference between inline, inline-block, and # block

inline: no height, no width, only left and right margin, padding everywhere

inline-block: yes height, yes width, yes all margins, yes all padding, allows other elements to sit around it

block: takes all the width of the parent element

### 5. Can you please describe to me the CSS Box Model?

content -> padding -> border -> margin

# https://www.youtube.com/watch?v=t3V5x3wabTo

1. What is the importance of Doctype in HTML?

Doctype tells the browser which version of HTML/XHTML standard is used and how to render the page.

2. What is the difference between display: none and visibility: hidden?

`display: none` removes the element from the flow, allowing other elements to fill in.

`visibility: hidden` only hides the element, but space is allocated for it on the page.

3. Question about em.

4. What is the difference between sessionStorage and localStorage?

sessionStorage is available only when a browser’s tab is opened.

localStorage survives on closing and reopening a browser.

5. What are data attributes?

Data attributes are used to store custom data directly inside HTML tags. They are easily-accessible from CSS and JavaScript.

6. Explain the difference between Normalize CSS and Reset CSS?

Resetting removes all the native styles provided by browsers.

Normalizing is just a correction of some common bugs.

For example:

sup and sub elements will work as usual after normalizing, resetting would make them look like plain text though.

7. What are sprites, what is their purpose?

CSS sprite is merging multiple images into a single image. It reduces the amount of WEB-requests and increases page speed.

8. What is SVG?

SVG stands for Scalable Vector Graphics, it is used to show vector graphics on the page. The biggest benefit is that SVG-images don’t lose quality when zoomed or resized (unlike JPG). You can easily change the size, color and animate SVG images. SVG’s also can be bundled in a SVG – sprite.

9. What are the new features of HTML5 standard?

Added new semantic elements:

`<nav>, <article>, <section>, <header>, <footer>, <aside>`

Added new form controls:
`<calendar>, <date>, <time>, <email>, <url>, and <search>`

Better support for embedded media using <audio>, <video> and <canvas>.

10. What is a CSS preprocessor?

CSS preprocessor is a tool which allows you to create CSS code much faster, in a more structured manner. Preprocessors extend the CSS functional by adding variables, mixins, partials, also allow to use operators inside the code.

11. What is microdata?

Microdata is a set of additional HTML tags for specifying the additional semantic information to help the search engines read your site properly.

12. What tags are used to make a table?

table For wrapping a table.
th This tag represents of the table heading.
tr Creates a table row that store the data elements.
td Represents column in a row.

13. What is the CSS Box Model?

Box model represents a structured way to space elements in relationship to each other. It is made of margins, borders, padding, and content. When the page is being rendered, the browser shows each of the elements as a rectangular which can be styled using CSS.

14. Code about !important overwriting things

15. What is the reason for wrapping the entire content of a JavaScript source file in a function?

This is a one of best-practices which creates a private namespace and thereby helps avoid potential name conflicts between different JavaScript functions and external libraries.

15. What is the reason for wrapping the entire content of a JavaScript source file in a function?

This is a one of best-practices which creates a private namespace and thereby helps avoid potential name conflicts between different JavaScript functions and external libraries.

16. How would you inspect a hover state of an element in the devtools?

To open it click the small :hov text in the top right corner of the styles pane.

17. How would you edit HTML in the devtools?

Right click on the text you want to edit on the HTML pane.
Choose Edit as HTML.
Make your changes.
Press Enter.

18. What is the difference between “==” and “===” operators in JavaScript?

The “===” operator behaves identically to the equality “==” operator, but more strictly, the types must be the same to be considered equal.
For example:
0 == ‘0’ // true
0 === ‘0’ // false

19. What kind of loops are in JavaScript?

for – goes through an inner code a number of times
for/in – used for looping through the properties of an object
for/of
while – goes through an inner code while a specified condition is true
do/while – also goes through a block of code while a specified condition is true

20. Code that works because of hoising

https://www.youtube.com/watch?v=MY0UBGX2FtA

Explain event delegation

JS event listeners fire not only on a single DOM element but on all its descendants (e.g. if added to an ul it also goes to its lis and as if present)

Describe event bubbling

Inverse of the above. Also known as propogation, events in an element will "bubble up" and also fire on all the parents

What is the difference between "target" and "currentTarget"?

The latter is the element with the event listener attached (like a click), the former is the actual element that triggered it

IIFE (Immediately invoked function expression)

( function foo(){ //code } )();

Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

Because you can't predict the future. Like in case you add libraries.

Explain "hoisting"

All variables (var) are declared at the top of any given function scope whether you like it or not (including function declarations). [JS does it itself].

const and let:

    not hoisted
    scoped within the block they are in
    gives you more control

What's the difference between a variable that is: null, undefined, or undeclared?

Undeclared: you forgot something

Undefined:

    declared but no defined value (not initialized)
    object/array exists but nothing at that key/index
    function exists but doesn't return anything
    falsy

Null:

    null has a value. Its value is null
    null is a "nothing" value
    not zero, not an empty string/object/array
    falsy

How would you go about checking for any of these states?

    Undeclared finds you. Except when assigning a value, like without a var before it; use a linter
    Undefined using typeof but that's also returned for undeclared, use ===
    typeof null returns an object, this is a bug!

Difference between == and ===

    == checks for equality
    === checks for equality and type

What is the event loop? Difference between call stack and task queue?

# https://www.youtube.com/watch?v=fimT15Iu7jg

1. What are some major advantages of react?

-   UI testing becomes easy
-   faster application
-   JSX readability
-   easy to integrate new frameworks
-   can do server side rendering

2. What is a key in react and what is it's purpose?

Needed for react to track changes and make display changes accordingly.

3. Single source of truth in redux

The global store used to track changes throughout the application. All info stored there. Makes it easy to keep track of changes over time and debugging.

4. What are the difference between a stateless and stateful component?

Stateful:

-   stored info about component's state change in memory
-   have authority to change state
-   contains the knowledge of past, current, and possible future changes in state
-   stateless components notify them about the requirement of the state change, then they send down the props to them

Stateless:

-   calculates the internal state of the components
-   do not have authority to change state
-   contains no knowledge of past, current and possible future state changes
-   they receive props from the stateful components and treat them as callback functions

5. Coding

using event handlers like with `<div onClick={this.handleClick}>`

`const element = React.createElement ( "h1", {className: "greeting"}, "Hello world!" )`

# https://www.youtube.com/watch?v=uRkS5Dqf8ic

## Lifecycle Methods

(render methods)

-   constructor
-   static getDerivedStateFromProps -> replaces componentWillReceiveProps, static because no access to state
-   render -> can't set state here because that'd cause and infinite loop
-   componentDidMount -> to notify third party library like chart components

(re-render methods -> runs many times)

-   static getDerivedStateFromProps
-   shouldComponentUpdate -> returns true or false after comparing
-   render
    -> :getSnapshotBeforeUpdate -> pre commit phase -> replaces componentWillUpdate because of lazy loading
-   componentDidUpdate

-   componentWillUnmount

## why do we use arrow functions

A function like loginHandle in the class component is actually a property and not a function. If we didn't have an arrow function for the loginHandle then we would not be able to use this.setState there, because the this keyword would be referring to the function itself and thus we wouldn't be able to access the state that way. The arrow function uses the this keyword in the lexical scope so refering to its parent. All this is an alternative to binding the function to the this keyword. Note that all this stuff is experimental React stuff and not JS.

## How do you prevent components from re-rendering?

-   shouldComponentUpdate
-   React.PureComponent -> after extends
-   React.memo

# https://www.youtube.com/watch?v=4OzC5InCkLY

## Error Boundaries

Similar to catch() in JS. Wrap an error handler component around a component.

-   static getDerivedStateFromError => have a fallback component that e.g. gives error message
-   ComponentDidCatch => used to log the error that occured

## Best lifecycle methods for making API calls

componentDidMount

## React Patterns

-   context-api pattern => passing props into deeply nested component, provider and consumer
-   render props => using children as functions
-   presentation component pattern => stateless func comp, container components, how things work, holds state

## Why would you use react in your project?

## What is css-in-js pattern?

CSS is global. This fixes the problem.

# https://www.youtube.com/watch?v=yb_w7jg_veQ

## why cant you update state directly without setState?

setState always re-renders the component once the state is update. Directly won't let that happen so is bad practice.

## How many ways can you conditionally render in react?

-   if statement
-   &&
-   conditional ? :

## What is Fragments and why do we use it?

<React.Fragment> to wrap all the components in the return.

## Code splitting in react / lazy loading

Bundler bundles everything together on compilation. This can cause files to become very large. This is a problem since users may only visit a few pages from the large file. So lazy loading was introduced.
`const LazyComp = React.lazy(() => import("./lazyComp"));`
Have a fallback component:

```
<Suspense fallback={<div>Loading...</div>}>
    <LazyComp />
</Suspense>
```

## Middleware

When the UI asks to update both the store and the database, there is a chance that one might fail. The middleware makes sure that the database is updated first and then tells the store to update.

## Virtual DOM

Updating the DOM is expensive. So make it faster and update only specified components using a VDOM. DOM tree is created by React.
