import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animateGsap = () => {
  gsap.registerPlugin(ScrollTrigger);

  // target all section elements on the page so each section's text fades
  // in as it enters the viewport. This works for HomeNew which doesn't
  // use a `.homePageContent` wrapper.
  const sections = gsap.utils.toArray('section');

  sections.forEach((section) => {
    const textElements = section.querySelectorAll('h1, h2, h3, p, a, span, li, button');

    if (!textElements.length) return;

    // start slightly lower and invisible for a gentler entrance
    gsap.set(textElements, { opacity: 0, y: 40 });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(textElements, {
          opacity: 1,
          y: 0,
          duration: 1.0,      // slower fade for smoother effect
          stagger: 0.08,      // more pronounced stagger
          ease: 'power2.out'  // gentler easing for a smoother feel
        });
      }
    });
  });

  const HeroScaleB = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      toggleActions: 'restart pause resume pause',
      start: 'bottom 85%',
      end: '+=100%',
      pinSpacing: false,
      scrub: true,
      pin: true,
      duration: 0,
    }
  });
  HeroScaleB.to('.hero', { filter: 'blur(12px)', y: 1 });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => {
      trigger.kill();
    });
  };
};

export default animateGsap;
