'use strict';
module.exports = (sequelize, DataTypes) => {
  const Missions = sequelize.define('Missions', {
    mobilite: DataTypes.STRING,
    pref_lieu_de_travail: DataTypes.STRING,
    disponibilite: DataTypes.STRING,
    fourchette_tarifaire: DataTypes.STRING,
    excel: DataTypes.STRING,
    powerpoint: DataTypes.STRING,
    word: DataTypes.STRING,
    microsoft_365: DataTypes.STRING,
    crm_hubspot: DataTypes.STRING,
    crm_salesforce: DataTypes.STRING,
    crm_pipedrive: DataTypes.STRING,
    crm: DataTypes.STRING,
    suite_adobe: DataTypes.STRING,
    illustrator: DataTypes.STRING,
    in_design: DataTypes.STRING,
    photoshop: DataTypes.STRING,
    marketing_fb: DataTypes.STRING,
    google_adwards: DataTypes.STRING,
    insta: DataTypes.STRING,
    reseaux_sociaux: DataTypes.STRING,
    keynote: DataTypes.STRING,
    pages: DataTypes.STRING,
    gsuite_google: DataTypes.STRING,
    numbers: DataTypes.STRING,
    erp_sap: DataTypes.STRING,
    ciel_gestion: DataTypes.STRING,
    cegid: DataTypes.STRING,
    sage_gestion_commercial: DataTypes.STRING,
    sage_comptabilite: DataTypes.STRING,
    quadra: DataTypes.STRING,
    reso_pb: DataTypes.STRING,
    confiance: DataTypes.STRING,
    empathie: DataTypes.STRING,
    intelligence_emo: DataTypes.STRING,
    communication: DataTypes.STRING,
    gestion_temps: DataTypes.STRING,
    gestion_stress: DataTypes.STRING,
    creativite: DataTypes.STRING,
    esprit_entre: DataTypes.STRING,
    audace: DataTypes.STRING,
    vision_visu: DataTypes.STRING,
    motivation: DataTypes.STRING,
    presence: DataTypes.STRING,
    sens_collectif: DataTypes.STRING,
    curiosite: DataTypes.STRING,
    sens_effort: DataTypes.STRING,
    sport: DataTypes.STRING,
    passion: DataTypes.STRING,
    engagement_asso: DataTypes.STRING,
    autres_softskill: DataTypes.STRING,
    gestion_admin_compta: DataTypes.STRING,
    gestion_op: DataTypes.STRING,
    gestion_commerciale: DataTypes.STRING,
    marketing_com_digit: DataTypes.STRING,
    gestion_fi_controle_gestion: DataTypes.STRING,
    dsi: DataTypes.STRING,
    gestion_rh_juridique: DataTypes.STRING,
    gestion_rel_client: DataTypes.STRING,
    francais: DataTypes.STRING,
    anglais: DataTypes.STRING,
    italien: DataTypes.STRING,
    chinois: DataTypes.STRING,
    russe: DataTypes.STRING,
    arabe: DataTypes.STRING,
    allemand: DataTypes.STRING,
    autres_langue: DataTypes.STRING
  }, {});

  //table de jointures
  Missions.associate = function(models) {
    Missions.belongsToMany(models.users, {
      through: 'tj_users_missions'
    })
    Missions.belongsToMany(models.freelancer,{
      through: 'tj_missions_f'
    })
  };
  return Missions;
};