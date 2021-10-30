class Person{
    constructor(cfg_obj){   
        for(let key in cfg_obj){
            if(cfg_obj[key]!=null){
                this[key]=cfg_obj[key]
            }
        }
    }
    isDead(){
        console.log(this.name + " is dead")
        if(this.dropList.exp_per_kill){return this.dropList.exp_per_kill}
    }
}
let configs={
    base:{
        type:'not assigned',
        name:'not assigned',
        enemy:false,
        class:'not assigned',
        lvl:1,
        exp:0,
        live:false,
        exp_boost:1,
        gold_boost:1,
        mineral_boost:1,
        drop_boost:1,
        max_hp:10,
        current_hp:5,
        regeration_hp:0.2,
        max_mp:5,
        current_mp:2,
        regeration_hp:0.1,
        phisic_def:0,
        magic_def:0,
        phisic_attak:1,
        magic_attak:1,
        phisic_attak_spd:10,
        magic_attak_spd:10,
        crit_chance:1,
        crit_rate:1.1,
        accuracy:10,
        evasion:10,
        fire_resistance:0,
        woter_resistance:0,
        wind_resistance:0,
        earth_resistance:0,
        holy_resistance:0,
        dark_resistance:0,
        fire_wekness:0,
        woter_wekness:0,
        wind_wekness:0,
        earth_wekness:0,
        holy_wekness:0,
        dark_wekness:0,
        dropList:'not assigned',
        inventory:'not assigned',
        activeInventoryPlayer:'not assigned',
        spell:'not assigned',
        skill :'not assigned'
    },
    player:{},
    monsters:{}
}


export { Person, configs }


/*
type,name,enemy,_class,lvl,exp,live,exp_boost,gold_boost,mineral_boost,drop_boost,max_hp,current_hp,regeration_hp,max_mp,current_mp,regeration_mp,phisic_def,magic_def,
phisic_attak,magic_attak,phisic_attak_spd,magic_attak_spd,crit_chance,crit_rate,accuracy,evasion,
fire_resistance,woter_resistance,wind_resistance,earth_resistance,holy_resistance,dark_resistance,
fire_wekness,woter_wekness,wind_wekness,earth_wekness,holy_wekness,dark_wekness
*/