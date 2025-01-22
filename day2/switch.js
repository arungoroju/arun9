let day = prompt("Enter day for sport :");

switch(day) {
    case 'Monday':
    case 'Tuesday':
        {
        console.log("Football");}
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log("Cricket");
        break;
    case 'Friday':
        console.log("Volleyball");
        break;
    case 'Saturday':
        console.log("KOKO");
        break;
    case 'Sunday':
        console.log("Holiday");
        break;
    default:
        console.log("No matching sport found !");
}
