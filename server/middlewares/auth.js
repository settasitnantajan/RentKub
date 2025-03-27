exports.authCheck  = (req, res, next) => {
    try {
        console.log('Middleware')
        if(true) {
            next()
        } else {
            res.status(401).send('Unauthorized')
            console.log('Unauthorized')
        }  
        
    } catch (error) {
        console.log(error)
    }
    
}