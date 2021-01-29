    var options = {
        bottom: '30px', // default: '32px'
        left: '32px', // default: '32px'
        left: 'unset', // default: 'unset'
        time: '1s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#e2e2e2',  // default: '#fff'
        buttonColorDark: '#8C8C8C',  // default: '#100f2c'
        buttonColorLight: 'rgb(223, 220, 84)', // default: '#fff'
        saveInCookies: true, // default: true,
        label: '💡' // default: ''
    }

    const darkmode = new Darkmode(options);
    darkmode.showWidget();

    gsap.from(".flyIn", {duration: 2, x: -300, opacity: 0, scale: 0.1, ease: "bounce.out"}); 
    gsap.from(".container", {duration: 2, x: -300, opacity: 0, scale: 0.1, ease: "bounce.out"}); 
    gsap.from("a", {duration: 3, opacity: 0});

    new fullpage('#fullpage', {
    autoScrolling: true,
    navigationPosition: right,
    navigation: true,
    anchors: ['section1', 'section2']
})
