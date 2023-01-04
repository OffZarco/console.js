    // Bloc JS

    const monSouhait = ('Je souhaite devenir développeur web')
    const number = ('Mon numéro favoris')
    const blc = ('balek.com')

    console.log(monSouhait)
    console.log(number)
    console.log(blc)

    const person = {
        firstName: 'ALexandre',
        lastName: 'Cousin',
        age: 21,
        quoi: 'FEUR'
    }

    const identite = {
        prenom: 'Balek',
        nom: '.com',
        age: 'FEUR',
        ahah: 'B'
    }

    const nom = 'toto'
    const age = 30
    const homme = true

    console.log("Nom " + nom)
    console.log("Age " + age)
    console.log("Homme " + homme) 



    // Calcul JS

    function Addition(number1, number2) {
        return number1 * number2
    }
    const result = Addition(10,330)
    console.log(result)


    // Convert secondes 

    function convert(minutes) {
        return minutes * 60
    }
    const time = convert(4)
    console.log(time)


    // N+1

    function balek(i) {
        alert(i++)
    }
    const i = 3
    console.log(i)
    
    // Triangle

    function triangle(base, hauteur, surface) {
        return base * hauteur / surface
    }
    const taille = triangle(10, 10, 2)
    console.log(taille)

    // Reverse word

    function reverseString(word) {
        return word.split("").reverse("").join("")
    }
    console.log(reverseString("hello"))

    // Math.max = fonction Math.max() renvoie le plus grand nombre d'une série de 0 ou plusieurs nombres.

    const getMax = [10, 2, 3]
    console.log(Math.max(...getMax))

    // getFirst 

    const Array = [100, 2, 3, 4]
    const first = Array[0]

    console.log(first)

    // Récupérer le lien de la page web

    console.log("URL de la page = " + window.location.href);

    
    // Divis 

    function nombre(chiffre1, chiffre2) {
        return chiffre1 % chiffre2
    }

    const resultat =  nombre(3, 3)
    console.log(resultat)

    
    // < 100
    if (80 + 20 <= 100) {
        console.log(true)
    } else {
        console.log(false)
    }

    // Convert second

    const moonLanding = new Date('January 03, 23 16:12:18')

    console.log(moonLanding.getSeconds());

    // <= 0

    function checkNbr(a) {
        if (a <= 0){
            return true
        } else {
            return false
        }
    }

    console.log(checkNbr(0))

    // nbr egaux 

    function nbr(a, b) {
        if (a === b) {
            return true
        } else  {
            return false
        }
    }
    
    console.log(nbr(2, 2))

    // divisible

    function isDivisible(x){
        return x % 5 === 0;
    }
    console.log(isDivisible(10))


    /*exercice 16*/
    function hmTos(a,b){
        return (a * 60 * 60)+(b * 60);
    }
    console.log (hmTos(1,10))

    
    /*exercice 17*/
    function reverse(array){
        var output = [];
        for (var i = array.length; i > 0; i--){
            output.push(array.pop());
        }
        return output;
    }
    
    console.log(reverse([1,2,3,4,5,6,7]));


    /*exercice 18*/
    function getLast(array) {
        if (array.length === 0) {
        return undefined
        }
        return array[array.length - 1];
    }
    console.log(getLast([17,2,3,7,5,1,8,6]))


    /*exercice 19*/
    function isEqual(a,b){
        return a === b ;
    }


    console.log(isEqual(0,0))

    
    /*exercice 20*/
    function isEmpty(str){
        return (str.length === 0)
    }
    console.log(isEmpty(''))
