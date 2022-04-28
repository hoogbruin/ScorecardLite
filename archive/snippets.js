element.addEventListener('click',
        (
            function(passedInElement) {
                return function(e) {
                    func(e, passedInElement); 
                };
            }
        )
    (this.elements[i])
    , false);

    function addClickHandler(elem, arg1, arg2) {
        elem.addEventListener('click', function(e) {
            // in the event handler function here, you can directly refer
            // to arg1 and arg2 from the parent function arguments
        }, false);
    }