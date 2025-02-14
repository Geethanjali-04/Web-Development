var careers = ['software developer', 'artist', 'coder', 'chef'];
var careerIndex = 0;
var characterIndex = 0;
var container = document.getElementById('container');
updateText();

function updateText()
{
    characterIndex ++;
    container.innerHTML = `<h2>I am ${careers[careerIndex] == 'artist' ? 'an': 'a'} ${careers[careerIndex].slice(0, characterIndex)}</h2>`;
    if(careerIndex === careers.length)
    {
        careerIndex = 0;
    }
    if( characterIndex === careers[careerIndex].length )
    {
        careerIndex ++;
        characterIndex = 0;
    }
    setTimeout (updateText, 400);
}