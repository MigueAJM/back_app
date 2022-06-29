export default (err,req,res,next) => {
    res
      .status(409)
      .json({"status":false,
             "statusCode":409,
             "message":err.message,
             "content":{}
    })
  }