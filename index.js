    var options = {
        bottom: '710px', // default: '32px'
        right: '32px', // default: '32px'
        left: 'unset', // default: 'unset'
        time: '1s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#e2e2e2',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: true, // default: true,
        label: '💡' // default: ''
    }

    const darkmode = new Darkmode(options);
    darkmode.showWidget();

    gsap.from(".flyIn", {duration: 2, x: -300, opacity: 0, scale: 0.1, ease: "bounce.out"});
    gsap.from("a", {duration: 3, opacity: 0});

    new fullpage('#fullpage', {
    autoScrolling: true,
    navigationPosition: right,
    navigation: true,
    anchors: ['section1', 'section2']
})
