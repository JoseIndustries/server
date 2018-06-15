// here requires dendencies 
//STEP1
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
var path = require('path');
var mongoose = require('mongoose');
var multer = require('multer');
var upload = multer();
require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({
    accessToken: '7Ksd1Wr4fYAAAAAAAAAAB0u6pB0KuO374ftua7l8JKqyRi6oU0REKwFUX745tSEb'
});

mongoose.connect('mongodb://admin12:not4any1@ds245240.mlab.com:45240/latinamamas');
var db= mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('succesfully connected to database');
  // we're connected!
});
//Step2
var app = new express();

//step3
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));





app.get('/', (request, response) => {
    var data = [
        {
            title: "blog number 1",
            name: "roberto",
            content: "this is a blog from my homemade database"
        }
    ]
    response.send(data)
})
app.post('/login', function (request, response) {
    'use strict';
    const nodemailer = require('nodemailer');
    
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'colmenje2638@gmail.com', // generated ethereal user
                pass: 'BigLamp15' // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: 'colmenje2638@gmail.com', // sender address
            to: 'colmenje2638@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            template: 'index',
            context: {
                lastName: request.body.lastName,
                firstName: request.body.firstName,
                email: request.body.email,
                NewUser: request.body.NewUser.value,
                paragraph_text: request.body.paragraph_text,
                displayEmail5: request.body.displayEmail5,
                radio: request.body.radio,
            }
        };
    
        let handlebarsOptions = {
            viewEngine: 'handlebars',
            viewPath: path.resolve('./templates'),
            extName: '.html',
        }

        transporter.use('compile', hbs(handlebarsOptions));


        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });

    response.status(200).send('ok');
});

app.post('/sendImage',upload.single('file'), function(req,res){
    const imageName = req.file.originalname;
    const imageMeat = req.file.buffer;

    dbx.filesUpload(
        {
            path: '/pictures/' + imageName, 
            contents: imageMeat,

    }
)
.then(function(response) {
    dbx.sharingCreateSharedLink({
        path: '/pictures/' + imageName,
    })
    .then(function(response) {
        res.status(200).send({
            data: response
        })
    })
})
.catch(function(err){

    res.status(500).send({
        data: err
    })
   
    
    })
});
    
   


var port = 8080
app.listen(port, function () {
    console.log('my server is running', port);
})
//step4
//app.get('/', function (request, response) {
    //response.status(200).send('Hi My Server is Working')
//})
//fake blog
//app.get('/getblogs', function (request, response) {
   // var data = [
       // {
           // title: "blog number 1",
            //name: "roberto",
           // content: "this is a blog from my homemade database"
       // 
  //  ]
//})

//step5
//var port = 3000;
//app.listen(port, function () {
   // console.log('My Server is Running', port);
//})

