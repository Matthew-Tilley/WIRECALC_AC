var app = new Vue({
    
    el:     "#app",
    
    
    data: {
        
        picked: '',
        
        
        breaker: '',
        
        
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
        
        
        
    },  /* END OF "DATA" SECTION */
    
    
    
    methods: {
        
        
        productDisplay(){
            
            if (this.breaker == 15)
                {
                    console.log("LKJALKJAD");
                }
        }
        
        
    }
    
    
    
})