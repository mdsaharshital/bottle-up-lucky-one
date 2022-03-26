import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div>
            <div className='quiestions'>
                    <div className="half">
                        <h2>How React works?</h2>
                        <p>Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. To make DOM manipulation faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create.</p>
                    </div>
                    <div className="half">
                        <h2>How useState works?</h2>
                        <p>
                        Ans: Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effects in user interfaces. As stated previously, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component. We have been able to establish that the useState hook can be called with any valid JavaScript value, which represents the initial state value of the declared state.React knows when the function is invoked the first time in order to mount the component. During that first invocation, React sets up all the declared state variables — using the initial state values that have been specified and then provides a mechanism to keep track of their changes.
                        </p>
                    </div>
                 </div>
        </div>
    );
};

export default Questions;