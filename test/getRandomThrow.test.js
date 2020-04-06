//IMPORT MODULES under test here:
import { getRandomThrow } from '../getRandomThrow.js';

//import example from '../src/example.js';

const test = QUnit.test;

test('should return rock, paper, or scissors', function(assert) {
    // Arrange
    // Set up your parameters and expectations

    //Act 
    //Call the function you're testing and set the result to a const
    const rock = getRandomThrow(1);
    //Assert
    //Make assertions about what is expected valid result
    assert.equal(rock, 'rock');
});
