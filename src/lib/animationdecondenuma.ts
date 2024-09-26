import gsap from "gsap";
import Lenis from "lenis";

export function animationdecondenuma() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    lenis.on('scroll', (e) => {
        const scrollY = window.scrollY;

        gsap.to('.layer2', {
            y: scrollY * 0.02
        });
    });

    requestAnimationFrame(raf);
}