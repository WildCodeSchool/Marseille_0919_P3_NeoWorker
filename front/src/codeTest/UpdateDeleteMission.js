import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const UpdateDeleteMission =(props)=>{
    const params = props.match.params

    const [updateIdMission,setUpdateIdMission]=useState({
        title:''
    })
  

    const fetchDataMission = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/mission/${params.id}`,updateIdMission)
        .catch((err) => console.log(err))
    }

    const fetchDeleteDataMission = () => {
        axios.delete(`http://localhost:5000/mission/${params.id}`)
        .catch((err) => console.log(err))

    }


    return(
    <div>
         <form onSubmit={fetchDataMission}>
         <input id="title" name="title" value={updateIdMission.title} required type="text"
        onChange={(e) => { setUpdateIdMission({ ...updateIdMission, title: e.target.value }) }} />
        <button type="submit">submit</button>

        </form>
        <button onClick={fetchDeleteDataMission}>delete</button>


       
        {/* <p>status</p>
        <p>{updateIdMission.status}</p>
        <p>address</p>
        <p>{updateIdMission.address}</p>
        <p>cp</p>
        <p>{updateIdMission.cp}</p>
        <p>mobilite</p>
        <p>{updateIdMission.mobilite}</p>
        <p>disponibilite</p>
        <p>{updateIdMission.disponibilite}</p>
        <p>pref_lieu_de_travail</p>
        <p>{updateIdMission.pref_lieu_de_travail}</p>
        <p>tjm_min</p>
        <p>{updateIdMission.tjm_min}</p>
        <p>tjm_max</p>
        <p>{updateIdMission.tjm_max}</p>
        <p>word</p>
        <p>{updateIdMission.word}</p>
        <p>powerpoint</p>
        <p>{updateIdMission.powerpoint}</p>
        <p>microsoft</p>
        <p>{updateIdMission.microsoft}</p>
        <p>crm_hubspot</p>
        <p>{updateIdMission.crm_hubspot}</p>
        <p>crm_salesforce</p>
        <p>{updateIdMission.crm_salesforce}</p>
        <p>crm_pipedrive</p>
        <p>{updateIdMission.crm_pipedrive}</p>
        <p>crm</p>
        <p>{updateIdMission.crm}</p>
        <p>suite_adobe</p>
        <p>{updateIdMission.suite_adobe}</p>
        <p>illustrator</p>
        <p>{updateIdMission.illustrator}</p>
        <p>in_design</p>
        <p>{updateIdMission.in_design}</p>
        <p>photoshop</p>
        <p>{updateIdMission.photoshop}</p>
        <p>marketing_fb</p>
        <p>{updateIdMission.marketing_fb}</p>
        <p>google_adwards</p>
        <p>{updateIdMission.google_adwards}</p>
        <p>insta</p>
        <p>{updateIdMission.insta}</p>
        <p>reseaux_sociaux</p>
        <p>{updateIdMission.reseaux_sociaux}</p>
        <p>keynote</p>
        <p>{updateIdMission.keynote}</p>
        <p>pages</p>
        <p>{updateIdMission.pages}</p>
        <p>gsuite_google</p>
        <p>{updateIdMission.gsuite_google}</p>
        <p>numbers</p>
        <p>{updateIdMission.numbers}</p>
        <p>erp_sap</p>
        <p>{updateIdMission.erp_sap}</p>
        <p>ciel_gestion</p>
        <p>{updateIdMission.ciel_gestion}</p>
        <p>cegid</p>
        <p>{updateIdMission.cegid}</p>
        <p>sage_gestion_commercial</p>
        <p>{updateIdMission.sage_gestion_commercial}</p>
        <p>sage_comptabilite</p>
        <p>{updateIdMission.sage_comptabilite}</p>
        <p>quadra</p>
        <p>{updateIdMission.quadra}</p>
        <p>reso_pb</p>
        <p>{updateIdMission.reso_pb}</p>
        <p>empathie</p>
        <p>{updateIdMission.empathie}</p>
        <p>intelligence_emo</p>
        <p>{updateIdMission.intelligence_emo}</p>
        <p>communication</p>
        <p>{updateIdMission.communication}</p>
        <p>gestion_temps</p>
        <p>{updateIdMission.gestion_temps}</p>
        <p>gestion_stress</p>
        <p>{updateIdMission.gestion_stress}</p>
        <p>creativite</p>
        <p>{updateIdMission.creativite}</p>
        <p>esprit_entre</p>
        <p>{updateIdMission.esprit_entre}</p>
        <p>audace</p>
        <p>{updateIdMission.audace}</p>
        <p>vision_visu</p>
        <p>{updateIdMission.vision_visu}</p>
        <p>motivation</p>
        <p>{updateIdMission.motivation}</p>
        <p>presence</p>
        <p>{updateIdMission.presence}</p>
        <p>sens_collectif</p>
        <p>{updateIdMission.sens_collectif}</p>
        <p>curiosite</p>
        <p>{updateIdMission.curiosite}</p>
        <p>sens_effort</p>
        <p>{updateIdMission.sens_effort}</p>
        <p>sport</p>
        <p>{updateIdMission.sport}</p>
        <p>passion</p>
        <p>{updateIdMission.passion}</p>
        <p>engagement_asso</p>
        <p>{updateIdMission.engagement_asso}</p>
        <p>autres_softskill</p>
        <p>{updateIdMission.autres_softskill}</p>
        <p>gestion_admin_compta</p>
        <p>{updateIdMission.gestion_admin_compta}</p>
        <p>gestion_commerciale</p>
        <p>{updateIdMission.gestion_commerciale}</p>
        <p>gestion_op</p>
        <p>{updateIdMission.gestion_op}</p>
        <p>marketing_com_digit</p>
        <p>{updateIdMission.marketing_com_digit}</p>
        <p>gestion_fi_controle_gestion</p>
        <p>{updateIdMission.gestion_fi_controle_gestion}</p>
        <p>dsi</p>
        <p>{updateIdMission.dsi}</p>
        <p>gestion_rh_juridique</p>
        <p>{updateIdMission.gestion_rh_juridique}</p>
        <p>gestion_rel_client</p>
        <p>{updateIdMission.gestion_rel_client}</p>
        <p>francais</p>
        <p>{updateIdMission.francais}</p>
        <p>anglais</p>
        <p>{updateIdMission.anglais}</p>
        <p>italien</p>
        <p>{updateIdMission.italien}</p>
        <p>chinois</p>
        <p>{updateIdMission.chinois}</p>
        <p>russe</p>
        <p>{updateIdMission.russe}</p>
        <p>arabe</p>
        <p>{updateIdMission.arabe}</p>
        <p>allemand</p>
        <p>{updateIdMission.allemand}</p>
        <p>autres_langue</p>
        <p>{updateIdMission.autres_langue}</p>         */}

    </div>
    )
}

export default UpdateDeleteMission;