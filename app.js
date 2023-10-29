particlesJS("background", {
    particles: {
        number: {
            value: 250,
            density: { enable: true, value_area: 800 },
        },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
        },
        opacity: {
            value: 0.18939543399174544,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onclick: { enable: true, mode: ["push", "repulse"] },
        },
        modes: {
            push: { particles_nb: 4 },
        },
    },
    retina_detect: true,
});
