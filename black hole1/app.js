new fullpage('#fullpage', {
    autoscrolling: true,
    navigation: true,
    onLeave:(origin,destination,direction) => {
        const section = destination.item;
        const title = section.querySelector("p");
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title,0.5,{y: "50", opacity: 0}, {y:0, opacity:1});
        
        
        if(destination.index == 4){
        const poster = document.querySelectorAll('.poster1');
        const description  = document.quertSelector('.description')

        tl.fromTo(poster, 0.7, {x:'100%'}, {y:'-70%'} )
        .fromTo(description, 0.5, {y: "50", opacity: 0}, {y:0, opacity:1})
        }
        
    }
        
})
