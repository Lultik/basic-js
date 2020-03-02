module.exports = function createDreamTeam(members) {
  const dreamTeam = [];
  
  if(!Array.isArray(members)) return false
  members.map(item => {
    if(typeof item === 'string'){
      dreamTeam.push([...item.match(/[A-Za-z]/)].join('').toUpperCase())
    }
  })
  return dreamTeam.sort().join('')
};
