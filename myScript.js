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
            textdata: [
            {
                text: "> The company",
            },
            {
                text: "> Institutional",
            },
            {
                text: "> Social & Events",
            },
            {
                text: "> Innovation",
            },
            {
                text: "> Environment",
            },
            {
                text: "> Technology",
            },
        ],

        textdata2: [
            {
                text: "> Industrialized",
            },
            {
                text: "> Chemicals",
            },
            {
                text: "> Packaged Liquids",
            },
            {
                text: "> Construction",
            },
            {
                text: "> Laminated Wood",
            },
            {
                text: "> And others",
            },
        ],
        textdata3: [
            {
                text: "> Responsability",
            },
            {
                text: "> Terms of Use",
            },
            {
                text: "> About Cookies",
            },
            {
                text: "> Privacy policy",
            },
            {
                text: "> Accessibility",
            },
            {
                text: "> Information",
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