function* chooseYourAdventure() {
// 	console.log(yield adventure.say('Hey there!'));
// 	console.log(yield adventure.say('Woah', 'This is cool'));
// 	console.log(yield adventure.ask('Woah', 'This is cool'));
// 	console.log(yield adventure.choose('Woah', 'This is cool', 'Hello world'));
// 	console.log(yield adventure.say('That\'s all folks!', 'THE END'));
// 

	yield adventure.say("Welcome, to your adventure");

	var myName = yield adventure.ask("What is your name?");

	yield adventure.say("Welcome to the adventure, "+myName);

	var myWeapon = yield adventure.choose('what weapon would you like to use during your adventure?','Lightsabre','Blaster','Love');

	yield adventure.say('You chose a '+ myWeapon);

	var location = yield adventure.choose('Where would you like to go?, ');

	if(location === 'Tattoine') {
		yield adventure.say('You die of dehydration');
	}	

	else(location === 'Hoth') {
		yield adventure.say('You froze to death');
	}
}