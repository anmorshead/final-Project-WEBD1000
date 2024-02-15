(function(){
    //added this to make it easier to test:
    const pokerHands = {
        royal_flush: "https://prog2700.onrender.com/pokerhandtest/royalflush",
        straight_flush: "https://prog2700.onrender.com/pokerhandtest/straightflush",
        four_of_a_kind: "https://prog2700.onrender.com/pokerhandtest/fourofakind",
        full_house: "https://prog2700.onrender.com/pokerhandtest/fullhouse",
        flush: "https://prog2700.onrender.com/pokerhandtest/flush",
        straight: "https://prog2700.onrender.com/pokerhandtest/straight",
        three_of_a_kind: "https://prog2700.onrender.com/pokerhandtest/threeofakind",
        two_pair: "https://prog2700.onrender.com/pokerhandtest/twopair",
        one_pair: "https://prog2700.onrender.com/pokerhandtest/onepair",
        high_card: "https://prog2700.onrender.com/pokerhandtest/highcard"
      };
    function pickFiveCards() {
        fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=5")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                const result = highestHand(json.cards);
                document.getElementById("result").innerHTML = result
                console.log(result)
                
                // update image elements for all 5 cards using forEach
                json.cards.forEach((card, index) => {
                    let cardImage = card.image;
                    document.getElementById(`card${index + 1}`).src = cardImage;
                });
            })
    }
    
    const faceCards = {"J":11, "Q":12, "K":13, 0: 10, "A":14} //object wtih translations of face cards
    const reverseFaceCards = {11: "J", 12: "Q", 13: "K", 14: "A", 10: "10"}

    function hasRoyalFlush(cardsToCheck){
        // cardsToCheck = ["JH", "0D", "4H", "9C", "2S"]
        //check for same suit
        let royalFlush = ["A","J","Q","K","0"]
        console.log(cardsToCheck)

        if(!sameSuit(cardsToCheck)){ //must be same suit
            return false
        }
        
        if(hasDuplicates(cardsToCheck,2)){//can't have any duplicates
            return false 
        }
        // if the suits are all the same and the cards are AJQK10 
        let isFlush = true

        for(let i=0;i<royalFlush.length;i++){//iterate through royalFlush array
            if(!royalFlush.includes(cardsToCheck[i].charAt(0))){//if it finds a card that doesnt match: 
                isFlush = false//it returns false
                break//then stops iterating
            } 
        } 
        return isFlush //if it matches all characters, its a royal flush
    
    }
    function hasStraightFlush(cardsToCheck){

        if(!sameSuit(cardsToCheck)){//has to be same suit
            return false
        }
        if(!isSequential(cardsToCheck)){//has to be sequential
            return false
        }
        return true
        //if the suits are all the same and the cards are in sequence
    }
    function hasFourOfAKind(cardsToCheck){

        //if there are 4 cards with the same value
        if(hasDuplicates(cardsToCheck,4)){
            return true
        }
    }
    function hasFullhouse(cardsToCheck){
        let returnedVal = hasDuplicates(cardsToCheck,3) //get returned value from hasDuplicates

        if(returnedVal){ //if truthy...
            const filteredArray = cardsToCheck.filter(item => item.charAt(0) !== returnedVal);//filter out returned value
        
            if(hasDuplicates(filteredArray,2)){//check for 2 duplicates on new array
                return true;
            }
        }
    }
    function hasFlush(cardsToCheck){

        //if all cards are same suit
        if(sameSuit(cardsToCheck)){
            return true
        }

    }
    function hasStraight(cardsToCheck){

        //five cards in a sequence, any suit
        if(isSequential(cardsToCheck)){
            return true
        }
    }
    function hasThreeOfAKind(cardsToCheck){

        //three cards of the same value, any suit
        if(hasDuplicates(cardsToCheck,3)){
            return true
        }
    }
    function hasTwoPair(cardsToCheck) {

        //has two sets of two cards with the same values
        const values = [];//set up empty array to hold only value of cards
        let firstPairValue;//keeps track of value of first pair encountered.
    
        for (let i = 0; i < cardsToCheck.length; i++) {
            const currentCardValue = cardsToCheck[i].charAt(0);//checks each card value, assigns to variable
    
            if (values.indexOf(currentCardValue) !== -1) {//if currentcardValue exists in values array,
                if (!firstPairValue) { // if no value assigned to firstPairValue:
                    firstPairValue = currentCardValue; //the current card is the firstPairValue
                } else if (currentCardValue !== firstPairValue) {//else if values are different,
                    return true; // Found two distinct pairs
                }
            } else {
                values.push(currentCardValue); //no pair, new value
            }
        }
    
        return false; //two pairs arent present
    }
    
    
    
    function hasPair(cardsToCheck){

        //has two cards with same value
        if(hasDuplicates(cardsToCheck,2)){
            return true
        }
    }
    function hasHighCard(cardsToCheck){

        //card with highest value
    
        let myArray=[] //used to store card values
        cardsToCheck.forEach(card => {
            myArray.push(card.charAt(0)); // extracts the value of the card, pushes to new array
        });
        
        for(let i=0;i<myArray.length;i++){
            if(faceCards[myArray[i]]){//checks if card exists in faceCards object
                myArray[i] = faceCards[myArray[i]]//if so it replaces current value with faceCard value
            } else {
                myArray[i] = parseInt(myArray[i])//else it turns it into number(from string)
            }
        } 
        console.log(myArray)
        let maxNum = (Math.max(...myArray))//need ... to use with an array
        if(reverseFaceCards[maxNum]){// if reverseFaceCards object includes values
            return reverseFaceCards[maxNum];//return value of that key
        } else {
            return maxNum.toString(); // Return as string if not a face card
        }

    }



    /////////////////////////////  helper functions: /////////////////////////////

    function sameSuit(cardsToCheck){
        let hasSameSuit = true
        let firstCardSuit = cardsToCheck[0].charAt(1)//checks the first cards suit

        for (let i=1;i<cardsToCheck.length;i++){ //then iterates, starting at 1
            let currentCard=cardsToCheck[i].charAt(1)//checks ecah cards suit
            if(currentCard!== firstCardSuit){
                hasSameSuit = false //if not same suit return false
            }
        }
        return hasSameSuit;
    }
    function hasDuplicates(cardsToCheck, numberOfDuplicates) { //takes in paramenters of array and num of duplicates searching for
        for (let i = 0; i < cardsToCheck.length; i++) {//iterates over cardsToCheck
            let count = 1;//counting duplicates
    
            for (let j = i + 1; j < cardsToCheck.length; j++) {
                if (cardsToCheck[i].charAt(0) === cardsToCheck[j].charAt(0)) {//checks if the value of each card is the same as the next one
                    count++;
                     let cardCandidate = cardsToCheck[i].charAt(0);
                    if (count === numberOfDuplicates) {//if it found the desired num of dupicates
                         return cardCandidate; 
                    }
                }
            }
        }
    
        return false; 
    }
    function isSequential(cardsToCheck){
        
        let myArray=[]
        for(let i=0;i<cardsToCheck.length;i++){
            myArray.push(cardsToCheck[i].charAt(0))//pushes card values to new array
        }
       
        for(let i=0;i<myArray.length;i++){
            if(faceCards[myArray[i]]){
                myArray[i] = faceCards[myArray[i]]//converts faceCards to their numeric element if they exist
            } else {
                myArray[i] = parseInt(myArray[i])//otherwise just make it an int
            }
        } 
        myArray=myArray.slice().sort((a, b) => a - b);//function to sort numeric array
        console.log(myArray)
        let inSequence = true

        if(myArray[4]===14){//if theres an A...
            myArray.pop();
            myArray.unshift(1);//make it a 1 instead
        }
        for(let i=1;i<myArray.length;i++){
            if(myArray[i] !== myArray[i-1]+1){//compares array element to previous element
                inSequence = false
            }
        }
        return inSequence
    }

    function highestHand(fiveCards){
        const codeValues = [];
        
        for (let i = 0; i < fiveCards.length; i++) {
            codeValues.push(fiveCards[i].code);//pushes the cards code into its own array to use with every other function
            
        }
        
        //use all functions

        if(hasRoyalFlush(codeValues)){
            return "You have a Royal Flush!"
        };
        if(hasStraightFlush(codeValues)){
            return "You have a Straigh Flush!"
        };
        if(hasFourOfAKind(codeValues)){
            return "You have 4 of a Kind"
        };      
        if(hasFullhouse(codeValues)){
            return "You have a Full house"
        };
        if(hasFlush(codeValues)){
            return "You have a Flush"
        };
         if(hasStraight(codeValues)){
            return "You have a Straight"
         };
        if(hasThreeOfAKind(codeValues)){
            return "You have 3 of a Kind"
        };
        if(hasTwoPair(codeValues)){
            return "You have 2 Pairs"
        };
        if(hasPair(codeValues)){
            return "You have a Pair"
        }
        else{
        return (`High Card: ${hasHighCard(codeValues)}`);
        }
        

    }
    //call main function
    pickFiveCards()
    

})()