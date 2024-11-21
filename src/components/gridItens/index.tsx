import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import iconStyleUp from '../../assets/up.png'
import iconStyleDown from '../../assets/down.png'


type Props = {
    item: Level;
}


export function GridItem ({item}: Props) {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon == 'up' ? iconStyleUp : iconStyleDown} alt="" width='30' />
            </div>
            <div className={styles.iconTitle}>
                <strong>{item.title}</strong>
            </div>
            <div className={styles.iconInfo}>
                IMC esta entre <strong>{item.imc[0]} e {item.imc[1]}</strong>
            </div>
        </div>
    )
}