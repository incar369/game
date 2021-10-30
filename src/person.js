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

export default Person


/*
type,name,enemy,_class,lvl,exp,live,exp_boost,gold_boost,mineral_boost,drop_boost,max_hp,current_hp,regeration_hp,max_mp,current_mp,regeration_mp,phisic_def,magic_def,
phisic_attak,magic_attak,phisic_attak_spd,magic_attak_spd,crit_chance,crit_rate,accuracy,evasion,
fire_resistance,woter_resistance,wind_resistance,earth_resistance,holy_resistance,dark_resistance,
fire_wekness,woter_wekness,wind_wekness,earth_wekness,holy_wekness,dark_wekness
*/