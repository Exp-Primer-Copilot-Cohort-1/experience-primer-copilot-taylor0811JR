function skillsMember(){
    var skills = ["HTML", "CSS", "JS", "PHP", "MySQL"];
    var member = ["A", "B", "C", "D", "E"];
    var memberSkills = [];
    for(var i = 0; i < member.length; i++){
        var skill = [];
        for(var j = 0; j < skills.length; j++){
            var random = Math.floor(Math.random() * 2);
            if(random == 1){
                skill.push(skills[j]);
            }
        }
        memberSkills.push(skill);
    }
    return memberSkills;
}