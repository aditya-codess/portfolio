const allSkills = 
{
    'Frontend Development':{
        "CSS":70,
        "REACT":45,
        "TAILWIND CSS":55,
    },
    'Backend Development':{
        "NODEJS":70,
        "EXPRESSJS":50,
        "POSTGRESQL":50,
    },
    "Languages":{
        "C/C++":80,
        "JAVASCRIPT":70,
        "TYPESCRIPT":55
    },
    'Other Skills':{
        "PHOTOSHOP":70,
        "ADOBE LIGHTROOM":80,
        "CANVA":90,
    },
}
let skillCount = 1;
function AddSkillModule(title,progressObj)
{
    function createElement(tag,className,parent)
    {
        const temp = document.createElement(tag);
        temp.classList.add(className);
        if(parent != undefined)
        {
            parent.appendChild(temp);
        }
        return temp;
    }
    
    const moduleObj = createElement("div","card",skillsContainer);
    moduleObj.classList.add("animate");
    moduleObj.classList.add(`delay-${skillCount++}`);
    moduleObj.classList.add(`shadow`);
    createElement("div","card-title",moduleObj).innerHTML = title;
    for(const key of Object.keys(progressObj))
    {
        const skillBar = createElement("div","skill-bar",moduleObj);
        createElement("div","skill-bar-title",skillBar).innerHTML = key;
        const fill = createElement("div","skill-bar-meter-fill",createElement("div","skill-bar-meter",skillBar));
        fill.classList.add("repeat");
        fill.style.width = `${progressObj[key]}%`;
    }
}

const skillsContainer = document.querySelector("#skills-container");
for(const key of Object.keys(allSkills))
{
    AddSkillModule(key,allSkills[key]);
}