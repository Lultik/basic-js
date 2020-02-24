module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    function calculateTurns(disksNumber) {
        return disksNumber === 1 ? 1 : 2*calculateTurns(disksNumber-1) + 1
    }
    let turns = calculateTurns(disksNumber);
    return {turns: turns, seconds: turns / (turnsSpeed/3600)}
};