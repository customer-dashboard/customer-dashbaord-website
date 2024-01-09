import Aos from 'aos';

function TransitionEffect() {
        window.scrollTo(0, 0);
            Aos.init({
                duration: 500,
                easing: 'ease-in-sine',
                delay: 100,
                once: true
            });
            Aos.refreshHard();
    
}

export default TransitionEffect