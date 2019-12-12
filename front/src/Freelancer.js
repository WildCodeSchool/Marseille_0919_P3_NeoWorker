import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Freelancer() {

//hooks de la data freelancer pour get
const[idFree,setIdFree] = useState([])
const[allFree,setAllFree]= useState([])

console.log(allFree)
//hooks du post de la data freelancer
  const[freelancer,setFreelancer] = useState({
      img: "",
      title: "",
      firstname: "",
      lastname: "",
      address: "",
      mobilite: 0,
      pref_lieu_de_travail: 0,
      disponibilite: 0,
      fourchette_tarifaire: 0,
      password: "",
      email: ""
  })

  //hooks pour modif le freelancer
  const[updateFreelancer, setUpdateFreelancer]= useState({
      img: "",
      title: "",
      firstname: "",
      lastname: "",
      address: "",
      mobilite: 0,
      pref_lieu_de_travail: 0,
      disponibilite: 0,
      fourchette_tarifaire: 0,
      password: "",
      email: ""
  })

  // cycle de vie du fetchData pour getter le profil du freelancer
  useEffect(() => {
      fetchData()
  }, [])

  const fetchData=()=>{
    axios.get(`http://localhost:5000/freelancer/profil/1`)
    .then(res => setIdFree(res.data))
    .catch((err)=>console.log(err))
  }

  // recup all freelancer 
  useEffect(() => {
    allFreelancer()
  }, [])
  
  const allFreelancer = () => {
    axios.get('http://localhost:5000/allFreelancers')
    .then(res => setAllFree(res.data))
    .catch((err) => console.log(err))
  }


  //le post sur la data 
  const queryData = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/freelancer/profil',freelancer)
    .then(fetchData)
    .catch(err=>console.log(err))
  }

  //update sur la data
  const updateQueryData = (e) => {
    e.preventDefault()
      axios.put('http://localhost:5000/freelancer/profil/1', updateFreelancer)
      .then(fetchData)
      .catch(err=>console.log(err))
  }
  return (
    <div style={{textAlign:'center'}}>
      {/* Les champs de la bdd  */}
      <ul>
        <p>title</p>
        <li>{idFree.title}</li> 
        <p>firstname</p>
        <li>{idFree.firstname}</li> 
        <p>lastname</p>
        <li>{idFree.lastname}</li>
        <p>address</p>
        <li>{idFree.address}</li> 
        <p>mobilite</p>
        <li>{String(idFree.mobilite)}</li>
        <p>pref_lieu_de_travail</p> 
        <li>{idFree.pref_lieu_de_travail}</li>
        <p>disponibilite</p>
        <li>{idFree.disponibilite}</li> 
        <p>fourchette_tarifaire</p>
        <li>{idFree.fourchette_tarifaire}</li> 
        <p>password</p>
        <li>{idFree.password}</li>
        <p>email</p>
        <li>{idFree.email}</li> 
        <p>excel</p>
        <li>{String(idFree.excel)}</li>
        <p>powerpoint</p>
        <li>{String(idFree.powerpoint)}</li>
        <p>word</p>
        <li>{String(idFree.word)}</li>
        <p>microsoft_365</p>
        <li>{String(idFree.microsoft_365)}</li>
        <p>crm_hubspot</p>
        <li>{String(idFree.crm_hubspot)}</li>
        <p>crm_salesforce</p>
        <li>{String(idFree.salesforce)}</li>
        <p>crm_pipedrive</p>
        <li>{String(idFree.crm_pipedrive)}</li>
        <p>crm</p>
        <li>{String(idFree.crm)}</li>
        <p>suite_adobe</p>
        <li>{String(idFree.suite_adobe)}</li>
        <p>illustrator</p>
        <li>{String(idFree.illustrator)}</li>
        <p>in_design</p>
        <li>{String(idFree.in_design)}</li>
        <p>photoshop</p>
        <li>{String(idFree.photoshop)}</li>
        <p>marketing_fb</p>
        <li>{String(idFree.marketing_fb)}</li>
        <p>google_adwards</p>
        <li>{String(idFree.google_adwards)}</li>
        <p>insta</p>
        <li>{String(idFree.insta)}</li>
        <p>reseaux_sociaux</p>
        <li>{String(idFree.reseaux_sociaux)}</li>
        <p>keynote</p>
        <li>{String(idFree.keynote)}</li>
        <p>pages</p>
        <li>{String(idFree.pages)}</li>
        <p>gsuite_google</p>
        <li>{String(idFree.gsuite_google)}</li>
        <p>numbers</p>
        <li>{String(idFree.numbers)}</li>
        <p>erp_sap</p>
        <li>{String(idFree.erp_sap)}</li>
        <p>ciel_gestion</p>
        <li>{String(idFree.ciel_gestion)}</li>
        <p>cegid</p>
        <li>{String(idFree.cegid)}</li>
        <p>sage_gestion_commercial</p>
        <li>{String(idFree.sage_gestion_commercial)}</li>
        <p>sage_comptabilite</p>
        <li>{String(idFree.sage_comptabilite)}</li>
        <p>quadra</p>
        <li>{String(idFree.quadra)}</li>
        <p>reso_pb</p>
        <li>{String(idFree.reso_pb)}</li>
        <p>confiance</p>
        <li>{String(idFree.confiance)}</li>
        <p>empathie</p>
        <li>{String(idFree.empathie)}</li>
        <p>intelligence_emo</p>
        <li>{String(idFree.intelligence_emo)}</li>
        <p>communication</p>
        <li>{String(idFree.communication)}</li>
        <p>gestion_temps</p>
        <li>{String(idFree.gestion_temps)}</li>
        <p>gestion_stress</p>
        <li>{String(idFree.gestion_stress)}</li>
        <p>creativite</p>
        <li>{String(idFree.creativite)}</li>
        <p>esprit_entre</p>
        <li>{String(idFree.esprit_entre)}</li>
        <p>audace</p>
        <li>{String(idFree.audace)}</li>
        <p>vision_visu</p>
        <li>{String(idFree.vision_visu)}</li>
        <p>motivation</p>
        <li>{String(idFree.motivation)}</li>
        <p>presence</p>
        <li>{String(idFree.presence)}</li>
        <p>sens_collectif</p>
        <li>{String(idFree.sens_collectif)}</li>
        <p>curiosite</p>
        <li>{String(idFree.curiosite)}</li>
        <p>sens_effort</p>
        <li>{String(idFree.sens_effort)}</li>
        <p>sport</p>
        <li>{String(idFree.sport)}</li>
        <p>passion</p>
        <li>{String(idFree.passion)}</li>
        <p>engagement_asso</p>
        <li>{String(idFree.engagement_asso)}</li>
        <p>autres_softskill</p>
        <li>{String(idFree.autres_softskill)}</li>
        <p>gestion_admin_compta</p>
        <li>{String(idFree.gestion_admin_compta)}</li>
        <p>gestion_op</p>
        <li>{String(idFree.gestion_op)}</li>
        <p>gestion_commerciale</p>
        <li>{String(idFree.gestion_commerciale)}</li>
        <p>marketing_com_digit</p>
        <li>{String(idFree.marketing_com_digit)}</li>
        <p>gestion_fi_controle_gestion</p>
        <li>{String(idFree.gestion_fi_controle_gestion)}</li>
        <p>dsi</p>
        <li>{String(idFree.dsi)}</li>
        <p>gestion_rh_juridique</p>
        <li>{String(idFree.gestion_rh_juridique)}</li>
        <p>gestion_rel_client</p>
        <li>{String(idFree.gestion_rel_client)}</li>
        <p>francais</p>
        <li>{String(idFree.francais)}</li>
        <p>anglais</p>
        <li>{String(idFree.anglais)}</li>
        <p>italien</p>
        <li>{String(idFree.italien)}</li>
        <p>chinois</p>
        <li>{String(idFree.chinois)}</li>
        <p>russe</p>
        <li>{String(idFree.russe)}</li>
        <p>arabe</p>
        <li>{String(idFree.arabe)}</li>
        <p>allemand</p>
        <li>{String(idFree.allemand)}</li>
        <p>autres_langue</p>
        <li>{String(idFree.autres_langue)}</li>
      
      </ul>

    <form onSubmit={queryData} >

      {/* les input pour poster sur la bdd */}
      <p>title</p>
      <input type ="text" id="title" name="title" value={freelancer.title} required onChange={(e) => {setFreelancer({...freelancer, title:e.target.value})}} />
      <p>firstname</p>
      <input type ="text" id="firstname" name="firstname" value={freelancer.firstname} required onChange={(e) => {setFreelancer({...freelancer, firstname:e.target.value})}} />
      <p>lastname</p>
      <input type ="text" id="lastname" name="lastname" value={freelancer.lastname} required onChange={(e) => {setFreelancer({...freelancer, lastname:e.target.value})}} />
      <p>adress</p>
      <input type ="text" id="address" name="address" value={freelancer.address} required onChange={(e) => {setFreelancer({...freelancer, address:e.target.value})}} />
      <p>mobilite</p>
      <input type ="text" id="mobilite" name="mobilite" value={freelancer.mobilite} required onChange={(e) => {setFreelancer({...freelancer, mobilite:e.target.value})}} />
      <p>pref_lieu_de_travail</p>
      <input type ="text" id="pref_lieu_de_travail" name="pref_lieu_de_travail" value={freelancer.pref_lieu_de_travail} required onChange={(e) => {setFreelancer({...freelancer, pref_lieu_de_travail:e.target.value})}} />
      <p>disponibilite</p>
      <input type ="text" id="disponibilite" name="disponibilite" value={freelancer.disponibilite} required onChange={(e) => {setFreelancer({...freelancer, disponibilite:e.target.value})}} />
      <p>fourchette_tarifaire</p>
      <input type ="text" id="fourchette_tarifaire" name="fourchette_tarifaire" value={freelancer.fourchette_tarifaire} required onChange={(e) => {setFreelancer({...freelancer, fourchette_tarifaire:e.target.value})}} />
      <p>password</p>
      <input type ="text" id="password" name="password" value={freelancer.password} required onChange={(e) => {setFreelancer({...freelancer, password:e.target.value})}} />
      <p>email</p>
      <input type ="text" id="email" name="email" value={freelancer.email} required onChange={(e) => {setFreelancer({...freelancer, email:e.target.value})}} />
      
      <button type="submit">Add</button>
      </form>

      {/* les input pour update sur la bdd */}
      <form onSubmit={updateQueryData} >

      <p>title</p>
      <input type ="text" id="title" name="title" value={updateFreelancer.title} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, title:e.target.value})}} />
      <p>firstname</p>
      <input type ="text" id="firstname" name="firstname" value={updateFreelancer.firstname} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, firstname:e.target.value})}} />
      <p>lastname</p>
      <input type ="text" id="lastname" name="lastname" value={updateFreelancer.lastname} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, lastname:e.target.value})}} />
      <p>adress</p>
      <input type ="text" id="address" name="address" value={updateFreelancer.address} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, address:e.target.value})}} />
      <p>mobilite</p>
      <input type ="text" id="mobilite" name="mobilite" value={updateFreelancer.mobilite} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, mobilite:e.target.value})}} />
      <p>pref_lieu_de_travail</p>
      <input type ="text" id="pref_lieu_de_travail" name="pref_lieu_de_travail" value={updateFreelancer.pref_lieu_de_travail} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, pref_lieu_de_travail:e.target.value})}} />
      <p>disponibilite</p>
      <input type ="text" id="disponibilite" name="disponibilite" value={updateFreelancer.disponibilite} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, disponibilite:e.target.value})}} />
      <p>fourchette_tarifaire</p>
      <input type ="text" id="fourchette_tarifaire" name="fourchette_tarifaire" value={updateFreelancer.fourchette_tarifaire} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, fourchette_tarifaire:e.target.value})}} />
      <p>password</p>
      <input type ="text" id="password" name="password" value={updateFreelancer.password} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, password:e.target.value})}} />
      <p>email</p>
      <input type ="text" id="email" name="email" value={updateFreelancer.email} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, email:e.target.value})}} />

      <button type="submit">Update</button>

    </form>

    </div>
  
  )}

export default Freelancer;