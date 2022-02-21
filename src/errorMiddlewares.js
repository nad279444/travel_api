const notFound = (req,res,next) => {
    const error = new Error('this is the wrong route');
    res.status(404);
    next(error);  
}

const otherErrors = (error,req,res,next) => {
    const statusCode =  res.statusCode === 200 ? 500: res.statusCode
    res.status(statusCode);
    res.json({
        message: error.message
    })
}

export {notFound,otherErrors};
