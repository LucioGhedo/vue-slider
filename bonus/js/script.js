var app = new Vue({
    el: '#app',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
            {
                image: 'img/06.jpg',
                title: "Cortina d'Ampezzo",
                text: 'Ma avevi mai visto un mare così? Pazzesco davvero wow io no'
            }
        ],
        slide: 0,
    },
    methods: {
        nextSlide() {
            if(this.slide < 5) {
                this.slide += 1
            } else {
                this.slide = 0
            }
        },
        prevSlide() {
            if(this.slide > 0) {
                this.slide -= 1
            } else if (this.slide === 0){
                this.slide = 5
            }
        },
        thisSlide(elementIndex) {
            this.slide = elementIndex
        },
        stopFunction(){
            if (event.type == 'mouseover') {
                clearInterval(mouseOverStop)
            }
            if ( event.type == 'mouseout') {
                mouseOverStop = setInterval(this.nextSlide, 3000)
            }
            
        },
    },
    mounted () {
        mouseOverStop = setInterval(this.nextSlide, 3000)
    }
  })