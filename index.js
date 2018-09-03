var app = new Vue({
    
    el:     "#app",
    
    data: {

        open:    false,

        voltage: null,

        maxWatts: null,

        amperages: [15, 20, 25, 30, 40, 50],

        selectedAmps: null,

        validBreaker: "",

        breakers120: [
            
            {   
                productCode:    "HOM115",
                productPoles:   "SINGLE", 
                productAmps:    15,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM115.jpeg",
                copperWire:     "#14 AWG",
                aluminumWire:   "#12 AWG",
            },

            {   
                productCode:    "HOM120",
                productPoles:   "SINGLE", 
                productAmps:    20,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM120.jpeg",
                copperWire:     "#12 AWG",
                aluminumWire:   "#10 AWG", 
            },

            {   
                productCode:    "HOM125",
                productPoles:   "SINGLE", 
                productAmps:    25,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM125.jpeg",
                copperWire:     "#10 AWG",
                aluminumWire:   "#10 AWG",
            },

            {   
                productCode:    "HOM130",
                productPoles:   "SINGLE", 
                productAmps:    30,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM130.jpeg",
                copperWire:     "#10 AWG",
                aluminumWire:   "#8 AWG",
            },

            {   
                productCode:    "HOM140",
                productPoles:   "SINGLE", 
                productAmps:    40,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM140.jpeg",
                copperWire:     "#8 AWG",
                aluminumWire:   "#8 AWG",
            },

            {   
                productCode:    "HOM150",
                productPoles:   "SINGLE", 
                productAmps:    50,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM150.jpeg",
                copperWire:     "#6 AWG",
                aluminumWire:   "#6 AWG",
            },

        ],

        breakers240: [
            
            {   
                productCode:    "HOM215",
                productPoles:   "DOUBLE", 
                productAmps:    15,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM215.jpeg",
                copperWire:     "#14 AWG",
                aluminumWire:   "#12 AWG",
            },

            {   
                productCode:    "HOM220",
                productPoles:   "DOUBLE", 
                productAmps:    20,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM220.jpeg",
                copperWire:     "#12 AWG",
                aluminumWire:   "#10 AWG",
            },

            {   
                productCode:    "HOM225",
                productPoles:   "DOUBLE", 
                productAmps:    25,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM225.jpeg",
                copperWire:     "#10 AWG",
                aluminumWire:   "#10 AWG",
            },

            {   
                productCode:    "HOM230",
                productPoles:   "DOUBLE", 
                productAmps:    30,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM230.jpeg",
                copperWire:     "#10 AWG",
                aluminumWire:   "#8 AWG",
            },

            {   
                productCode:    "HOM240",
                productPoles:   "DOUBLE", 
                productAmps:    40,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM240.jpeg",
                copperWire:     "#8 AWG",
                aluminumWire:   "#8 AWG",
            },


            {   
                productCode:    "HOM250",
                productPoles:   "DOUBLE", 
                productAmps:    50,
                productSeries:  "HOMELINE",
                productImage:   "ASSETS/IMAGES/HOM250.jpeg",
                copperWire:     "#6 AWG",
                aluminumWire:   "#6 AWG",
            },
        ],

        userBasket: [],

        test: "LKAJSDLKAJSDLKJASDLKJASDLKJASD",

              
    },  /* END OF "DATA" SECTION */
    
    
    methods: {
         
        maximumWattage: function() {
            
            this.setValidBreaker();

            {
                return this.maxWatts = (this.selectedAmps * this.voltage) * .8;
                // Calculating 80% of absolute maximum for a margin of safety.
            }

        }, 

        setActive: function(index) {

            this.active = index;

        },       

        setValidBreaker: function() {

            if (this.voltage == 120) {

                for (i in this.breakers120)
                {
                    if (this.selectedAmps == this.breakers120[i].productAmps)
                    {
                        this.validBreaker = this.breakers120[i];
                    }
                }
            }

            if (this.voltage == 240) {

                for (i in this.breakers240)
                {
                    
                    if (this.selectedAmps == this.breakers240[i].productAmps)
                    {
                        this.validBreaker = this.breakers240[i];
                    }
                    
                }
            }

        },   /* END setValidBreaker METHOD */

        addToCart: function(item) {

            this.userBasket.push({
                    test: this.validBreaker.productCode,
            });

            console.log(this.userBasket.test);
        },

    },


}); /* END VUE APP INSTANCE */

let map;

function initMap(){
   
    map = new google.maps.Map(document.getElementById("map"), {

    });

}