function parent() {
    const message = 'Hello World! Closure 2';
    function child() {
    alert (message);
    }
    return child;
    }
    const childFN = parent();
    childFN();
    
