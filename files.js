const fs = require("fs")

//Reading files
fs.readFile("./docs/blog1.txt", (err , data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

console.log("last line")

//Writing files
fs.writeFile("./docs/blog1.txt" , "Good day!!" , () =>{
    console.log("file edited")
} )

fs.writeFile("./docs/blog2.txt" , "Good day!!" , () =>{
    console.log("New file created and data added")
} )

//directories
if(!fs.existsSync("./assets")){

    fs.mkdir("./assets" , (err) => {
        if(err){
            console.log(err)
        }
        console.log("folder created")
        
    })
}else {
    fs.rmdir("./assets", (err) => {
        if(err){
            console.log(err)
        }
        console.log("Folder deleted")
    })
}

//Deleting files
if(fs.existsSync("./docs/blog2.txt")) {
    fs.unlink("./docs/blog2.txt", (err) => {
        if(err){
            console.log(err)
        }
        console.log("file deleted")
    })
}