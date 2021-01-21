// https://github.com/A-K-M-Fozlol-Hoq/BASIC-JS/blob/main/assignment.js

// This function converts from kilometer to meter
function kilometerToMeter(km){
    if (km<0){
        return "distance cannot be negative";
    }
    else{
        return km*1000;
    }
}

// This function calculates the budget
function budgetCalculator(watch,phone,laptop){
    if (watch <0 || phone <0 || laptop <0){
        return "number of product cannot be negative";
    }
    else{
        // Watches, phones and laptops price are 50,100 and 500 dollars respectively
        return watch*50 + phone*100 + laptop*500;
    }
}

// This function calculates the hotel-cost.
function hotelCost(day){
    if (day<0){
        return "day cannot be negative.";
    }
    else if (day<=10){
        return day*100;
    }
    else if (day <=20){
        return 10*100 + (day-10)*80;
    }
    else{
        return 10*100 + 10*80 + (day-20)*50;
    }
}

// This function returns the biggest name of all your friends
function megaFriend(friendNames){
    if(friendNames.length<=0){
        return "array cannot be empty. Please send a valid array.";
    }

    // Handle Exception => if the array is not empty, but the friends name is empty (or garbage)
    if (friendNames[0].length<=2){
        return "Please send valid names.";
    }

    else{
        let bigName=friendNames[0];
        for(let i=0; i< friendNames.length; i++){
            if (friendNames[i].length > bigName.length){
                bigName= friendNames[i];
            }
        }
        return bigName;
    }
}



// Some Test Cases

/*
console.log(kilometerToMeter(-1));
console.log(kilometerToMeter(1));
console.log(kilometerToMeter(50.89));

console.log(budgetCalculator(1,-2,1));
console.log(budgetCalculator(1,2,3));
console.log(budgetCalculator(3,2,1));
console.log(budgetCalculator(5,3,5));

console.log(hotelCost(0));
console.log(hotelCost(-1));
console.log(hotelCost(8));
console.log(hotelCost(18));
console.log(hotelCost(28));
console.log(hotelCost(70));

console.log(megaFriend(['AKM','Fozlol','Hoq','Metul','Abul','Kashem','Mohammad']));
console.log(megaFriend(['Mohammad','AKM','Fozlol','Hoq','Metul','Abul','Kashem']));
console.log(megaFriend([' ']));
console.log(megaFriend(['']));
console.log(megaFriend(['a'])); //Not a name
console.log(megaFriend(['ab'])); //Not a name
console.log(megaFriend(['Kashem','Mohammad','AKM','Fozlol','Hoq','Metul','Abul']));
console.log(megaFriend(['Abul','Kashem','Mohammad','AKM','Fozlol','Hoq','Metul']));
console.log(megaFriend([]));
console.log(megaFriend(['Metul','Abul','Kashem','Mohammad','AKM','Fozlol','Hoq']));
console.log(megaFriend(['Hoq','Metul','Abul','Kashem','Mohammad','AKM','Fozlol']));
console.log(megaFriend(['Fozlol','Hoq','Metul','Abul','Kashem','Mohammad','AKM']));*/