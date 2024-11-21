export type Level = {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: number[];
    
}


export const levels: Level[] = [
    { title:'magreza', color:'#ff0a0a', icon:'down', imc: [0, 18.5] },
    { title:'normal', color:'#62f32b', icon:'up', imc: [18.6, 24.9] },
    { title:'sobrepeso', color:'#33a392', icon:'down', imc: [25, 30] },
    { title:'obesidade', color:'#234aff', icon:'down', imc: [30.1, 99] }
]


export function imcCalculate (height: number, weight: number){
const imc = weight / (height * height);

for( let i in levels){
    if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
        
        return levels[i];
    }
}
return null;
}