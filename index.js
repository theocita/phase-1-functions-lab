// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) { 
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);

    if (feet <= 400){ 
        return 0 ;
    } else if (feet > 400 && feet <= 2000){
        return 2.56;
    }else if (feet > 2000 && feet <=2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}