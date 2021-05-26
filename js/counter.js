ScrollOut({
    
//    once:true,
    
    onShown: function (el) {

        if (el.classList.contains('counter')) {
            var numb = el.innerHTML;
            var numAnim = new countUp.CountUp(el, numb);
            numAnim.start();
        }
    }
    
    // onHidden: function (el) {

        // if (el.hasAttribute('data-animation')) {
        //     var animationName = el.getAttribute('data-animation');
        //     if (el.classList.contains(animationName))
        //         el.classList.remove(animationName);
        // }
    // }
});