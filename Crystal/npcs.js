
function rockMonster (room, id) {
this.hitpoints = 100;

this.room = room;

this.id = id;

this.type = "Rock Monster"

this.onHit = function (damage) {
console.log ("ouch")
this.hitpoints = this.hitpoints - damage

if (this.hitpoints <= 0) {
return true;
// return this.onDeath ();
}

else {
return false;
}
}

this.onDeath = function () {
console.log ("im ded")
return true;
}
}

function Hodgepodge (room, id) {
this.hitpoints = 500000;

this.room = room;

this.id = id;

this.type = "Hodgepodge"

this.onHit = function (damage) {
console.log ("ouch")
this.hitpoints = this.hitpoints - damage

if (this.hitpoints <= 0) {
return true;
// return this.onDeath ();
}

else {
return false;
}
}

this.onDeath = function () {
console.log ("im ded")
return true;
}
}

function tardigrade (room, id) {
this.hitpoints = 500;

this.room = room;

this.id = id;

this.type = "Tardigrade"

this.onHit = function (damage) {
console.log ("ouch")
this.hitpoints = this.hitpoints - damage

if (this.hitpoints <= 0) {
return true;
// return this.onDeath ();
}

else {
return false;
}
}

this.onDeath = function () {
console.log ("im ded")
return true;
}
}
