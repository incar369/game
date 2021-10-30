import {Person,configs} from './src/person'

//let Player = new Person(merge(configs.base,{type:'player',name:'ferius',enemy:false,class:'worior'}))

//let Monsters = new Person(merge(configs.base,{type:'monsters',name:'ork',enemy:true,class:'worior',crit_chance:50}))




let win=[0,0]

for(let i =0;i<100;i++){
    battle (
        new Person(merge(configs.base,{type:'player',name:'ferius',enemy:false,class:'worior'})),
        new Person(merge(configs.base,{type:'monsters',name:'ork',enemy:true,class:'worior',crit_chance:1,crit_rate:2}))
    )
}


function merge(a,b){
    let c = {};
    for (let att in a) { c[att] = a[att]; }
    for (let att in b) { c[att] = b[att]; }
    return c;
}
function battle (_a,_b){
    let a,b
    let sys_battle_obj = {}
if(gRI(0,1)>0){
    a = _a;
    b = _b;
}else{
    a=_b
    b=_a
}
    sys_battle_obj.a_si = setInterval(kik,1000/a.phisic_attak_spd,a,b,sys_battle_obj)
    sys_battle_obj.b_si = setInterval(kik,1000/b.phisic_attak_spd,b,a,sys_battle_obj)
}
function kik(a,b,sys){
    if(b.current_hp <= 0){
        b.alive=false;
        if(b.enemy==true){win[0]++}
        if(b.enemy==false){win[1]++}
        b.isDead();
        clearInterval(sys.a_si);
        clearInterval(sys.b_si);
        console.log(win)
    }

    let attak = undefined
    if(gRI(0, 100)<=a.crit_chance){
        attak=a.phisic_attak*a.crit_rate
    }else{
        attak=a.phisic_attak
    }

    b.current_hp=b.current_hp-(attak-b.phisic_def)
}
function gRI(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
