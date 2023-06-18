# Laying out Foundation 


## Polyfill
    A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

    For example, a polyfill could be used to mimic the functionality of a text-shadow in IE7 using proprietary IE filters, or mimic rem units or media queries by using JavaScript to dynamically adjust the styling as appropriate, or whatever else you require.

## Tree Shaking 

    When we import and export modules in JavaScript, most of the time there is unused code floating around. Tree shaking or dead code elimination means that unused modules will not be included in the bundle during the build process.

## How to Build Performant Web Scalabe Apps ?

    There are so many things that react optimise for us and there are so many things bundlers gives us. Whole application is combination of all theses things  :

        - Building 
        - Minifucation
        - Code Cleaning and Compression
        - Hot Module Replacement
        - Caching
        - Code splitting
        - Compatable with older version of browser

`Note : Parcel doesn't remove console.log by itself we have to configure our project using babel-plugin-transform-remove-console`

## What is JSX ? 

    JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.

    > const heading = <h1 id = "title">Namaste React</h1>

    This is simple JSX code in React. But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to a variable that is not a string but just HTML code.

    So to convert it to browser understandable JavaScript code, we use a tool like Babel which is a JavaScript compiler/transpiler.

>> Note : JSX is not HTML inside javascript, JSX is html syntax but not html. There are certain differences between JSX and HTML like JSX follow proper language naming convention  e.g., className, textShadow`

    Advantages of JSX : 

        - JSX helps us in keeping our code simpler and elegant when writing large pieces of
          code.
        - According to the React docs, most people find it helpful as a visual aid when 
          working with UI inside the Javascript code.
        - JSX also allows React to show more useful error and warning messages.
        - If one is familiar with HTML, it is quite easy to use JSX when building React
          application.
        - Faster than normal JavaScript as it performs optimizations while translating to
          regular javascript

    react.createElement --> Object --> HTML ( DOM )
    JSX Internally converts into react.createElement 
    JSX --> react.createElement --> Object --> HTML ( DOM )


## React Key Reconciliation
 




// React Component 
//  - Functional Component - NEW
//  - Class Based Component - OLD

/** 
const HeaderComponent = () => {
    return (
        <div>
          <h1>Namaste React Functional Component</h1>
          <h2> This is heading 2</h2>
        </div>
    );
}
*/

const HeaderComponent = () => (
      <div>
        <h1>Namaste React Functional Component</h1>
        <h2> This is heading 2</h2>
      </div>
);




  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading]
  );
  
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //passing a react element inside the root
  
  //async defer

 /** rendedring react element 
  root.render(container);
*/

// rendering react component
root.render(<HeaderComponent/>)





