var app = new Vue({
    
    el:     "#app",
    
    
    data: {

        
        voltage: null,

        maxWatts: null,

        amperages: [15, 20, 25, 30, 40, 50],

        selectedAmps: null,

        validBreaker: "",

        breakers: [
            
            {   
                id:             1,
                productCode:    "HOM115",
                productPoles:   "SINGLE", 
                productAmps:    15,
                productImage:   "../ASSETS/IMAGES/HOM115.jpeg",
                CU_NMB_Wire:    "#14 AWG",
                CU_UFB_Wire:    "#14 AWG",
                CU_THW_Wire:    "#14 AWG",
                CU_THWN_Wire:   "#14 AWG",
                CU_SE_Wire:     "#14 AWG",
                CU_USE_Wire:    "#14 AWG",
                CU_XHHW_Wire:   "#14 AWG",

            },

            {   
                id:             2,
                productCode:    "HOM120",
                productPoles:   "SINGLE", 
                productAmps:    20,
                CU_NMB_Wire:    "#12 AWG",
                CU_UFB_Wire:    "#12 AWG",
                CU_THW_Wire:    "#12 AWG",
                CU_THWN_Wire:   "#12 AWG",
                CU_SE_Wire:     "#12 AWG",
                CU_USE_Wire:    "#12 AWG",
                CU_XHHW_Wire:   "#12 AWG", 
            },

            {   
                id:             3,
                productCode:    "HOM125",
                productPoles:   "SINGLE", 
                productAmps:    25,
                CU_NMB_Wire:    "#10 AWG",
                CU_UFB_Wire:    "#10 AWG",
                CU_THW_Wire:    "#10 AWG",
                CU_THWN_Wire:   "#10 AWG",
                CU_SE_Wire:     "#10 AWG",
                CU_USE_Wire:    "#10 AWG",
                CU_XHHW_Wire:   "#10 AWG", 
            },

            {   
                id:             4,
                productCode:    "HOM130",
                productPoles:   "SINGLE", 
                productAmps:    25,
                CU_NMB_Wire:    "#10 AWG",
                CU_UFB_Wire:    "#10 AWG",
                CU_THW_Wire:    "#10 AWG",
                CU_THWN_Wire:   "#10 AWG",
                CU_SE_Wire:     "#10 AWG",
                CU_USE_Wire:    "#10 AWG",
                CU_XHHW_Wire:   "#10 AWG", 
            },

            {   
                id:             5,
                productCode:    "HOM140",
                productPoles:   "SINGLE", 
                productAmps:    40,
                CU_NMB_Wire:    "#8 AWG",
                CU_UFB_Wire:    "#8 AWG",
                CU_THW_Wire:    "#8 AWG",
                CU_THWN_Wire:   "#8 AWG",
                CU_SE_Wire:     "#8 AWG",
                CU_USE_Wire:    "#8 AWG",
                CU_XHHW_Wire:   "#8 AWG", 
            },

            {   
                id:             6,
                productCode:    "HOM130",
                productPoles:   "SINGLE", 
                productAmps:    50,
                CU_NMB_Wire:    "#6 AWG",
                CU_UFB_Wire:    "#6 AWG",
                CU_THW_Wire:    "#6 AWG",
                CU_THWN_Wire:   "#6 AWG",
                CU_SE_Wire:     "#6 AWG",
                CU_USE_Wire:    "#6 AWG",
                CU_XHHW_Wire:   "#6 AWG", 
            },


        ],


              
    },  /* END OF "DATA" SECTION */
    
    
    methods: {
         
        maximumWattage: function() {
            
            this.setValidBreaker();

            return this.maxWatts = (this.selectedAmps * this.voltage) * .8;
            // Calculating 80% of absolute maximum for a margin of safety.

        }, 

        setActive: function(index) {

            this.active = index;

        },

        setValidBreaker: function(){

            for (i in this.breakers)
            {
                if (this.selectedAmps == this.breakers[i].productAmps)
                {
                    this.validBreaker = this.breakers[i];
                    console.log(this.validBreaker);
                }
            }
        }

    },


    



}); /* END VUE APP INSTANCE */













 /* maximumWattage: function() {

            return this.maxWatts = (this.amperage * this.voltage) * .8;
            // Calculating 80% of absolute maximum for a margin of safety.

        }, 

/* breakers: [
        
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


       