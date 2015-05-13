function* chooseYourAdventure() {
// 	console.log(yield adventure.say('Hey there!'));
// 	console.log(yield adventure.say('Woah', 'This is cool'));
// 	console.log(yield adventure.ask('Woah', 'This is cool'));
// 	console.log(yield adventure.choose('Woah', 'This is cool', 'Hello world'));
// 	console.log(yield adventure.say('That\'s all folks!', 'THE END'));

	yield adventure.say("Welcome to your adventure, padawan!");

	var myName = yield adventure.ask("What is your name?");

	yield adventure.say("Let the adventure begin, "+myName);

	var myWeapon = yield adventure.choose('what weapon would you like to use during your adventure?','Lightsabre','Blaster','Love');

	yield adventure.say('You chose a '+ myWeapon);

	var location = yield adventure.choose('Where would you like to go?', 'Tattoine', 'Hoth');

	if(location === 'Tattoine') {
		yield adventure.say('You die of dehydration!');
	}	

	else {
		yield adventure.say('You freeze to death!')
	}

	yield adventure.say("You died! May the Force be with you!")
}