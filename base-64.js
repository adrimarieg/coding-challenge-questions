/*
Daily Coding Challenge | November 19, 2024

This problem was asked by Paypal.

Read this Wikipedia article on Base64 encoding. Implement a function that converts a 
hex string to base64. For example, the string: deadbeef
should produce: 3q2+7w==
*/

function convertToBaseSixFour(string){
    //convert string to binary data
    let byteArray = new Uint8Array(string.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

    //convert binary data to base64
    let base64String = btoa(String.fromCharCode(...byteArray));

    return base64String;
};

console.log(convertToBaseSixFour("deadbeef"))

