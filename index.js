var app = new Vue({
    
    el:     "#app",
    
    
    data: {
        
        picked: '',
        breaker: ''
    },
    
    
    breakers: [
        
        { 
            productID:          "HOM115",
            productAmperage:    15,
            productPoles:       "SINGLE",
            productImage:       "ASSETS/IMAGES/HOM115.jpeg",
            minSuggestedAWG:    14 
        },
        
        
        { 
            productID:          "HOM120",
            productAmperage:    20,
            productPoles:       "SINGLE",
            productImage:       "ASSETS/IMAGES/HOM120.jpeg",
            minSuggestedAWG:    12 
        },
        
        
        { 
            productID:          "HOM125",
            productAmperage:    25,
            productPoles:       "SINGLE",
            productImage:       "ASSETS/IMAGES/HOM125.jpeg",
            minSuggestedAWG:    10
        },
        
        
        { 
            productID:          "HOM130",
            productAmperage:    30,
            productPoles:       "SINGLE",
            productImage:       "ASSETS/IMAGES/HOM130.jpeg",
            minSuggestedAWG:    10 
        },
        
        
        { 
            productID:          "HOM140",
            productAmperage:    40,
            productPoles:       "SINGLE",
            productImage:       "ASSETS/IMAGES/HOM140.jpeg",
            minSuggestedAWG:    08 
        },
        
        
        { 
            productID:          "HOM150",
            productAmperage:    50,
            productPoles:       "SINGLE",
            productImage:       "ASSETS/IMAGES/HOM150.jpeg",
            minSuggestedAWG:    06 
        }
        
        
    ],
    
    
    methods: {
        
        
    }
    
    
    
})