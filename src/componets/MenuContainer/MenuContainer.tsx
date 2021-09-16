import React, { useContext } from 'react'
import styles from '../MenuContainer/menucontainer.module.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useCategory } from '../../hooks/useCategory';
import { usePosts } from '../../hooks/usePosts';
import { Utilscontext } from '../../Contexts/UtilsContext';

type Globlastextprops = {
 textGlobals: string;
}
export default function MenuContainer({ textGlobals } : Globlastextprops) {
    const {setBusca } = useContext(Utilscontext)
    const { categoria } = useCategory()
   
      const handleChange = (event) => {
        setBusca(event.target.value);
      }
     //usar no RadioGroup //
return (
<div className={styles.ContainerMenuPosition}>
    <div className={styles.ContainerMenu}>
        <FormControl component="fieldset">
        <label className={styles.title}>{ textGlobals }</label>
        <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
        <FormControlLabel value={""} control={<Radio />} label={'No Filter'} />
            {categoria.map((value, index) => {
                return(
                    <FormControlLabel key={index} value={value.category} control={<Radio />} label={value.category} />
                )
            }) }
            
      </RadioGroup>
    </FormControl>  
    </div>
</div>
);
}