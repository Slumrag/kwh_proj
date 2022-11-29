import stl from './Form.module.scss'
import React from 'react'
// import Radio  label={''}  from "../../UI/Input/Input";
import Radio  from "../../UI/Radio/Radio";
export default function Form({action,method,fields,...props}) {

  return (
    <form className={stl.Form} action={action} method={method}>
        <fieldset className={stl.fieldset}>
          <legend className={stl.legend}>Выберите максимальную мощность</legend>
          <div className={stl.radioOptions}>
            
            <Radio
              label={'менее 150 кВт'}
              id='power1' 
              name={'powerBracket'}
              value={'150'}
              checked={'checked'}
            /> 
            <Radio
              label={'150 – 670 кВт'}
              id='power2' 
              name={'powerBracket'}
              value={'150-670'}
            /> 
            <Radio
              label={'670 кВт – 10 МВт'}
              id='power3' 
              name={'powerBracket'}
              value={'670-10000'}
            /> 
            <Radio
              label={'более 10 МВт'}
              id='power4' 
              name={'powerBracket'}
              value={'10000'}
            /> 
            </div>
        </fieldset>

        <fieldset className={stl.fieldset}>
          <legend className={stl.legend}>Выберите зону для 2 ЦК</legend>
           <div className={stl.radioOptions}>

            <Radio
              label={'день/ночь'}
              id='powerZone1' 
              name={'powerZone'}
              value={'d/n'}
              checked={'checked'}
              /> 
           <Radio
              label={'ночь/пик/полупик'}
              id='powerZone2' 
              name={'powerZone'}
              value={'n/p/hp'}
            /> 
           </div>
        </fieldset>
        <fieldset className={stl.fieldset}>
          <legend className={stl.legend}>Выберите уровень мощности</legend>
           <div className={stl.radioOptions}>
           <Radio
              label={'ВН'}
              id='powerLevel1' 
              name={'powerLevel'}
              value={'VN'}
              checked={'checked'}
              /> 
           <Radio
               label={'СН1'}
               id='powerLevel2' 
               name={'powerLevel'}
               value={'SN1'}
               /> 
          
           <Radio
              label={'СН2'}
              id='powerLevel3' 
              name={'powerLevel'}
              value={'SN2'}
              /> 
           <Radio
              label={'НН'}
              id='powerLevel4' 
              name={'powerLevel'}
              value={'NN'}
              /> 
            </div>
        </fieldset>
        <input type="submit" value="sub" />
    </form>
  )
}
