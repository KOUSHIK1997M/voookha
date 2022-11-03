const aws = require("aws-sdk")

//===================================> (AWS) <===========================================//


aws.config.update({
    accessKeyId: "",
    secretAccessKey: "",
    region: ""
})

let uploadFile = async (file) => {
    return new Promise((resolve, reject) => {
        // this function will upload file to aws and return the link
        let s3 = new aws.S3({ apiVersion: '2006-03-01' }); // we will be using the s3 service of aws

        let uploadParams = {
            ACL: "",
            Bucket: "",  //HERE
            Key: "voookha/" + file.originalname, //HERE 
            Body: file.buffer
        }


        s3.upload(uploadParams, (err, data) =>{
            if (err) {
                return reject({ "error": err })
            }
            // console.log(data)
            console.log("file uploaded succesfully")
            return resolve(data.Location)
        })

    })
}

module.exports = { uploadFile }