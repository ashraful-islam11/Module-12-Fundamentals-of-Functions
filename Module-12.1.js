
// todo:        Module no - 12.1    topic:   What are functions and function syntax



/**
 *todoL                          what is function: ?????????????????????????????
 ** 1. Function হলো JavaScript-এর এমন একটি কোড ব্লক যা একটি নির্দিষ্ট কাজ করার জন্য তৈরি করা হয়। একবার Function লিখে সেটিকে বারবার ব্যবহার করা যায়। এতে একই কোড বারবার লিখতে হয় না, কোড পরিষ্কার থাকে, ভুল কম হয় এবং বড় প্রোগ্রাম সহজে পরিচালনা করা যায়।
 */

//? how to declare js function: js function syntax: 
        //* keyword + meaningFul Function Name  + ( parameter ) + {  all instruction}

 function powerButton () {
    console.log('রাইস কুকার কে বললাম রান্না কর।');
    console.log('সে প্রথমে পানি গরম করে,');
    console.log('চাউল সিদ্ধ করে');
    console.log('খাবার সম্পুন্ন রান্না করে');
    console.log(' automatically  বন্ধ করে দেয়।');

 }


function makeCoffee() {
    console.log("১. কেটলিতে দ্রুত পানি ফুটানো হচ্ছে...");
    console.log("২. কাপে ১ চামচ কফি পাউডার নেওয়া হলো।");
    console.log("৩. পরিমাণমতো চিনি যোগ করা হলো।");
    console.log("৪. কাপে গরম পানি ঢেলে ভালো করে মেশানো হচ্ছে।");
    console.log("৫. এই নিন, আপনার গরম গরম কফি পরিবেশন করা হলো! ☕");
}



function cookNoodles() {
    console.log("১. প্যানে পানি গরম হতে দিন।");
    console.log("২. পানি ফুটে উঠলে নুডুলসগুলো ছেড়ে দিন।");
    console.log("৩. নুডুলসের ভেতরের মসলাটা দিয়ে দিন।");
    console.log("৪. ২-৩ মিনিট ভালোভাবে নেড়েচেড়ে সেদ্ধ করুন।");
    console.log("৫. বাটিতে ঢেলে গরম গরম নুডুলস পরিবেশন করুন! 🍜");
}




// এখন আপনি কিচেনে গিয়ে , শেফ কে শুধু বলবেন , কফি বানাও, নুডুস রান্না কর,  ভাত রান্না কর।


powerButton();

makeCoffee();

cookNoodles();



/**
 *  
 * todo:    Function কী?
 *   Function হলো পুনরায় ব্যবহারযোগ্য (Reusable) কোডের ব্লক।
 *   এটি একটি নির্দিষ্ট কাজ করে।
 *   Call করলে তবেই কাজ করে।
 *   কোডকে ছোট ও গোছানো রাখে।
 *   Parameter গ্রহণ করতে পারে।
 *   return দিয়ে ফলাফল ফেরত দিতে পারে।
  
 
 * todo:  Function কেন ব্যবহার করি?
 *   একই কোড বারবার না লেখার জন্য।
 *   কোড পুনরায় ব্যবহার করার জন্য।
 *   কোড পরিষ্কার ও সহজবোধ্য করার জন্য।
 *   Debugging সহজ করার জন্য।
 *   বড় প্রোগ্রাম সহজে পরিচালনা করার জন্য।
 */

