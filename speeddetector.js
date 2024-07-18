function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointThreshold = 5;
    const maxDemeritPoints = 12;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPointThreshold);
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage
const speed = parseInt(prompt("Enter the speed of the car: "));
checkSpeed(speed);
