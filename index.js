var app = new Vue({
    
    el:     "#app",
    
    
    data: {
        
        picked: null,
        
        breaker: null,

        amperage: null,

        voltage: null,

        maxWatts: null,

        
        
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
    
    
    /* QUESTION FOR KATIE 07/31/2018
    
    Okay...this is a perfect example of where I get confused with
    function returns.
    
    The calculation below determines maximum wattage for a given 
    circuit rating.  Problem is, I can get the resulting value "out" 
    via console.log() but...obviously can't *DO* anything but *VIEW*
    that output.

    I have also tried assigning it to a variable, but that doesn't
    seem to work.  (That way, the variable would "equal" whatever
    it's function comes up with, in terms of a value.)  It's like 
    the value I need is "stuck" inside there and I can't figure
    out how to get it / do anything else with it.
    
    */
    
    methods: {
        
        
        maximumWattage: function() {

            return this.maxWatts = (this.amperage * this.voltage);
        }

        
    }

)};
