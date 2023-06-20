let month = "july";


switch (month) {
    case "january":
    case "february":
    case "december":
    console.log("winter")
    break;
    case "march":
    case "april":
    case "may":
    console.log("spring")
    break;
    case "june":
    case "july":
    case "august":
    console.log("summer")
    break;
    case "september":
    case "october":
    case "november":
    console.log("autumn")
    break;  
}

let a = 20;

let b = 21;

let c = 8;

switch (true) {
    case (a >= b && a >= c):
        console.log(`max is ${a}`)
        break;
        case (b >= a && b >= c):
        console.log(`max is ${b}`)
        break;
        case (c >= a && c >= b):
        console.log(`max is ${c}`)
        break;
}
 