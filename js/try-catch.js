function buttonName(){
    const ageField = document.getElementById('');
    const ageText = ageField.value;
    
    try{
        if(isNaN(age)){
            throw 'please enter a valid number'
        }
    }
    catch(err){
        console.log('error:', err) // উপরে throw করলে এখানে এসে catch করবে
    }
    finally{
        console.log('error খাক অথবা না খাক finally জিনিসটা কাজ করবেই')
    }

    console.log(111111);
}