document.querySelector('.container span').addEventListener('click', ()=>{
    window.open('','_self').close();
})
function generateFragments(){
    return Math.floor(Math.random()*10);
}
function generateBookingID(){
    return `${generateFragments()}${generateFragments()}${generateFragments()}${generateFragments()}${generateFragments()}${generateFragments()}-${generateFragments()}${generateFragments()}${generateFragments()}`;
}
let bodyArr = new Array();
new URLSearchParams(window.location.search).forEach((value, key, index)=>{
    bodyArr.push(value);
    console.log(key + " = " + value)
});
const bookingID = generateBookingID();
document.querySelector('.container .id').innerHTML = `ClientID: ${bookingID}`;
let body = `ClientID = ${bookingID}, Client Name: ${bodyArr[0]}, Client Email: ${bodyArr[1]}, Client Phone Number: ${bodyArr[2]}, Client Company Name: ${bodyArr[3]}, Client Preferred Domain Extension: ${bodyArr[4]}, Client Preferred Domain Name: ${bodyArr[5]}, Client Site Description: ${bodyArr[6]}, Client Plan: ${bodyArr[7]}, Client Has Logo?: ${bodyArr[8]}, Client Wants Logo Redesign?: ${bodyArr[9]}`;
function sendEmail() { 
    Email.send({ 
    Host: "smtp.gmail.com", 
    Username: "TheesaanEnterprises@gmail.com", 
    Password: "QuEsTiOn13!#", 
    To: 'theesaan@gmail.com', 
    From: "TheesaanEnterprises@gmail.com", 
    Subject: `Details recorded for Client ID ${bookingID}`, 
    Body: body, 
    }) 
    .then(()=>{
        Email.send({ 
            Host: "smtp.gmail.com", 
            Username: "TheesaanEnterprises@gmail.com", 
            Password: "QuEsTiOn13!#", 
            To: bodyArr[1], 
            From: "TheesaanEnterprises@gmail.com", 
            Subject: `Details recorded for Client ID ${bookingID}`, 
            Body: `Hello ${bodyArr[0]}, thanks for starting your digital journey with Theesaan Enterprises. We have recorded your details. We at Theesaan Enterprises value our work along with customer satisfaction the most. So, we don't even want your money now. After the deployment of the site and all your design and functionality needs fulfilled, you can pay. However, mid-cancellation of the project is never appreciated. Thank you.`, 
            }).then(()=>{
                document.querySelector('.container .details').innerHTML = `Your request was processed successfully. Thanks for choosing Theesaan Enterprises. You may close this window now with a click on the below button`;
                document.querySelector('.container span').classList.remove('make-invisible');
            });
    }); 
} 
sendEmail();