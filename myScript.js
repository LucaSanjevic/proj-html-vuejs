var app = new Vue ({
    el: "#app",
    data : {
        listaLinks:[
            
            {
              text: "HOME",
              url: "#"
            },

            {
                text:"ABOUT",
                url: "#"
            },

            {
                text: "SERVICES",
                url: "#"
              },

              {
                text: "PROCESS",
                url: "#"
              },

              {
                text: "TESTIMONIALS",
                url: "#"
              },

            {
                text:"",
                url:"#",
                icon: "fa-user "
            },
        ],

        footerData:{
            twitterData: [
            {
                text: "lorem",
            },
            {
                text: "lorem",
            },
            {
                text: "lorem",
            },
            {
                text: "lorem",
            },
            {
                text: "lorem",
            },
            {
                text: "lorem",
            },
        ],

        links: [
            {
                text: "lorem",
                link: "#"
            },
            {
                text: "lorem",
                link: "#"
            },
            {
                text: "lorem",
                link: "#"
            },
            {
                text: "lorem",
                link: "#"
            },
            {
                text: "lorem",
                link: "#"
            },
            {
                text: "lorem",
                link: "#"
            },
        ],
            }
        },
        methods: {
            button: function(event) {
                alert("Funzione non disponibile in questo momento!")
                                 }
                                }
});