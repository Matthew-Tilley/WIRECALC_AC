var app = new Vue({
    
    el:     "#app",
    
    
    data: {
        
        selected: null,
        
        breaker: null,

        amperage: null,

        voltage: null,

        maxWatts: null,

        image: null,

        
        
        breakers: [
        
            { 
                productCode:        "HOM115",
                productAmperage:    15,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM115.jpeg",
                minNMB_AWG:         "14 AWG" 
            },


            { 
                productCode:        "HOM120",
                productAmperage:    20,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM120.jpeg",
                minNMB_AWG:         "12 AWG"
            },


            { 
                productCode:        "HOM125",
                productAmperage:    25,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM125.jpeg",
                minNMB_AWG:         "10 AWG"
            },


            { 
                productCode:        "HOM130",
                productAmperage:    30,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM130.jpeg",
                minNMB_AWG:         "10 AWG" 
            },


            { 
                productCode:        "HOM140",
                productAmperage:    40,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM140.jpeg",
                minNMB_AWG:         "08 AWG" 
            },


            { 
                productCode:        "HOM150",
                productAmperage:    50,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM150.jpeg",
                minNMB_AWG:         "06 AWG" 
            }
                
        ],  /* END OF "BREAKERS" ARRAY */



        variants [

            {
                variantId: 1234,
                details: ["This is 1234"],
                image: "ASSETS/IMAGES/HOM150.jpeg"

            }


            {
                variantId: 5678,
                details: ["This is 5678"],
                image: "ASSETS/IMAGES/HOM115.jpeg"

            }


        ],

              
    },  /* END OF "DATA" SECTION */
    
    
    methods: {
        
        maximumWattage: function() {

            return this.maxWatts = (this.amperage * this.voltage) * .8;
            // Calculating 80% of absolute maximum for a margin of safety.

        }, 


 




     
       
        
    },

});