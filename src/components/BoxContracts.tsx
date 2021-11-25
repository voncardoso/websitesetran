
import { Box, Icon, Stack } from '@chakra-ui/react';
import { log } from 'console';

import { AiOutlineEyeInvisible, AiOutlineReload } from  "react-icons/ai";
import styles from './style.module.scss';


export function BoxContracts(){
 const vizualizat = document.querySelector("[data-name='aqui']");
 console.log(vizualizat)
    function handleClick() {

    }
    return(
      
        <Box 
            align="center" 
            justifyContent="center"
            alignSelf="center" 
            maxWidth={880}
            ml="auto"
            mr="auto"
            mt="15vh"
            pt="10"
            
         >

           <table>
             <thead>
               <tr className={styles.table}>
                 <th>Rodovia</th>
                 <th>Orçamento</th>
                 <th>Inicio</th>
                 <th>Status</th>
               </tr>
             </thead>

             <tbody>
               <tr className={styles.table} data-name='aqui'>
                 <td className={styles.radiousRight}>PA-88</td>
                 <td>100.100.000.00</td>
                 <td>14/08/2021</td>
                 <td className={styles.ativo} >Ativo</td>
                 <td className={styles.vizualizar}><AiOutlineReload color="#0074D8" cursor="pointer" onClick={handleClick}/></td>
                 <td className={styles.radiousleft}>
                   <AiOutlineEyeInvisible color="#0074D8" cursor="pointer"/>
                  </td>
               </tr>
               <tr className={styles.table}>
                 <td className={styles.radiousRight}>PA-88</td>
                 <td>100.100.000.00</td>
                 <td>14/08/2021</td>
                 <td className={styles.ativo} >Ativo</td>
                 <td><AiOutlineReload color="#0074D8" cursor="pointer"/></td>
                 <td className={styles.radiousleft}>
                   <AiOutlineEyeInvisible color="#0074D8" cursor="pointer"/>
                  </td>
               </tr>

               <tr className={styles.table}>
                 <td className={styles.radiousRight}>PA-88</td>
                 <td>100.100.000.00</td>
                 <td>14/08/2021</td>
                 <td className={styles.ativo} >Ativo</td>
                 <td><AiOutlineReload color="#0074D8" cursor="pointer"/></td>
                 <td className={styles.radiousleft}>
                   <AiOutlineEyeInvisible color="#0074D8" cursor="pointer"/>
                  </td>
               </tr>

               <tr className={styles.table}>
                 <td className={styles.radiousRight}>PA-88</td>
                 <td>100.100.000.00</td>
                 <td>14/08/2021</td>
                 <td className={styles.ativo} >Ativo</td>
                 <td><AiOutlineReload color="#0074D8" cursor="pointer" /></td>
                 <td className={styles.radiousleft}>
                   <AiOutlineEyeInvisible color="#0074D8" cursor="pointer"/>
                  </td>
               </tr>
             </tbody>
           </table>
    </Box>
    );
}